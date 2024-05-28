import { Button, Col, Flex } from "antd";

import { toast } from "sonner";
import { semestreStatusOptions } from "../../../components/constants/constants";
import NForm from "../../../components/form/NForm";
import NSelect from "../../../components/form/NSelect";
import { useGetAllSemestresQuery } from "../../../redux/feature/academicSemestre";
import NDatePicker from "../../../components/form/NDatePicker";
import NInput from "../../../components/form/NInput";
import { IResponse } from "../../../global";
import { useAddRegisteredSemestreMutation } from "../../../redux/feature/courseManagement";

const SemestreRegistration = () => {
  const { data: academicSemestreData } = useGetAllSemestresQuery([
    { name: "sort", value: "year" },
  ]);

  const [addSemestre] = useAddRegisteredSemestreMutation(undefined);

  const academicSemestreOptions = academicSemestreData?.data?.map((item) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));
  const onSubmit = async (data) => {
    const toastId = toast.loading("Creating Semestre...");
    const semestreData = {
      ...data,
      minCredit: Number(data.minCredit),
      maxCredit: Number(data.maxCredit),
    };
    console.log(semestreData);
    try {
      const res = (await addSemestre(semestreData)) as IResponse<any>;

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
            <NSelect
              label="Academic Semestre"
              name="academicSemester"
              options={academicSemestreOptions}
            />
            <NSelect
              label="Status"
              name="status"
              options={semestreStatusOptions}
            />
            <NDatePicker name="startDate" label="Start Date" />
            <NDatePicker name="endDate" label="End Date" />

            <NInput type="text" name="minCredit" label="Min Credit" />
            <NInput type="text" name="maxCredit" label="Max Credit" />

            <Button htmlType="submit">Submit</Button>
          </NForm>
        </Col>
      </Flex>
    </div>
  );
};

export default SemestreRegistration;
