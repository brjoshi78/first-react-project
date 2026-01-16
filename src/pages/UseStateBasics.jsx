import React, { useState } from "react";
import Button from "../components/Button";

const UseStateBasics = () => {
  const [name, setName] = useState("John Doe");

  return (
    <div>
      <h1>Hello, {name}!</h1>

      <input type="text" placeholder="Enter Your Name" />
    </div>
  );
};

export default UseStateBasics;
