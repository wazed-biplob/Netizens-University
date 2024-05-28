import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";

const NDatePicker = ({ name, label }: { name: string; label?: string }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <DatePicker {...field} size="large" style={{ width: "100%" }} />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default NDatePicker;
