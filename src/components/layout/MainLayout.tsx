import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/feature/hook";
import { logout } from "../../redux/feature/auth/authSlice";

const { Header, Content, Footer } = Layout;

// const items: MenuProps["items"] = [
//   {
//     key: 1,
//     label: <NavLink to="/admin/dashboard">Dashboard</NavLink>,
//   },
//   {
//     key: 2,
//     label: "Profile",
//     children: [
//       {
//         key: 21,
//         label: "User Update",
//       },
//     ],
//   },
//   {
//     key: 3,
//     label: "User Management",
//     children: [
//       {
//         key: 31,
//         label: <NavLink to="/admin/create-admin">Create Admin</NavLink>,
//       },
//       {
//         key: 32,
//         label: <NavLink to="/admin/create-faculty">Create faculty</NavLink>,
//       },
//       {
//         key: 33,
//         label: <NavLink to="/admin/create-student">Create student</NavLink>,
//       },
//     ],
//   },
// ];

const MainLayout = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout())
  }
  return (
    <Layout style={{ height: "100vh", gap: "0px", margin: "0", padding: "0" }}>
      <Sidebar />
      <Layout>
        <Header>
          <Button onClick={handleLogout}>Logout</Button>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
