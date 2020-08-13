import React, { useState } from "react";
import Grid from "../Grid/grid";
import Legend from "./legend";
import styled from "styled-components";

const MapContainer = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.primaryDark};
`;

const makeArray = (size) => {
  return Array(size).fill(Array(size).fill("#61DAF9"));
};

function getOccurrence(array, value) {
  return array.filter((v) => v === value).length;
}

const FlightMap = (props) => {
  const [selected, setSelected] = useState("");
  const [colours, setColors] = useState(makeArray(10));

  const flightPathArray = props.currentFlight.flightPath;
  const value = "";

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
      <MapContainer>
        <Grid colours={colours} />
      </MapContainer>
      <Legend />
    </>
  );
};

export default FlightMap;
