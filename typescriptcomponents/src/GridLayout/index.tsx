import React from "react";

const GridLayout = () => {
    return (
        <div> 
          <div style={{ display: "grid", gridTemplateColumns: "65% 35%", height: "100vh" }}>
          <div style={{backgroundColor:"greenyellow", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"50px"}}>65%</div>
          <div style={{backgroundColor:"pink", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"50px"}}>35%</div>
    </div>
      </div>
  );
};

export default GridLayout;
