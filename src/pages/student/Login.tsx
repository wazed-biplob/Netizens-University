import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/feature/auth/authApi";
import { useAppDispatch } from "../../redux/feature/hook";
import { setUser } from "../../redux/feature/auth/authSlice";
import { verifyToken } from "../../utils/jwtDecode";
import { useNavigate } from "react-router-dom";
import { JwtPayload } from "jwt-decode";
import { toast } from "sonner";

interface IUser {
  userId: string;
  role: string;
  exp: number;
  iat: number;
}

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [login, { data }] = useLoginMutation();
  const onSubmit = async (data: { id: string; password: string }) => {
    const toastId = toast.loading("Loading");
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
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
      <label htmlFor="name">Name</label>
      <input className="border mx-2 inline" type="text" {...register("id")} />

      <label htmlFor="password">Password</label>
      <input
        className="border mx-2 inline"
        type="text"
        {...register("password")}
      />
      <Button htmlType="submit" className="border mx-2 px-2">
        Submit
      </Button>
    </form>
  );
};

export default Login;
