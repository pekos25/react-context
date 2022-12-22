import React, { useState } from "react";
import { UserContext } from "../store/UserContext";
import { useContext } from "react";

const Changedata = () => {
  const { value, setValue } = useContext(UserContext);
  const [val, setVal] = useState(0);
  return (
    <div>
      <h2>Change Page</h2>
      <h1>{value}</h1>
      <input onChange={(e) => setVal(parseInt(e.target.value))} />
      <button onClick={() => setValue((prevdata) => prevdata + val)}>+</button>
    </div>
  );
};

export default Changedata;
