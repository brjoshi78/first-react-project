import React from "react";
import DigitalID from "./components/DigitalID";

const App = () => {
  const data = [
    {
      id: 1,
      name: "Stark",
      role: "Engineer",
      age: 45,
    },
    {
      id: 2,
      name: "Rogers",
      role: "Captain",
      age: 90,
    },
    {
      id: 3,
      name: "Banner",
      role: "Scientist",
      age: 50,
    },
  ];

  return (
    <div>
      {data.map((d, index) => (
        <DigitalID key={index} name={d.name} role={d.role} age={d.age} />
      ))}
    </div>
  );
};

export default App;
