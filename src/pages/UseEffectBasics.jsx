import React, { useState, useEffect } from "react";

const UseEffectBasics = () => {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(10);

  useEffect(() => {
    console.log("Ran at page load!");
  }, [count, countTwo]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => setCountTwo(countTwo + 10)}>{countTwo}</button>
    </>
  );
};

export default UseEffectBasics;
