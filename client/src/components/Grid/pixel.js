import React from "react";
import styled from "styled-components";

const StyledPixel = styled.div`
  height: 25px;
  width: 25px;
  margin: 2px;
  text-align: center;
  background-colour: ${{}};
`;

const TooltipBox = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  visibility: hidden;
  color: #000000;
  background-color: rgba(252, 252, 252, 1);
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
    background-color: rgba(252, 252, 252, 1);
    width: 200px;
    padding: 8px 8px;
    &:before {
      border-color: transparent transparent rgba(252, 252, 252, 1)
        rgba(252, 252, 252, 0.8);
    }
  }
`;

export default function Pixel(props) {
  const { x, y, pointData } = props.flightPoint;

  const pixel = () => {
    if (pointData === true) {
      console.log("true");
      return <StyledPixel style={{ backgroundColor: "#1a963b" }}></StyledPixel>;
    } else if (pointData === false) {
      return <StyledPixel style={{ backgroundColor: "#70dcfa" }}></StyledPixel>;
    } else {
      return (
        <StyledPixel style={{ backgroundColor: "#cc0404" }}>
          {pointData.length > 0 ? pointData.length : ""}
        </StyledPixel>
      );
    }
  };

  return (
    <>
      <TooltipCard>
        {pixel()}
        <TooltipBox>
          <p>
            Position [x: {x}, y: {y} ]
          </p>
          <p>Photo Count = {pointData.length}</p>
        </TooltipBox>
      </TooltipCard>
    </>
  );
}
