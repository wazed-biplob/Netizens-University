import { Button, Col, Flex } from "antd";
import NForm from "../../../components/form/NForm";
import NInput from "../../../components/form/NInput";
import {
  useGetAcademicFacultiesQuery,
  useGetCourseFacultiesQuery,
} from "../../../redux/feature/academicSemestre";
import NSelectWatch from "../../../components/form/NSelectWatch";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import NTimerPicker from "../../../components/form/NTimerPicker";
import { useGetAllCoursesQuery } from "../../../redux/feature/courseManagement";
import NSelect from "../../../components/form/NSelect";

const OfferedCourses = () => {
  const [id, setId] = useState(undefined);

  const { data: courseData } = useGetAllCoursesQuery(undefined);

  const { data: facultyData, isFetching } = useGetCourseFacultiesQuery(id, {
    skip: !id,
  });

  console.log(facultyData?.data?.faculties);
  const courseDataOptions = courseData?.data?.map((item) => ({
    value: item._id,
    label: item?.title,
  }));

  const academicFacultyeOptions = facultyData?.data?.faculties.map((item) => ({
    value: item?._id,
    label: item?.fullName,
  }));
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <>
      <Flex justify="center" align="center">
        <Col span={6}>
          <NForm onSubmit={onSubmit}>
            <NSelectWatch
              options={courseDataOptions}
              name="course"
              label="Course"
              onValueChange={setId}
            />
            <NSelect
              label="Academic Faculty"
              name="academicFaculty"
              options={academicFacultyeOptions}
              disabled={!id || isFetching}
            />

            <NInput disabled={!id} type="text" name="test" label="test" />
            <NTimerPicker name="time" label="Start Time" />
            <NTimerPicker name="time" label="End Time" />
            <Button htmlType="submit">Submit</Button>
          </NForm>
        </Col>
      </Flex>
    </>
  );
};

export default OfferedCourses;
