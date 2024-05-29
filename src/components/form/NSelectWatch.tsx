import { Form, Select } from "antd";
import { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";

interface ISelectProps {
  name: string;
  label: string;
  options?: { value: string; label: string; disabled?: boolean }[] | undefined;
  disabled?: boolean;
  mode?: "multiple" | undefined;
  onValueChange?: React.Dispatch<React.SetStateAction<string>>;
}

const NSelectWatch = ({
  name,
  label,
  options,
  disabled,
  mode,
  onValueChange,
}: ISelectProps) => {
  const method = useFormContext();
  const inputValue = useWatch({
    control: method.control,
    name: name,
  });
  useEffect(() => {
    onValueChange(inputValue);
  }, [inputValue]);
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            mode={mode}
            style={{ width: "100%" }}
            {...field}
            options={options}
            size="large"
            disabled={disabled}
          />
          {error && <p className="text-[red]">{error.message}</p>}
        </Form.Item>
      )}
    />
  );
};

export default NSelectWatch;
