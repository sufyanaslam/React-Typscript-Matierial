import React, { FC, ReactElement } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { APP_TITLE } from "../utils/constants";
import { Drawer } from "@material-ui/core";
import AppMenu from "./AppMenu";
import { DRAWER_WIDTH } from "../utils/constants";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },

    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "20px",
      fontWeight: "bold",
      color: "white",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      background: `${theme.palette.primary.main}`,
    },
  })
);

const Navigation: FC<{}> = (): ReactElement => {
  const classes = useStyles();
  return (
    <>
      <Drawer
        variant="permanent"
        className={classes.drawer}
        classes={{
          paper: classes.drawer,
        }}
      >
        <div className={classes.toolbar}>{APP_TITLE}</div>
        <AppMenu />
      </Drawer>
    </>
  );
};

export default Navigation;
