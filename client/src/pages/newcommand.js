import React from "react";
import AddNewCommand from "../components/addNewCommand";
import styled from "styled-components";

const Box = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

class NewCommand extends React.Component {
  render() {
    return (
      <>
        <Box>
          <h4>
            Please enter the command sequence that tells the drone which
            direction to move and when to take a photo.
          </h4>
          <h4>
            Moves are always exactly 1 km to the north (^), south (v), east
            (&gt;) or west (&lt;) or take a photograph (x).
          </h4>
          <AddNewCommand />
          <h5>
            Please note that the command sequence cannot include spaces or any
            characters other than ^, v, &gt;, &lt; or x
          </h5>
        </Box>
      </>
    );
  }
}

export default NewCommand;
