import React from "react";
import Pixel from "./pixel";
import styled from "styled-components";

const StyledRow = styled.div`
  display: flex;
`;

// takes in array of hex values
// returns a row of pixels
export default function Row(props) {
  const row = props.colours.map((colour, index) => {
    return <Pixel key={index} colour={colour} />;
  });
  return <StyledRow>{row}</StyledRow>;
}
