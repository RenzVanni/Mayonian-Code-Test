import { useContext } from "react";
import data from "../data/options.json";
import { Context } from "../context/globalContext";

const Options = () => {
  const { setOption } = useContext(Context);
  return (
    <div className="flex items-start space-x-3 overflow-x-scroll pb-2 mb-3">
      <div
        onClick={() => setOption({ search: true })}
        className="flex flex-col items-center justify-center"
      >
        <img
          src="/icons/test-search.png"
          alt="Search"
          className="w-[25px] h-[25px] object-cover cursor-pointer"
        />
        <p className="text-sm uppercase">Search</p>
      </div>
      <img src="/icons/test-line2.png" alt="line" />
      {data.map((item, index) => (
        <div
          onClick={() => setOption({ [item.name]: true })}
          key={index}
          className="flex flex-col items-center justify-center cursor-pointer"
        >
          <div className="w-[25px] h-[25px]">
            <img
              src={item.icon}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm uppercase">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Options;
