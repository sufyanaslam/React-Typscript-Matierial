import React, { FC, ReactElement } from "react";
import { List, Divider } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import MenuItem from "./MenuItem";
import { routes } from "../config";
import RouteItem from "../model/RouteItem.model";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divider: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
);

const Menu: FC<{}> = (): ReactElement => {
  const classes = useStyles();
  return (
    <List>
      {routes.map((route: RouteItem, index: any) => (
        <>
          {
            <MenuItem
              key={index}
              title={route.title}
              icon={route.icon}
              path={route.path}
              component={route.component}
            />
          }
          <Divider className={classes.divider} />
        </>
      ))}
    </List>
  );
};

export default Menu;
