import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

interface ISelectProps {
  name: string;
  label: string;
  options?: { value: string; label: string; disabled?: boolean }[] | undefined;
  disabled?: boolean;
}

const NSelect = ({ name, label, options, disabled }: ISelectProps) => (
  <Controller
    name={name}
    render={({ field, fieldState: { error } }) => (
      <Form.Item label={label}>
        <Select
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

export default NSelect;
