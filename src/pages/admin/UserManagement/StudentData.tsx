import {
  Button,
  Pagination,
  Space,
  Table,
  TableColumnsType,
  TableProps,
} from "antd";

import { useState } from "react";
import { IQueryParam, IStudent } from "../../../global";
import { useGetAllStudentsQuery } from "../../../redux/feature/academicSemestre";
import { Link } from "react-router-dom";

type TDataType = Pick<IStudent, "name" | "_id" | "id">;

const StudentData = () => {
  const [params, setParams] = useState<IQueryParam[]>([]);
  const [page, setPage] = useState(1);
  const { data: studentData, isFetching } = useGetAllStudentsQuery([
    { name: "limit", value: 3 },
    { name: "page", value: page },
    { name: "sort", value: "id" },
    ...params,
  ]);
  const metaData = studentData?.meta;
  const tableData = studentData?.data?.map(
    ({ _id, fullName, id, email, contactNo }) => ({
      key: _id,
      fullName,
      id,
      email,
      contactNo,
    })
  );
  const columns: TableColumnsType<TDataType> = [
    {
      title: "Name",
      key: "fullName",
      dataIndex: "fullName",
      showSorterTooltip: { target: "full-header" },
    },

    {
      title: "Roll No.",
      key: "id",
      dataIndex: "id",
      defaultSortOrder: "descend",
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "Contact No.",
      key: "contactNo",
      dataIndex: "contactNo",
    },
    {
      title: "Action",
      key: "x",
      render: (item) => {
        return (
          <Space>
            <Link to={`/admin/student-data/${item?.key}`}>
              <Button>Update</Button>
            </Link>

            <Button>Details</Button>
            <Button>Block</Button>
          </Space>
        );
      },
      width: "1%",
    },
  ];

  const onChange: TableProps<TDataType>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: IQueryParam[] = [];
      filters?.name?.forEach((item) => {
        queryParams.push({ name: "name", value: item });
      });
      filters?.year?.forEach((item) => {
        queryParams.push({ name: "year", value: item });
      });
      setParams(queryParams);
    }
  };

  return (
    <>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
        pagination={false}
      />
      <Pagination
        className="border my-2"
        onChange={(value) => setPage(value)}
        pageSize={metaData?.page}
        total={metaData?.total}
      />
    </>
  );
};

export default StudentData;
