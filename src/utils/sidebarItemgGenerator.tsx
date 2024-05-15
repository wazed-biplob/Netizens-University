import { NavLink } from "react-router-dom";
import { IItem } from "../routes/AdminRoutes";

export interface ISidebarItems {
  key: string;
  label: React.ReactNode;
  children?: ISidebarItems[];
}

export const adminSidebarItems = (items: IItem[], role: string) => {
  const sidebarItems = items.reduce((acc: ISidebarItems[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.name}`}>{item.name}</NavLink>,
      });
    }
    if (item?.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }

    return acc;
  }, []);
  return sidebarItems;
};
