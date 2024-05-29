import { Button, Dropdown, Table, TableColumnsType, Tag } from "antd";
import { ISemester } from "../../../global";
import {
  useGetAllRegisteredSemestresQuery,
  useUpdateRegisteredSemestreStatusMutation,
} from "../../../redux/feature/courseManagement";
import moment from "moment";
import { useState } from "react";
type TDataType = Pick<
  ISemester,
  "status" | "startDate" | "endDate" | "academicSemester"
>;
const items = [
  { label: "Upcoming", key: "UPCOMING" },
  { label: "Ongoing", key: "ONGOING" },
  { label: "Ended", key: "ENDED" },
];

const RegisteredSemestre = () => {
  const [semestreId, setSemestreId] = useState();

  const {
    data: registeredSemesterData,
    isFetching,
  } = useGetAllRegisteredSemestresQuery(undefined);

  const [updateSemestreStatus] = useUpdateRegisteredSemestreStatusMutation();

  const tableData = registeredSemesterData?.data?.map(
    ({ _id, academicSemester, status, startDate, endDate }) => ({
      key: _id,
      name: `${academicSemester?.name} ${academicSemester.year}`,
      startDate: moment(new Date(startDate)).format("MMMM"),
      endDate: moment(new Date(endDate)).format("MMMM"),
      status,
    })
  );
  const handleStatusUpdate = (data) => {
    const updatedData = {
      id: semestreId,
      data: {
        status: data?.key,
      },
    };
    updateSemestreStatus(updatedData);
  };

  const menuProps = {
    items,
    onClick: handleStatusUpdate,
  };

  const columns: TableColumnsType<TDataType> = [
    {
      title: "Academic Semestre",
      key: "name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",

      render: (item) => {
        let color = "";
        if (item === "UPCOMING") {
          color = "blue";
        } else if (item === "ONGOING") {
          color = "green";
        } else if (item === "ENDED") {
          color = "red";
        }
        return <Tag color={color}>{item}</Tag>;
      },
    },
    {
      title: "Start Date",
      key: "startDate",
      dataIndex: "startDate",
      defaultSortOrder: "descend",
    },
    {
      title: "End Date",
      key: "endDate",
      dataIndex: "endDate",
    },
    {
      title: "Action",
      key: "x",
      render: (item) => {
        return (
          <Dropdown menu={menuProps} trigger={["click"]}>
            <Button onClick={() => setSemestreId(item?.key)}>Update</Button>
          </Dropdown>
        );
      },
    },
  ];

  return (
    <>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </>
  );
};

export default RegisteredSemestre;
