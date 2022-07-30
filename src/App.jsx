import "./App.css";
import LeftSideBar from "./common/LeftSideBar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="bg-gray-100 flex">
      <div className="bg-blue-50 w-[20%]">
        <LeftSideBar />
      </div>

      {/* The routes  */}

      <div className="ml-[45px] w-[75%]">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        {/* divs */}
      </div>
    </div>
  );
}

export default App;
