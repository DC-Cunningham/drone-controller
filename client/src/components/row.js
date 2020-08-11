import React from "react";

// takes in array of hex values
// returns a row of pixels
export default function Row(props) {
  const row = props.colours.map((colour, index) => {
    return (
      <div className="pixel" key={index} style={{ backgroundColor: colour }} />
    );
  });
  return <div className="row">{row}</div>;
}
