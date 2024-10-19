import { createContext, useEffect, useState } from "react";
import {
  data,
  GameProp,
  OptionProp,
  SearchProp,
} from "../Types/casinoLiveProps";
import games from "../data/games.json";

type ChildrenProp = {
  children: React.ReactNode;
};

export const Context = createContext(data);

export const CustomContext = ({ children }: ChildrenProp) => {
  const [game, setGame] = useState<GameProp[]>([]);
  const [option, setOption] = useState<OptionProp>({
    start: true,
  });
  const [search, setSearch] = useState<SearchProp>({ search: "" });

  useEffect(() => {
    const PromiseGames = new Promise<GameProp[]>((resolve) => {
      setTimeout(() => {
        resolve(games);
      }, 3000);
    });

    PromiseGames.then((response) => setGame(response)).catch((error) =>
      console.log(error)
    );
  }, []);
  return (
    <Context.Provider
      value={{ game, setGame, option, setOption, search, setSearch }}
    >
      {children}
    </Context.Provider>
  );
};
