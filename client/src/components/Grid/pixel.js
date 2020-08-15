import React from "react";
import styled from "styled-components";

const StyledPixel = styled.div`
  height: 25px;
  width: 25px;
  margin: 2px;
`;

const TooltipBox = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  visibility: hidden;
  color: #000000;
  background-color: rgba(252, 252, 252, 0.8);
  width: 200px;
  padding: 5px 5px;
  border-radius: 4px;
  transition: visibility 0.5s, color 0.5s, background-color 0.5s,
    padding 0.5s ease-in-out;
`;
const TooltipCard = styled.div`
  position: relative;
  & ${StyledPixel}:hover + ${TooltipBox} {
    visibility: visible;
    color: #000000;
    background-color: rgba(252, 252, 252, 0.8);
    width: 200px;
    padding: 8px 8px;
    &:before {
      border-color: transparent transparent rgba(252, 252, 252, 0.8)
        rgba(252, 252, 252, 0.8);
    }
  }
`;

export default function Pixel(props) {
  return (
    <>
      <TooltipCard>
        <StyledPixel style={{ backgroundColor: props.flightPoint.colour }}>
          {props.flightPoint.photoCount}
        </StyledPixel>
        <TooltipBox>
          <p>
            Position [x: {props.flightPoint.x}, y: {props.flightPoint.y} ]
          </p>
          <p>Status [flown, unflown, photo]</p>
          <p>Photo Count = {props.flightPoint.photoCount}</p>
        </TooltipBox>
      </TooltipCard>
    </>
  );
}
