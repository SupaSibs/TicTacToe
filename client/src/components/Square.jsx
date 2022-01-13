import React from "react";
const styles = require("./styles.css")
export default function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
  