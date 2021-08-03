import HomeIcon from "@material-ui/icons/Home";
import Home from "../pages/Home";
import RouteItem from "../model/RouteItem.model";

export const routes: Array<RouteItem> = [
  {
    key: "router-home",
    title: "Home",
    path: "/",
    component: Home,
    icon: HomeIcon,
  },
];
