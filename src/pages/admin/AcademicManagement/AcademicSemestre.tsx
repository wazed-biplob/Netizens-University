import { Button, Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemestresQuery } from "../../../redux/feature/academicSemestre";
import { IAcademicSemestre, IQueryParam } from "../../../global";
import { useState } from "react";

type TDataType = Pick<
  IAcademicSemestre,
  "name" | "year" | "startMonth" | "endMonth"
>;

const AcademicSemestre = () => {
  const [params, setParams] = useState<IQueryParam[] | undefined>(undefined);
  const { data: semestreData, isFetching } = useGetAllSemestresQuery(params);
  const tableData = semestreData?.data?.map(
    ({ _id, name, year, startMonth, endMonth }) => ({
      key: _id,
      name,
      year,
      startMonth,
      endMonth,
    })
  );
  const columns: TableColumnsType<TDataType> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      filters: [
        {
          text: "Autumn",
          value: "Autumn",
        },
        {
          text: "Summer",
          value: "Summer",
        },
        {
          text: "Fall",
          value: "Fall",
        },
      ],

      // onFilter: (value, record) => record.name.indexOf(value as string) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    {
      title: "Year",
      key: "year",
      dataIndex: "year",
      showSorterTooltip: { target: "full-header" },
      filters: [
        {
          text: "2025",
          value: 2025,
        },
        {
          text: "2026",
          value: 2026,
        },
        {
          text: "2027",
          value: 2027,
        },
      ],

      onFilter: (value, record) => record.year.indexOf(value as string) === 0,
      sorter: (a, b) => a.year.length - b.year.length,
      sortDirections: ["descend"],
    },
    {
      title: "Start Month",
      key: "startMonth",
      dataIndex: "startMonth",
      defaultSortOrder: "descend",
    },
    {
      title: "End Month",
      key: "endMonth",
      dataIndex: "endMonth",
    },
    {
      title: "Action",
      key: "x",
      render: () => {
        return (
          <div>
            <Button>Update</Button>
          </div>
        );
      },
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
      />
    </>
  );
};

export default AcademicSemestre;
