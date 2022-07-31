import "./App.css";
import LeftSideBar from "./common/LeftSideBar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Transfers from "./components/Transfers";
import AllIncomes from "./components/AllIncomes";
import AllExpenses from "./components/AllExpenses";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div className="App bg-gray-100 flex">
      <GlobalProvider>
        <div className="bg-blue-50 w-[20%]">
          <LeftSideBar />
        </div>

        {/* The routes  */}

        <div className="ml-[45px] w-[75%]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Transfer" element={<Transfers />} />
            <Route path="/AllIncomes" element={<AllIncomes />} />
            <Route path="/AllExpenses" element={<AllExpenses />} />
          </Routes>

          {/* divs */}
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
