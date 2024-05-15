import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import OfferedCourses from "../pages/student/OfferedCourses";

export const facultyPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashboard />,
  },
  {
    name: "Offered Courses",
    path: "offered-course",
    element: <OfferedCourses />,
  },
];
