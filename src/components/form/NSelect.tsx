import { Form, Select } from "antd";
import { Controller, useFormContext, useWatch } from "react-hook-form";

interface ISelectProps {
  name: string;
  label: string;
  options?: { value: string; label: string; disabled?: boolean }[] | undefined;
  disabled?: boolean;
  mode?: "multiple" | undefined;
}

const NSelect = ({ name, label, options, disabled, mode }: ISelectProps) => {
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

export default NSelect;
