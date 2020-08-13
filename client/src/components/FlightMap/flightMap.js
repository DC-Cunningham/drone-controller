import React, { useState } from "react";
import Grid from "../Grid/grid";
import styled from "styled-components";

const MapContainer = styled.div`
  width: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.primaryDark};
`;

const makeArray = (size) => {
  return Array(size).fill(Array(size).fill("#000000"));
};

function getOccurrence(array, value) {
  return array.filter((v) => v === value).length;
}

const FlightMap = (props) => {
  const [selected, setSelected] = useState("");
  const [colours, setColors] = useState(makeArray(30));

  const flightPathArray = props.currentFlight.flightPath;

  const xRange = [
    Math.min.apply(
      Math,
      flightPathArray.map(function (o) {
        return o.x;
      })
    ),
    Math.max.apply(
      Math,
      flightPathArray.map(function (o) {
        return o.x;
      })
    ),
  ];

  const yRange = [
    Math.min.apply(
      Math,
      flightPathArray.map(function (o) {
        return o.y;
      })
    ),
    Math.max.apply(
      Math,
      flightPathArray.map(function (o) {
        return o.y;
      })
    ),
  ];

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
    </>
  );
};

export default FlightMap;
