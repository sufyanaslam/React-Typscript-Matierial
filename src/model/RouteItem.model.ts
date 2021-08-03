import { ComponentType, FC } from "react";

interface RouteItem {
    key: String
    title: String
    path?: String
    component?: FC<{}>
    icon?: ComponentType
}

export default RouteItem;
