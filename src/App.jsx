import "./App.css";
import LeftSideBar from "./common/LeftSideBar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="bg-gray-50 flex">
      <div className="bg-blue-50 w-[17%]">
        <LeftSideBar />
      </div>

      {/* The routes  */}

      <div className="ml-[45px] w-[75%] bg-red-400">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        {/* divs */}
      </div>
    </div>
  );
}

export default App;
