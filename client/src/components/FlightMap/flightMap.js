import React, { useState, useEffect } from "react";
import Grid from "../Grid/grid";
import Loading from "./loading";
import styled from "styled-components";

const MapContainer = styled.div`
  width: 100%;
  height: 1200px;
  padding: 50px;
  display: flex;
  overflow: scroll;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.primaryDark};
`;

// ENUMERATIONS  // ts feature

const makeArray = (xMin, xMax, yMin, yMax, data) => {
  const yArray = [];
  for (let i = yMin; i < yMax + 1; i++) {
    const xArray = [];
    for (let j = xMin; j < xMax + 1; j++) {
      xArray.push({
        x: j,
        y: i,
        step: 0,
        colour: "#70dcfa",
        status: "unflown airspace",
        photoCount: 0,
      });
    }
    yArray.unshift(xArray);
  }
  return yArray;
};

const FlightMap = (props) => {
  const [loading, setLoading] = useState(true);
  console.log("flightPath", props.currentFlight.flightPath);

  const flightPathArray = props.currentFlight.flightPath;
  const xMin = Math.min.apply(
    Math,
    flightPathArray.map(function (o) {
      return o.x;
    })
  );
  const xMax = Math.max.apply(
    Math,
    flightPathArray.map(function (o) {
      return o.x;
    })
  );
  const yMin = Math.min.apply(
    Math,
    flightPathArray.map(function (o) {
      return o.y;
    })
  );
  const yMax = Math.max.apply(
    Math,
    flightPathArray.map(function (o) {
      return o.y;
    })
  );
  const [flightPoint, setFlightPoint] = useState(
    makeArray(xMin, xMax, yMin, yMax)
  );

  const renderFlightMap = () => {
    console.log(flightPoint);
    const newArray = [];
    for (let i = 0; i < flightPathArray.length; i++) {
      const row = flightPoint.map((row, index) => {
        const newFlightPoint = {
          x: flightPathArray[i].x,
          y: flightPathArray[i].y,
          colour: row[index].colour,
          status: row[index].status,
          photoCount: row[index].photoCount,
        };
        if (
          flightPathArray[i].lastCommand !== "x" &&
          row[index].x === flightPathArray[i].x &&
          row[index].y === flightPathArray[i].y
        ) {
          row.splice(index, 1, {
            ...newFlightPoint,
            colour: "#1a963b",
            status: "flown airspace",
          });
        } else if (
          flightPathArray[i].lastCommand === "x" &&
          row[index].x === flightPathArray[i].x &&
          row[index].y === flightPathArray[i].y
        ) {
          row.splice(index, 1, {
            ...newFlightPoint,
            colour: "#cc0404",
            status: "photo location",
            photoCount: row[index].photoCount + 1,
          });
        } else {
          console.log("else");
        }
        console.log(row);
        return row;
      });
      newArray.push(row);
    }
    setFlightPoint(newArray);
    console.log(newArray);
  };

  useEffect(() => {
    renderFlightMap();
    setLoading(false);
  }, []);

  return (
    <>
      <MapContainer>
        {loading ? <Loading /> : <Grid flightPoint={flightPoint} />}
      </MapContainer>
    </>
  );
};

export default FlightMap;
