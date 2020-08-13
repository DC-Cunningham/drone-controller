import React from "react";
import styled from "styled-components";

const StyledPixel = styled.div`
  height: 25px;
  width: 25px;
  margin: 2px;
`;

// takes in array of hex values
// returns a row of pixels
export default function Pixel(props) {
  return (
    <StyledPixel key={props.key} style={{ backgroundColor: props.colour }} />
  );
}
