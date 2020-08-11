import React from "react";
import Row from "./row";

// takes in array of arrays as props
// returns a bunch of Row components
export default function Grid(props) {
  const grid = props.colours.map((colours, index) => {
    return <Row key={index} colours={colours} index={index} />;
  });
  return <div className="grid">{grid}</div>;
}
