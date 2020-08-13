import React from "react";
import Row from "./row";
import styled from "styled-components";

const StyledGrid = styled.div`
  padding-bottom: 50px;
`;

// takes in array of arrays as props
// returns a bunch of Row components
export default function Grid(props) {
  const grid = props.colours.map((colours, index) => {
    return <Row key={index} colours={colours} index={index} />;
  });
  return <StyledGrid>{grid}</StyledGrid>;
}
