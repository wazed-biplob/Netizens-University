import { FormProvider, useForm } from "react-hook-form";

const NForm = ({ onsubmit, children }) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onsubmit)}>{children}</form>
    </FormProvider>
  );
};

export default NForm;
