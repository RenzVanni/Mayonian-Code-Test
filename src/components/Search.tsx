import { useContext, useState } from "react";
import GameCards from "./GameCards";
import { Context } from "../context/globalContext";
import { otherGame } from "../data/moreData";

const Search = () => {
  const { setSearch } = useContext(Context);
  const [isGameProvider, setIsGameProvider] = useState(false);

  return (
    <div className="">
      <form action="" className="flex space-x-3 h-[35px] mb-3">
        <div className="flex flex-1 items-center h-full space-x-2 p-2 border border-blue-300 rounded-md">
          <img src="/icons/test-search.png" alt="search" />

          <input
            onChange={(e) => setSearch({ search: e.target.value })}
            type="text"
            placeholder="Search..."
            className="w-full outline-none"
          />
        </div>
        <button
          onClick={() => setIsGameProvider(true)}
          type="button"
          className="h-full p-2 border border-border rounded-md"
        >
          <img src="/icons/test-game-provider.png" alt="image" />
        </button>
      </form>
      <GameCards />

      <div className="mt-12">
        <div className="flex justify-between mb-3">
          <p>Proveedores de juego</p>

          <div className="space-x-6">
            <button>
              <img src="/icons/test-prev.png" alt="image" />
            </button>
            <button>
              <img src="/icons/test-next.png" alt="image" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {otherGame.map((item) => (
            <div key={item.id} className="rounded-xl overflow-hidden">
              <div className="bg-sub flex items-center justify-center h-[50px]">
                <img src={item.image} alt="img" />
              </div>
              <div className="bg-sub2 flex flex-col items-center justify-center">
                <p className="text-black">{item.name}</p>
                <p className="text-sm">{item.count} juegos</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isGameProvider && (
        <div className="bg-black/50 z-10 fixed inset-0 flex items-end">
          <div className="h-[50%] w-full bg-white">
            <div className="bg-customBlue flex items-center justify-between px-3 py-2">
              <div className="flex items-center space-x-3 ">
                <img src="/icons/test-game-provider2.png" alt="image" />
                <p className="text-white">Game Provider</p>
                <div className="border border-white px-2 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">199</span>
                </div>
              </div>

              <img
                onClick={() => setIsGameProvider(false)}
                src="/icons/test-close.png"
                alt="image"
              />
            </div>
            <div className="p-3 grid grid-cols-2 gap-3 overflow-y-scroll h-full">
              {[...Array(24)].map((_, index) => (
                <div
                  key={index}
                  className="bg-provider p-3 flex items-center justify-center rounded-md"
                >
                  <img src="/images/game_provider_hero.png" alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
