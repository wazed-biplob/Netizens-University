import { Button, Col, Flex } from "antd";

import { toast } from "sonner";

import NForm from "../../../components/form/NForm";
import NSelect from "../../../components/form/NSelect";

import NInput from "../../../components/form/NInput";
import {
  useAddCourseMutation,
  useGetAllCoursesQuery,
} from "../../../redux/feature/courseManagement";

const CreateCourse = () => {
  const { data: courses } = useGetAllCoursesQuery(undefined);
  const [createCourse] = useAddCourseMutation(undefined);

  const preRequisiteCoursesOptions = courses?.data?.map((item) => ({
    value: item._id,
    label: item.title,
  }));
  const onSubmit = async (data) => {
    const toastId = toast.loading("Creating Semestre...");
    const courseData = {
      ...data,
      code: Number(data?.code),
      credits: Number(data?.credits),
      isDeleted: false,
      preRequisiteCourses: data?.preRequisiteCourses?.map((item) => ({
        course: item,
        isDeleted: false,
      })),
    };

    try {
      const res = (await createCourse(courseData)) as IResponse<any>;

      if (res?.error) {
        toast.error(res?.error?.data?.message, { id: toastId, duration: 2000 });
      } else {
        toast.success("Semestre created!", { id: toastId, duration: 2000 });
      }
    } catch (e) {
      toast.message("Something went wrong");
      console.log(e);
    }
  };

  return (
    <div>
      <Flex justify="center" align="center">
        <Col span={6}>
          <NForm onSubmit={onSubmit}>
            <NInput type="text" name="title" label="Title" />
            <NInput type="text" name="prefix" label="Prefix" />
            <NInput type="text" name="code" label="Code" />
            <NInput type="text" name="credits" label="Credits" />
            <NSelect
              options={preRequisiteCoursesOptions}
              name="preRequisiteCourses"
              label="Prerequisite Courses"
              mode="multiple"
            />
            <Button htmlType="submit">Submit</Button>
          </NForm>
        </Col>
      </Flex>
    </div>
  );
};

export default CreateCourse;
