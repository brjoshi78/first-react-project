import React from "react";

import Button from "../components/Button";

const ComponentBasics = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: ".5rem",
      }}
    >
      <Button type="button" buttonText="Normal Button" className="large" />
      <Button type="submit" buttonText="Submit Button" className="small" />
    </div>
  );
};

export default ComponentBasics;
