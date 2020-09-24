import React from "react";
import Row from "./row";
import styled from "styled-components";

const StyledGrid = styled.div`
  padding-bottom: 50px;
  position: absolute;
  left: 0;
`;

// takes in array of arrays as props
// returns a bunch of Row components
export default function Grid(props) {
  const grid = props.flightPoint.map((flightPoint, index) => {
    return <Row key={index} flightPoint={flightPoint} index={index} />;
  });
  return <StyledGrid>{grid}</StyledGrid>;
}
