import { useContext, useEffect } from "react";
import { Context } from "../context/globalContext";

const GameCards = () => {
  const { game, setGame, search, setSearch } = useContext(Context);

  const handleClick = (id: number) => {
    setGame((prev) =>
      prev.map((item) =>
        item.id == id ? { ...item, favorite: !item.favorite } : item
      )
    );
  };

  useEffect(() => {
    setSearch({ search: "" });
  }, []);
  const filteredGame = game.filter((item) =>
    item.name.toLocaleLowerCase().includes(search.search.toLowerCase())
  );
  return (
    <div className="grid grid-cols-3 gap-2">
      {filteredGame.map((item) => (
        <div
          key={item.id}
          className="relative rounded-md overflow-hidden hover:scale-105 cursor-pointer"
          onClick={() => handleClick(item.id)}
        >
          <img src={item.image} alt="image" />
          <img
            src="/icons/test-shade.png"
            alt="shade"
            className="absolute top-0 right-0"
          />
          <img
            src={
              item.favorite ? "/icons/test-star2.png" : "/icons/test-star.png"
            }
            alt="star"
            className="absolute top-1 right-1"
          />
        </div>
      ))}
      {filteredGame.length == 0 && <p>No Games Found</p>}
    </div>
  );
};

export default GameCards;
