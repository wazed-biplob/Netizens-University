import { NavLink } from "react-router-dom";
import { TItem } from "../routes/AdminRoutes";

export interface ISidebarItems {
  key: string;
  label: React.ReactNode;
  children?: ISidebarItems[];
}

export const adminSidebarItems = (items: TItem[], role: string) => {
  const sidebarItems = items.reduce((acc: ISidebarItems[], item) => {
    if (item?.path && item?.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.name}`}>{item.name}</NavLink>,
      });
    }
    if (item?.children) {
      acc.push({
        key: item?.name as string,
        label: item?.name,
        children: item?.children.map((child) => {
          if (child?.name) {
            return {
              key: child.name,
              label: (
                <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>
              ),
            };
          }
        }),
      });
    }

    return acc;
  }, []);
  return sidebarItems;
};
