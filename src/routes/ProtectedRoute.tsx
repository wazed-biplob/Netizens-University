import { Navigate } from "react-router-dom";
import { logout, useCurrentToken } from "../redux/feature/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/feature/hook";
import { verifyToken } from "../utils/jwtDecode";

interface IProtectedRoute {
  children: React.ReactNode;
  role: string | undefined;
}

export const ProtectedRoute = ({ children, role }: IProtectedRoute) => {
  const token = useAppSelector(useCurrentToken);
  let user;
  if (token) {
    user = verifyToken(token);
  }

  const dispatch = useAppDispatch();
  if (role !== undefined && role !== user?.role) {
    dispatch(logout());
    return <Navigate to="/login"></Navigate>;
  }
  if (!token) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};
