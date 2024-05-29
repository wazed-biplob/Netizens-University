import { Button, Modal, Table, TableColumnsType } from "antd";
import {
  useAddFacultiesMutation,
  useGetAllCoursesQuery,
} from "../../../redux/feature/courseManagement";
import { useState } from "react";
import NForm from "../../../components/form/NForm";
import NSelect from "../../../components/form/NSelect";
import { useGetAllFacultiesQuery } from "../../../redux/feature/academicSemestre";

type TDataType = Pick<
  IAcademicSemestre,
  "name" | "year" | "startMonth" | "endMonth"
>;

const Courses = () => {
  const { data: courses, isFetching } = useGetAllCoursesQuery(undefined);
  const coursesData = courses?.data?.map(({ _id, title, prefix, code }) => ({
    key: _id,
    title,
    prefix,
    code,
  }));

  const columns: TableColumnsType<TDataType> = [
    {
      title: "Title",
      key: "title",
      dataIndex: "title",
    },
    {
      title: "Prefix",
      key: "prefix",
      dataIndex: "prefix",
    },
    {
      title: "Code",
      key: "code",
      dataIndex: "code",
    },

    {
      title: "Action",
      key: "x",
      render: (item) => {
        return (
          <>
            <AddFacultyModal courseData={item} />
          </>
        );
      },
    },
  ];

  return (
    <>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={coursesData}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </>
  );
};

export default Courses;

const AddFacultyModal = ({ courseData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // get All Faculties
  const { data: facultiesData } = useGetAllFacultiesQuery(undefined);
  // show them in the table
  const facultiesOption = facultiesData?.data?.map((item) => ({
    value: item?._id,
    label: item?.fullName,
  }));
  // add faculties in into the course
  const [addFaculties] = useAddFacultiesMutation(undefined);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSubmit = (data) => {
    const facultyData = {
      courseId: courseData.key,
      data: data,
    };

    addFaculties(facultyData);
  };
  return (
    <>
      <Button onClick={showModal}>Add Faculty</Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <NForm onSubmit={onSubmit}>
          <NSelect
            mode="multiple"
            options={facultiesOption}
            name="faculties"
            label="Faculty"
          />
          <Button htmlType="submit">Submit</Button>
        </NForm>
      </Modal>
    </>
  );
};
