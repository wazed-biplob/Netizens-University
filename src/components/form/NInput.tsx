import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

const NInput = ({
  type,
  name,
  label,
  disabled,
}: {
  type: string;
  name: string;
  label?: string;
  disabled?: boolean;
}) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <Input
              {...field}
              type={type}
              id={name}
              size="large"
              disabled={disabled}
            />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default NInput;
