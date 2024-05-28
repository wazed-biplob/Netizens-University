import { IRoute, TItem } from "../routes/AdminRoutes";

export const routesGenerator = (items: TItem[]) => {
  const routes = items.reduce((acc: IRoute[], item) => {
    if (item?.path && item?.element) {
      acc.push({
        path: item?.path,
        element: item?.element,
      });
    }
    if (Array.isArray(item?.children)) {
      item?.children.forEach((child: TItem) => {
        if (child?.path && child?.element) {
          acc.push({
            path: child?.path,
            element: child?.element,
          });
        }
      });
    }
    return acc;
  }, []);

  return routes;
};
