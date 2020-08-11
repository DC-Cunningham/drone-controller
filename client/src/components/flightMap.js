import React, { useState } from "react";
import Grid from "./grid";
import "./flightMap.css";

const makeArray = (size) => {
  return Array(size).fill(Array(size).fill("#61DAF9"));
};

const FlightMap = (props) => {
  const [selected, setSelected] = useState("");
  const [colours, setColors] = useState(makeArray(10));

  const flightPathArray = props.currentFlight.flightPath;
  const value = "";

  function getOccurrence(array, value) {
    return array.filter((v) => v === value).length;
  }

  const update = (x, y, colour) => {
    const newArray = [...colours].map((row, index) => {
      if (index === y) {
        row.splice(x, 1, colour);
      }
      return row;
    });
    setColors(newArray);
  };

  return (
    <>
      <div className="map-container">
        <Grid colours={colours} />
      </div>
    </>
  );
};

export default FlightMap;
