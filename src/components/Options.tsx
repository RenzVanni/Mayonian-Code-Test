import { useContext } from "react";
import { optionsData } from "../data/options";
import { Context } from "../context/globalContext";
import { SearchSvg } from "../assets/optionSvg";
import { OptionProp } from "../Types/casinoLiveProps";

const Options = () => {
  const { option, setOption } = useContext(Context);
  return (
    <div className="flex items-start space-x-3 overflow-x-scroll pb-2 mb-3">
      <div
        onClick={() => setOption({ search: true })}
        className="flex flex-col items-center justify-center"
      >
        <SearchSvg />
        <p
          className="text-sm uppercase"
          style={{ color: option.search ? "rgba(0, 166, 255, 1)" : "#888888" }}
        >
          Search
        </p>
      </div>
      <img src="/icons/test-line2.png" alt="line" />
      {optionsData.map((item, index) => (
        <div
          onClick={() => setOption({ [item.name]: true })}
          key={index}
          className="flex flex-col items-center justify-center cursor-pointer"
        >
          <div className="w-[25px] h-[25px]">
            <item.icon />
          </div>
          <p
            className="text-sm uppercase"
            style={{
              color: option[item.name as keyof OptionProp]
                ? "rgba(0, 166, 255, 1)"
                : "#888888",
            }}
          >
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Options;
