import { useLocation, useNavigate } from "react-router-dom";
import { navigationData } from "../data/navigation";

const Navigation = () => {
  const path = useLocation();
  const navigate = useNavigate();
  return (
    <div className="flex flex-1 justify-between p-3 bg-white w-full">
      {navigationData.map((item) => (
        <div
          key={item.id}
          onClick={() => navigate(item.slug)}
          className="flex flex-col items-center justify-center cursor-pointer"
        >
          <div className="w-[25px] h-[25px]">
            <item.icon />
          </div>
          <p
            className="text-sm uppercase"
            style={{
              color:
                path.pathname == item.slug ? "rgba(0, 166, 255, 1)" : "#888888",
            }}
          >
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
