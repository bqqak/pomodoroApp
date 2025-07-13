import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import MainFunctionality from "./components/Main/MainFunctionality";
import Footer from "./components/Footer/Footer";

function App() {
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    const savedBreakState = localStorage.getItem("isBreak") === "true";
    setIsBreak(savedBreakState);
  }, []);

  const handleBreakChange = (breakState) => {
    setIsBreak(breakState);
  };

  return (
    <>
      <div
        className={`min-h-screen ${isBreak ? "break" : ""}`}
        id="functionality"
      >
        <Header />
        <div className="w-80 h-0.5 bg-black mx-auto mt-3"></div>
        <MainFunctionality onBreakChange={handleBreakChange} />
      </div>
      
      <Footer />
    </>
  );
}

export default App;
