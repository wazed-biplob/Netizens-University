import { Button, Row } from "antd";
import { useLoginMutation } from "../../redux/feature/auth/authApi";
import { useAppDispatch } from "../../redux/feature/hook";
import { setUser } from "../../redux/feature/auth/authSlice";
import { verifyToken } from "../../utils/jwtDecode";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import NForm from "../../components/form/NForm";
import NInput from "../../components/form/NInput";
import { FieldValues, SubmitHandler } from "react-hook-form";

interface IUser {
  userId: string;
  role: string;
  exp: number;
  iat: number;
}

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const { register, handleSubmit } = useForm();
  const [login] = useLoginMutation();

  const defaultValues = {
    id: "A-0001",
    password: "admin123",
  };
  const onSubmit: SubmitHandler<FieldValues> = async (data: {
    id: string;
    password: string;
  }) => {
    const toastId = toast.loading("Loading Dashboard");
    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();

      const user = verifyToken(res.data.accessToken) as IUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logged in", { id: toastId, duration: 2000 });
      navigate(`/${user?.role}/dashboard`);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <NForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <NInput type="text" name="id" label="Name" />
        <NInput type="text" name="password" label="Password" />
        <Button htmlType="submit" className="border px-2">
          Submit
        </Button>
      </NForm>
    </Row>
  );
};

export default Login;
