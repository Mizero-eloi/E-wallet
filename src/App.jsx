import "./App.css";
import LeftSideBar from "./common/LeftSideBar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Transfers from "./components/Transfers";
import AllIncomes from "./components/AllIncomes";
import AllExpenses from "./components/AllExpenses";
import { GlobalProvider } from "./context/GlobalState";
import SignUpForm from "./common/SignUpForm";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div
      className={isAuthenticated ? "App bg-gray-100 flex" : "App bg-gray-100"}
    >
      {" "}
      <GlobalProvider>
        {isAuthenticated && (
          <div className="bg-blue-50 w-[20%]">
            <LeftSideBar />
          </div>
        )}

        {/* The routes  */}

        <div className={isAuthenticated && "ml-[45px] w-[75%]"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transfers" element={<Transfers />} />
            <Route path="/allIncomes" element={<AllIncomes />} />
            <Route path="/allExpenses" element={<AllExpenses />} />
            <Route path="/signup" element={<SignUpForm />} />
          </Routes>

          {/* divs */}
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
