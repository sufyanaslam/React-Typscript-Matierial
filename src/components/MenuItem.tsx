import React, { FC, ReactElement } from "react";
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Icon,
  IconButton,
} from "@material-ui/core";
import DefaultIcon from "@material-ui/icons/FileCopy";
import { NavLink } from "react-router-dom";
import RouteItem from "../model/RouteItem.model";

const MenuItem: FC<RouteItem> = (
  route: RouteItem,
  index: any
): ReactElement => {
  const handleNavigate = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ): void => {};

  return (
    <>
      <NavLink
        to={`${route.path}`}
        style={{ textDecoration: "none", color: "inherit" }}
        key={index}
        onClick={handleNavigate}
      >
        <ListItem key={index} button>
          <ListItemIcon>
            <IconButton size="small">
              <Icon component={route.icon || DefaultIcon} />
            </IconButton>
          </ListItemIcon>
          <ListItemText primary={route.title} />
        </ListItem>
      </NavLink>
    </>
  );
};

export default MenuItem;
