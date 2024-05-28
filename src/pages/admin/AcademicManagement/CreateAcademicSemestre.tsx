import { Button, Col, Flex } from "antd";

import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";
import { useAddAcademicSemestresMutation } from "../../../redux/feature/academicSemestre";
import {
  monthOptions,
  nameOptions,
  yearOptions,
} from "../../../components/constants/constants";
import NForm from "../../../components/form/NForm";
import { academicSemestreSchema } from "../../../schemas/academicSemestreSchema";
import NSelect from "../../../components/form/NSelect";
import { IAcademicSemestre, IResponse } from "../../../global";

const CreateAcademicSemestre = () => {
  const [addAcademicSemestre] = useAddAcademicSemestresMutation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    const name = nameOptions[Number(data?.name) - 1]?.label;
    const toastId = toast.loading("Creating Semestre...");
    const semestreData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    try {
      const res = (await addAcademicSemestre(semestreData)) as IResponse<
        IAcademicSemestre
      >;

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
          <NForm
            onSubmit={onSubmit}
            resolver={zodResolver(academicSemestreSchema)}
          >
            <NSelect label="Name" name="name" options={nameOptions} />
            <NSelect label="Year" name="year" options={yearOptions} />
            <NSelect
              label="Start Month"
              name="startMonth"
              options={monthOptions}
            />
            <NSelect label="End Month" name="endMonth" options={monthOptions} />
            <Button htmlType="submit">Submit</Button>
          </NForm>
        </Col>
      </Flex>
    </div>
  );
};

export default CreateAcademicSemestre;
