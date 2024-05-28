import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import NForm from "../../../components/form/NForm";
import NInput from "../../../components/form/NInput";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import NSelect from "../../../components/form/NSelect";
import {
  bloodgroupOptions,
  genderOptions,
} from "../../../components/constants/constants";
import NDatePicker from "../../../components/form/NDatePicker";
import { useGetAllSemestresQuery } from "../../../redux/feature/academicSemestre";
import { useAddStudentMutation } from "../../../redux/feature/userManagement/userManagementApi";

const CreateStudent = () => {
  const { data: sData, isLoading: sIsLoadng } = useGetAllSemestresQuery(
    undefined
  );

  const [addStudent, { data, error }] = useAddStudentMutation();
  console.log("d", data, "e", error);
  const semestreOptions = sData?.data?.map((item) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));
  const studentDefaultValue = {
    name: {
      firstName: "I am ",
      middleName: "Student",
      lastName: "Number 1",
    },
    gender: "male",

    email: "john@gmail.com",
    contactNo: "1235678",
    emergencyContactNo: "987-654-3210",

    bloodGroup: "A+",
    presentAddress: "123 Main St, Cityville",
    permanentAddress: "456 Oak St, Townsville",
    guardian: {
      fatherName: "James Doe",
      fatherOccupation: "Engineer",
      fatherContactNo: "111-222-3333",
      motherName: "Mary Doe",
      motherOccupation: "Teacher",
      motherContactNo: "444-555-6666",
    },
    localGuardian: {
      name: "Alice Johnson",
      occupation: "Doctor",
      contactNo: "777-888-9999",
      address: "789 Pine St, Villageton",
    },
    academicDepartment: "6652b6d072afe62c2776d997",
  };
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    const studentData = {
      password: "student123",
      student: data,
    };
    const formData = new FormData();
    formData.append("data", JSON.stringify(studentData));
    formData.append("file", data.image);
    addStudent(formData);

    console.log(Object.fromEntries(formData));
  };
  return (
    <div>
      <Row>
        <Col span={24}>
          <NForm onSubmit={onSubmit} defaultValues={studentDefaultValue}>
            <Divider>Personal Information</Divider>
            <Row gutter={8}>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <NInput type="text" name="name.firstName" label="First Name" />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <NInput
                  type="text"
                  name="name.middleName"
                  label="Middle Name"
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <NInput type="text" name="name.lastName" label="Last Name" />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <NSelect options={genderOptions} name="gender" label="Gender" />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <NDatePicker name="dateOfBirth" label="Date of Birth" />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <NSelect
                  options={bloodgroupOptions}
                  name="bloodGroup"
                  label="Blood Group"
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <Controller
                  name="image"
                  render={({ field: { onChange, value, ...field } }) => (
                    <Form.Item label="Picture">
                      <Input
                        type="file"
                        {...field}
                        value={value?.fileName}
                        onChange={(e) => onChange(e?.target?.files?.[0])}
                      />
                    </Form.Item>
                  )}
                />
              </Col>
              <Divider>Contact Information</Divider>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <NInput type="text" name="email" label="Email" />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <NInput type="text" name="contactNo" label="Contact No." />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <NInput
                  type="text"
                  name="emergencyContactNo"
                  label="Emergency Contact No."
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <NInput
                  type="text"
                  name="presentAddress"
                  label="Present Address"
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <NInput
                  type="text"
                  name="permanentAddress"
                  label="Permanent Address"
                />
              </Col>
              <Divider>Guardian</Divider>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <NInput
                  type="text"
                  name="guardian.fatherName"
                  label="Father's Name"
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <NInput
                  type="text"
                  name="guardian.fatherOccupation"
                  label="Father's Occupation"
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <NInput
                  type="text"
                  name="guardian.fatherContactNo"
                  label="Father's Contact No."
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <NInput
                  type="text"
                  name="guardian.motherName"
                  label="Mother's Name"
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <NInput
                  type="text"
                  name="guardian.motherOccupation"
                  label="Mother's Occupation"
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <NInput
                  type="text"
                  name="guardian.motherContactNo"
                  label="Mother's Contact No."
                />
              </Col>
              <Divider>Local Guardian</Divider>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <NInput type="text" name="localGuardian.name" label="Name" />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <NInput
                  type="text"
                  name="localGuardian.occupation"
                  label="Occupation"
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <NInput
                  type="text"
                  name="localGuardian.contactNo"
                  label="Contact No."
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <NInput
                  type="text"
                  name="localGuardian.address"
                  label="Address"
                />
              </Col>
            </Row>
            <Row gutter={8}>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <NSelect
                  disabled={sIsLoadng}
                  options={semestreOptions}
                  name="admissionSemester"
                  label="Admission Semestre"
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <NSelect
                  name="academicDepartment"
                  label="Academic Department"
                />
              </Col>
            </Row>
            <Button htmlType="submit">Submit</Button>
          </NForm>
        </Col>
      </Row>
    </div>
  );
};

export default CreateStudent;
