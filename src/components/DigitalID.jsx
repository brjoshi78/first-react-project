import React from "react";

const DigitalID = ({ name, role, age }) => {
  return (
    <div
      className="card"
      style={{
        backgroundColor:
          role === "Captain"
            ? "blue"
            : role === "Engineer"
              ? "red"
              : "transparent",
      }}
    >
      <h1>Name: {name}</h1>
      <h4>Role: {role}</h4>
      <p>Age: {age}</p>
    </div>
  );
};

export default DigitalID;
