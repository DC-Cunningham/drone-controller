import React, { useState, useEffect } from "react";
import API from "../utils/API";
import FlightMap from "../components/flightMap";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

const StyledContainer = styled.div`
  max-width: 300px;
  width: 100%;
  height: 300px;
  margin: 10px;
  border: 1px solid;
  border-radius: 10% 25%;
  padding: 25px 12px 18px;
  float: left;
`;

const Card = styled.div`
  display: block;
`;

const Title = styled.h2`
  color: #000000;
  font-weight: 300;
  height: 100px;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

const Date = styled.div`
  color: #ccc;
  font-weight: 300;
  margin: 6px 0;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

const Button = styled.button`
  margin: 10px 5px;
  padding: 8px 14px;
  background: rgba(155, 155, 155, 0.2);
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  float: right;
  :hover {
    opacity: 0.8;
  }
  :active {
    background: white;
  }
`;

function FlightPaths() {
  const [storedFlightPaths, setStoredFlightPaths] = useState([]);
  const [currentFlight, setCurrentFlight] = useState({
    flightPath: [],
    photoLocations: [],
    name: "",
  });

  useEffect(() => {
    loadFlightPaths();
  }, []);

  const loadFlightPaths = () => {
    API.getFlightPaths()
      .then((res) => setStoredFlightPaths(res.data))
      .catch((err) => console.log(err));
  };

  const uniquePhotoLocations = (array) =>
    array.reduce((accumulator, current) => {
      if (checkIfAlreadyExist(current)) {
        return accumulator;
      } else {
        return [...accumulator, current];
      }

      function checkIfAlreadyExist(currentVal) {
        return accumulator.some((item) => {
          return item.x === currentVal.x && item.y === currentVal.y;
        });
      }
    }, []);

  const setFlightDisplayed = (req) => {
    API.getFlightPath(req)
      .then((res) => setCurrentFlight(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Box>
        <Title>Available Flight Paths</Title>
        <Break />
        {storedFlightPaths.length ? (
          storedFlightPaths.map((flightPath) => (
            <StyledContainer>
              <Card>
                <Title>{flightPath.name}</Title>
                <div>
                  <strong>Sequence Length: </strong>
                  {flightPath.flightPath.length} commands
                </div>
                <div>
                  <strong>Number of Photos Taken: </strong>
                  {flightPath.photoLocations.length}
                </div>
                <div>
                  <strong>Number of unique Photo Locations: </strong>
                  {uniquePhotoLocations(flightPath.photoLocations).length}
                </div>
                <Button
                  value={flightPath._id}
                  onClick={setFlightDisplayed.bind(this, flightPath._id)}
                >
                  Select
                </Button>
              </Card>
            </StyledContainer>
          ))
        ) : (
          <div>There are no stored Flight Paths</div>
        )}
        <Break />
        <Card>
          {currentFlight.flightPath.length ? (
            <FlightMap currentFlight={currentFlight} />
          ) : (
            <h2>Please select a Flight Path to display</h2>
          )}
        </Card>
      </Box>
    </>
  );
}
export default FlightPaths;
