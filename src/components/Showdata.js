import React from "react";
import { UserContext } from "../store/UserContext";
import { useContext } from "react";

const Showdata = () => {
  const { value, setValue, hello } = useContext(UserContext);
  const newelem = React.createElement("h1", null, "Leskovac");
  const wrapper = React.createElement("div", null, newelem, newelem);

  return (
    <div>
      <h2>Show Page</h2>

      <h1>{value}</h1>
      <button onClick={() => setValue((prevdata) => prevdata - 1)}>-</button>
      <button onClick={() => hello()}>Click hello</button>
      {wrapper}
    </div>
  );
};

export default Showdata;
