import { Navigate } from "react-router-dom"
import { useCurrentToken } from "../redux/feature/auth/authSlice"
import { useAppSelector } from "../redux/feature/hook"

export const ProtectedRoute = ({children} : { children : React.ReactNode}) => {
    const token = useAppSelector(useCurrentToken)
    if (!token) {
        return <Navigate to='/login'></Navigate>
    }
    return children;
}