import React, { FC, ReactElement, useEffect } from "react";
import { Helmet } from "react-helmet";
import { APP_TITLE, PAGE_TITLE_HOME } from "../utils/constants";
import { Players } from "../players";
import PlayerList from "../components/PlayerList";

const Home: FC<{}> = (): ReactElement => {
  const [playersList, setPlayersList] = React.useState<any>([]);

  useEffect(() => {
    if (playersList.length == 0) {
      setPlayersList(Players);
    }
  }, []);

  const handlePlayerDelete = (index: any) => {
    let list = playersList;
    list.splice(index, 1);
    setPlayersList([...list]);
  };
  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_HOME} | {APP_TITLE}
        </title>
      </Helmet>
      <PlayerList players={playersList} onDelete={handlePlayerDelete} />
    </>
  );
};

export default Home;
