import React from "react";

const VerticalLayout = () => {
  return (
    <div
      style={{
        width: "30vw",
        height: "50vh",
        backgroundColor: "red",
        color: "white",
        border: "2px solid black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span style={{ display: "flex", justifyContent: "flex-end" }}>
        First Component
      </span>
      <span>Second Component</span>
      <span>Third Component</span>
    </div>
  );
};

export default VerticalLayout;
