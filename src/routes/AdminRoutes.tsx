import AcademicSemestre from "../pages/admin/AcademicManagement/AcademicSemestre";
import CreateAcademicSemestre from "../pages/admin/AcademicManagement/CreateAcademicSemestre";
import RegisteredSemestres from "../pages/admin/CourseManagement/RegisteredSemestres";
import SemestreRegistration from "../pages/admin/CourseManagement/SemestreRegistration";
import CreateAdmin from "../pages/admin/CreateAdmin";
import DashbaordLayout from "../pages/admin/DashbaordLayout";
import CreateStudent from "../pages/admin/UserManagement/CreateStudent";
import StudentData from "../pages/admin/UserManagement/StudentData";
import StudentDetails from "../pages/admin/UserManagement/StudentDetails";
import CreateFaculty from "../pages/faculty/CreateFaculty";

export interface IRoute {
  path: string;
  element: React.ReactNode;
  children?: IRoute[];
}

export type TItem =
  | {
      name?: string;
      path?: string;
      element?: React.ReactNode;
      children?: TItem[];
    }
  | undefined;

export const adminPaths: TItem[] = [
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

      {
        name: "Create A. Semestre",
        path: "create-academic-semestre",
        element: <CreateAcademicSemestre />,
      },
      {
        name: "Create A. Faculty",
        path: "create-academic-faculty",
        element: <AcademicSemestre />,
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicSemestre />,
      },
      {
        name: "Create A. Department",
        path: "create-academic-department",
        element: <AcademicSemestre />,
      },
      {
        name: "Academic Department",
        path: "academic-department",
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
      { name: "Student", path: "student-data", element: <StudentData /> },
      {
        path: "student-data/:studentId",
        element: <StudentDetails />,
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
  {
    name: "Course Management",
    children: [
      {
        name: "Semestre Registration",
        path: "semestre-registration",
        element: <SemestreRegistration />,
      },
      {
        name: "Registered Semestres",
        path: "registered-semestres",
        element: <RegisteredSemestres />,
      },
      {
        name: "Semestre Registration",
        path: "semestre-registration",
        element: <SemestreRegistration />,
      },
      {
        name: "Semestre Registration",
        path: "semestre-registration",
        element: <SemestreRegistration />,
      },
    ],
  },
];
