import AcademicSemestre from "../pages/admin/AcademicManagement/AcademicSemestre";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateStudent from "../pages/admin/CreateStudent";
import DashbaordLayout from "../pages/admin/DashbaordLayout";
import CreateFaculty from "../pages/faculty/CreateFaculty";

export interface IRoute {
  path: string;
  element: React.ReactNode;
  children?: IRoute[];
}

export interface IItem {
  name: string;
  path?: string;
  element?: React.ReactNode;
  children?: IItem[];
}

export const adminPaths: IItem[] = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <DashbaordLayout />,
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Academic Semestre",
        path: "academic-semestre",
        element: <AcademicSemestre />,
      },
    ],
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
    ],
  },
];
