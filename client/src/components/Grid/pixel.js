import React from "react";
import styled from "styled-components";

const StyledPixel = styled.div`
  height: 25px;
  width: 25px;
  margin: 2px;
  text-align: center;
  background-colour: ${{}};
  transition: transform 0.2s; /* Animation */
  &:hover {
    transform: scale(1.5);
  }
`;

const TooltipBox = styled.div`
  visibility: hidden;
  width: 300px;
  background-color: white;
  color: #000000;
  text-align: center;
  padding: 15px;
  border-radius: 6px;
  position: absolute;
  top: calc(100% + 10px);
  left: 30px;
  z-index: 1;
`;
const TooltipCard = styled.div`
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black; 
  & ${StyledPixel}:hover + ${TooltipBox} {
    visibility: visible;
    }
  }
`;

export default function Pixel(props) {
  const { x, y, pointData } = props.flightPoint;

  const pixel = () => {
    if (pointData === true) {
      return (
        <>
          <StyledPixel style={{ backgroundColor: "#1a963b" }}></StyledPixel>
          <TooltipBox>
            <strong>Position:</strong>
            <p>
              [x: {x}, y: {y} ]
            </p>
            <strong>Flown airspace</strong>

            <strong>Photo Count:</strong>
            <p>{pointData.length}</p>
          </TooltipBox>
        </>
      );
    } else if (pointData === false) {
      return (
        <>
          <StyledPixel style={{ backgroundColor: "#70dcfa" }}></StyledPixel>
          <TooltipBox>
            <strong>Position:</strong>
            <p>
              [x: {x}, y: {y} ]
            </p>
            <strong>Unflown airspace</strong>
          </TooltipBox>
        </>
      );
    } else {
      return (
        <>
          <StyledPixel style={{ backgroundColor: "#cc0404" }}>
            {pointData.length > 0 ? pointData.length : ""}
          </StyledPixel>
          <TooltipBox>
            <strong>Position:</strong>
            <p>
              [x: {x}, y: {y} ]
            </p>
            <p>
              <strong>Flown airspace</strong>
            </p>

            <p>
              <strong>Photo Count:</strong>
            </p>
            <p>{pointData.length}</p>
            <ol>
              Photos taken at steps:
              {pointData.map((point, index) => (
                <li key={index}>{point} </li>
              ))}
            </ol>
          </TooltipBox>
        </>
      );
    }
  };

  return (
    <>
      <TooltipCard>{pixel()}</TooltipCard>
    </>
  );
}
