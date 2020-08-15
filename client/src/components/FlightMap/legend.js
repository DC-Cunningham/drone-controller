import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 700px;
  height: 100px;
  margin-top: 230px;
  float: left;
  display: flex;
  background-color: ${({ theme }) => theme.primaryLight};
  border: 1px solid;
  border-radius: 15px;
  padding: 25px 12px 18px;
`;

const StyledPixel = styled.div`
  height: 25px;
  width: 25px;
  margin: 2px;
  background: ${(props) => props.colour};
`;

const StyledText = styled.p`
  color: ${({ theme }) => theme.primaryDark};
  margin: 5px 15px 5px 10px;
`;
function Legend() {
  return (
    <StyledContainer>
      <StyledPixel colour="#000000" />
      <StyledText> - Unflown Airspace </StyledText>
      <StyledPixel colour="#61DAF9" />
      <StyledText> - Flown Airspace </StyledText>
      <StyledPixel colour="#cc0404" />
      <StyledText> - Photo Location </StyledText>
    </StyledContainer>
  );
}
export default Legend;
