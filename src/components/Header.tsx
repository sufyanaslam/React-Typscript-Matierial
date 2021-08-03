import React, { ReactElement, FC } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Toolbar, CssBaseline } from "@material-ui/core";

import { DRAWER_WIDTH } from "../utils/constants";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBarShift: {
      marginLeft: DRAWER_WIDTH,
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    toolbar: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
  })
);

const Header: FC<{}> = (): ReactElement => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" elevation={0} className={classes.appBarShift}>
        <Toolbar className={classes.toolbar} />
      </AppBar>
    </>
  );
};

export default Header;
