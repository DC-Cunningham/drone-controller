import React from "react";
import Pixel from "./pixel";
import styled from "styled-components";

const StyledRow = styled.div`
  display: flex;
  vertical-align: middle;
  line-height: normal;
`;

// takes in array of hex values
// returns a row of pixels
export default function Row(props) {
  const row = props.flightPoint.map((flightPoint, index) => {
    return <Pixel key={index} flightPoint={flightPoint} />;
  });
  return <StyledRow>{row}</StyledRow>;
}
