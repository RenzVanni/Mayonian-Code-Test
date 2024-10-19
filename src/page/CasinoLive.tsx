import { useContext } from "react";
import { Context } from "../context/globalContext";
import Options from "../components/Options";
import GameCards from "../components/GameCards";
import Search from "../components/Search";

const CasinoLive = () => {
  const { option } = useContext(Context);
  console.log(option);
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
      {option.start && <GameCards />}
      {option.search && <Search />}
    </div>
  );
};

export default CasinoLive;
