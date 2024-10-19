import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="bg-mainBg flex flex-col w-full h-screen ">
      <Header />

      <div className="p-3 h-full overflow-y-scroll relative">
        <Outlet />
      </div>

      <Navigation />
    </div>
  );
};

export default App;
