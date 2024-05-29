import { adminSidebarItems } from "../../utils/sidebarItemgGenerator";
import { adminPaths } from "../../routes/AdminRoutes";
import Sider from "antd/es/layout/Sider";
import { Menu } from "antd";
import { useAppSelector } from "../../redux/feature/hook";
import {
  useCurrentToken,
  useCurrentUser,
} from "../../redux/feature/auth/authSlice";
import { studentPaths } from "../../routes/StudentRoutes";
import { verifyToken } from "../../utils/jwtDecode";
interface IUser {
  userId: string;
  role: string;
  iat: number;
  exp: number;
}
const Sidebar = () => {
  const token = useAppSelector(useCurrentToken);
  let user;
  if (token) {
    user = verifyToken(token) as IUser;
  }

  const userRole = {
    ADMIN: "admin",
    FACULTY: "faculty",
    STUDENT: "student",
  };

  let sidebarItems;

  switch (user?.role) {
    case userRole.ADMIN:
      sidebarItems = adminSidebarItems(adminPaths, "admin");

      break;
    case userRole.FACULTY:
      sidebarItems = adminSidebarItems(adminPaths, "faculty");
      break;
    case userRole.STUDENT:
      sidebarItems = adminSidebarItems(studentPaths, "student");
      break;
  }
  return (
    <>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        style={{ height: "100vh", position: "sticky", top: 0, left: 0 }}
      >
        <div className="text-white font-3xl text-center py-2">
          Netizens University
        </div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={sidebarItems}
        />
      </Sider>
      ;
    </>
  );
};

export default Sidebar;
