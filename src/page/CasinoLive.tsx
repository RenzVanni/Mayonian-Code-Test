import { useContext } from "react";
import { Context } from "../context/globalContext";
import Options from "../components/Options";
import GameCards from "../components/GameCards";
import Search from "../components/Search";
import New from "../components/New";
import Slot from "../components/Slot";
import Live from "../components/Live";
import Jackpot from "../components/Jackpot";
import Table from "../components/Table";
import Bingo from "../components/Bingo";
import Other from "../components/Other";

const CasinoLive = () => {
  const { option } = useContext(Context);
  return (
    <div className="h-full">
      <div className="flex items-center justify-center mb-2">
        <img src="/images/test-hero.png" alt="hero" />
      </div>

      <div className="flex items-center space-x-1 mb-3">
        <img src="/icons/test-bell.png" alt="bell" />
        <p className="text-sm">¡FELICIDADES artxxxxipa! GANADOR DESTACADO </p>
      </div>

      <Options />
      {option.search && <Search />}
      {option.start && <GameCards />}
      {option.new && <New />}
      {option.slot && <Slot />}
      {option.live && <Live />}
      {option.jackpot && <Jackpot />}
      {option.table && <Table />}
      {option.bingo && <Bingo />}
      {option.other && <Other />}
    </div>
  );
};

export default CasinoLive;
