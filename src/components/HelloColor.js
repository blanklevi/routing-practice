import React from "react";
import { Link } from "@reach/router";

const FancyWord = (props) => {
  return (
    <div>
      <h1 style={{ color: props.textColor, backgroundColor: props.bgColor }}>
        {props.word}
      </h1>
    </div>
  );
};

export default FancyWord;
