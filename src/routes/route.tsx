import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import App from "../App";
import { routesGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./AdminRoutes";
import Login from "../pages/student/Login";
import { ProtectedRoute } from "./ProtectedRoute";
import { studentPaths } from "./StudentRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute role="admin">
        <App />
      </ProtectedRoute>
    ),
    children: routesGenerator(adminPaths),
  },
  // {
  //   path: "/faculty",
  //   element: <App />,
  //   children: routesGenerator(facultyPaths),
  // },
  {
    path: "/student",
    element: (
      <ProtectedRoute role="student">
        <App />,
      </ProtectedRoute>
    ),
    children: routesGenerator(studentPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
