import React, { useState, useEffect } from "react";
import Grid from "../Grid/grid";
import Loading from "./loading";
import styled from "styled-components";

const MapContainer = styled.div`
  position: relative;
  width: 80%;
  height: 1200px;
  padding: 50px;
  display: flex;
  overflow: scroll;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.primaryDark};
`;

const makeArray = (flightData) => {
  const { xMin, xMax, yMin, yMax, dataPoints } = flightData;
  const yArray = [];
  for (let i = yMin; i < yMax + 2; i++) {
    const xArray = [];
    for (let j = xMin; j < xMax + 1; j++) {
      if ([`${j},${i}`] in dataPoints) {
        xArray.push({
          x: j,
          y: i,
          pointData: dataPoints[`${j},${i}`],
          headerTile: false,
        });
      } else if (i > yMax) {
        xArray.push({
          x: j,
          y: i,
          pointData: false,
          headerTile: true,
          label: j,
        });
      } else {
        xArray.push({ x: j, y: i, pointData: false, headerTile: false });
      }
    }
    xArray.unshift({
      x: xMin,
      y: i,
      pointData: false,
      headerTile: true,
      label: i,
    });
    yArray.unshift(xArray);
  }
  yArray[0][0] = {
    x: xMin - 1,
    y: xMax + 1,
    pointData: false,
    headerTile: true,
    label: "",
  };
  return yArray;
};

const FlightMap = (props) => {
  const [loading, setLoading] = useState(true);
  const [flightPoint, setFlightPoint] = useState([]);

  useEffect(() => {
    setFlightPoint(makeArray(props.currentFlight));
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
