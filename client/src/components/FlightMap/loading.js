import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loading = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 5px solid grey;
  border-right: 5px solid grey;
  border-bottom: 10px solid grey;
  border-left: 10px solid black;
  background: transparent;
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

export default Loading;
