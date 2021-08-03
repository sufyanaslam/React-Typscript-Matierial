import React, { FC, ReactElement } from "react";
import { Helmet } from "react-helmet";
import { APP_TITLE, PAGE_TITLE_HOME } from "../utils/constants";
import { Players } from "../players";
import PlayerList from "../components/PlayerList";

const Home: FC<{}> = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_HOME} | {APP_TITLE}
        </title>
      </Helmet>
      <PlayerList players={Players} />
      
    </>
  );
};

export default Home;
