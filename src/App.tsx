import React, { ReactElement, FC } from "react";
import {
  createTheme,
  Theme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Layout from "./components/Layout";
import { appTheme } from "./theme/appTheme";
import { routes } from "./config";
import { APP_TITLE } from "./utils/constants";
import RouteItem from "./model/RouteItem.model";
const AppContext = React.createContext(null);

const DefaultComponent: FC<{}> = (): ReactElement => (
  <div>{`No Component Defined.`}</div>
);

function App() {
  let theme: Theme = createTheme(appTheme);
  theme = responsiveFontSizes(theme);

  return (
    <>
      <Helmet>
        <title>{APP_TITLE}</title>
      </Helmet>
      <AppContext.Provider value={null}>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Layout>
                {routes.map((route: RouteItem) => (
                  <Route
                    key={`${route.key}`}
                    path={`${route.path}`}
                    component={route.component || DefaultComponent}
                    exact
                  />
                ))}
              </Layout>
            </Switch>
          </Router>
        </ThemeProvider>
      </AppContext.Provider>
    </>
  );
}

export default App;
