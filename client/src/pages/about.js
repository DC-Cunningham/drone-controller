import React from "react";
import DroneImage from "../Images/Drone.png";
import styled from "styled-components";

const Box = styled.div`
  width: 1200px;
  align-items: center;
`;
const Image = styled.img`
  width: 400px;
  display: block;
  margin: 0 auto;
  align: center;
`;

class About extends React.Component {
  render() {
    return (
      <>
        <Box>
          <Image src={DroneImage} alt="Drone" />
          <br />
          <br />
          <br />

          <h3>
            Let's say you have an aerial drone which it uses to take photographs
            of billboards.
          </h3>
          <br />

          <h3>
            Instructions are sent to the drone in a simple language that tells
            the drone which direction to move and when to take a photo. Moves
            are always exactly 1 km to the north (^), south (v), east (&gt;) or
            west (&lt;) or take a photograph (x).
          </h3>
          <br />
          <h3>
            Unfortunately, the instruction processor is not perfect yet so the
            drone may photograph the same billboard multiple times.
          </h3>
          <br />
          <h3>How many billboards are photographed at least once?</h3>
          <br />
          <br />
          <h3>For example:</h3>
          <ul>
            <li>
              <h3>
                x^xv takes photos of 2 billboards and ends up back at the
                starting location
              </h3>
            </li>
            <li>
              <h3>
                x^^x&gt;&gt;xvvx&lt;&lt;x takes photos of 4 billboards,
                including 2 photos of the same billboard at the starting
                location
              </h3>
            </li>
          </ul>
          <br />
          <br />
          <h3>
            How about a map of the flight path to see where photos have been
            duplicated?
          </h3>
        </Box>
      </>
    );
  }
}

export default About;
