import React, { FC, ReactNode } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import Header from "./Header";
import Navigation from "./Navigation";
import { DRAWER_WIDTH } from "../utils/constants";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      background: theme.palette.background.paper,
      marginLeft: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      ...theme.mixins.toolbar,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: DRAWER_WIDTH,
    },
  })
);

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Navigation />
      <main className={classes.contentShift}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

export default Layout;
