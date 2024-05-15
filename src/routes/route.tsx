import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import App from "../App";
import { routesGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./AdminRoutes";
// import { facultyPaths } from "./FacultyRoutes";
// import { studentPaths } from "./StudentRoutes";
import Login from "../pages/student/Login";
import { ProtectedRoute } from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/admin",
    element: <ProtectedRoute> <App /></ProtectedRoute>,
    children: routesGenerator(adminPaths),
  },
  // {
  //   path: "/faculty",
  //   element: <App />,
  //   children: routesGenerator(facultyPaths),
  // },
  // {
  //   path: "/student",
  //   element: <App />,
  //   children: routesGenerator(studentPaths),
  // },
  {
    path: "/login",
    element: <Login />,
  },
]);
