import { Input } from "antd";
import { Controller, useForm, useFormContext } from "react-hook-form";

const NInput = () => {
  const { register } = useFormContext();
  return (
    <>
      <input type="text" id="name" {...register("name")} />
      {/* {label ? label : null}
      <Controller
        name={name}
        render={({ field }) => <Input {...field} type={type} id={name} />}
      ></Controller> */}
    </>
  );
};

export default NInput;
