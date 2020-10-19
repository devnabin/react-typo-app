//We have learn inline styling here
import React from "react";

const char = (props) => {
  const style = {
    display: "inline-block",
    padding: "10px",
    border: "2px solid blue",
    color: "#000",
    margin : "10px",
    cursor : "pointer",
    fontWeight : 'bold'
  };
  return <div style={style} onClick={props.click}>{props.character}</div>;
};

export default char;
