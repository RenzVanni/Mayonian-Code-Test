import { useContext, useEffect } from "react";
import GameCards from "./GameCards";
import { Context } from "../context/globalContext";

const Search = () => {
  const { search, setSearch } = useContext(Context);

  useEffect(() => {
    console.log(search);
  }, [search]);
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
          type="button"
          className="h-full p-2 border border-border rounded-md"
        >
          <img src="/icons/test-game-provider.png" alt="image" />
        </button>
      </form>
      <GameCards />
    </div>
  );
};

export default Search;
