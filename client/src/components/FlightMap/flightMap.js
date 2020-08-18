import React, { useState, useEffect } from "react";
import Grid from "../Grid/grid";
import Loading from "./loading";
import styled from "styled-components";

const MapContainer = styled.div`
  width: 100%;
  height: 1200px;
  padding: 50px;
  display: flex;
  // overflow: scroll;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.primaryDark};
`;

const makeArray = (flightData) => {
  const { xMin, xMax, yMin, yMax, dataPoints } = flightData;
  const yArray = [];
  for (let i = yMin; i < yMax + 1; i++) {
    const xArray = [];
    for (let j = xMin; j < xMax + 1; j++) {
      if ([`${j},${i}`] in dataPoints) {
        xArray.push({
          x: j,
          y: i,
          pointData: dataPoints[`${j},${i}`],
        });
      } else {
        xArray.push({ x: j, y: i, pointData: false });
      }
    }
    yArray.unshift(xArray);
  }
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
