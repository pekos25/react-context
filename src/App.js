import "./App.css";
import Showdata from "./components/Showdata";
import Changedata from "./components/Changedata";
import { UserContext } from "./store/UserContext";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const [abc, setAbc] = useState(1);
  const hello = () => {
    setAbc((prev) => prev * -1);
  };

  return (
    <UserContext.Provider value={{ value, setValue, hello }}>
      <div className={abc === 1 ? "bview" : "rview"}>
        <Showdata />
        <h1 style={{ color: "yellow" }}>{abc === 1 ? "Plavo" : "Crveno"}</h1>
        <Changedata />
      </div>
    </UserContext.Provider>
  );
}

export default App;
