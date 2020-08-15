import React, { useState, useEffect } from "react";
import API from "../utils/API";
import FlightMap from "../components/FlightMap/flightMap";
import styled from "styled-components";
import Legend from "../components/FlightMap/legend";

const Box = styled.div`
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
`;

const Break = styled.div`
  flex-basis: 100%;
  height: 20px;
`;

const StyledContainer = styled.div`
  max-width: 350px;
  width: 100%;
  height: 320px;
  margin: 10px;
  background-color: ${({ theme }) => theme.primaryLight};
  border: 1px solid;
  border-radius: 10% 25%;
  padding: 25px 12px 18px;
  float: left;
  display: block;
`;

const Title = styled.h2`
  color:${({ theme }) => theme.primaryLight}};
  align-text: center;
  font-weight: 300;
  height: 100px;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

const CardTitle = styled.h2`
  text-align: center;
  color:${({ theme }) => theme.primaryDark}};
  font-weight: 300;
  height: 100px;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

const Data = styled.p`
  color:${({ theme }) => theme.primaryDark}};
`;

const Button = styled.button`
max-height: 50px;
  margin: 10px;
  padding: 8px 14px;
  background: #c24a66;
  color: ${({ theme }) => theme.primaryDark}};
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.primaryDark}};
  border-radius: 10%;
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
        {currentFlight.flightPath.length ? (
          <>
            <Button
              onClick={(e) =>
                setCurrentFlight({
                  flightPath: [],
                  photoLocations: [],
                  name: "",
                })
              }
            >
              Back
            </Button>
            <Break />
            <StyledContainer>
              <CardTitle>{currentFlight.name}</CardTitle>
              <Data>
                <strong>Sequence Length: </strong>
                {currentFlight.flightPath.length} commands
              </Data>
              <Data>
                <strong>Number of Photos Taken: </strong>
                {currentFlight.photoLocations.length}
              </Data>
              <Data>
                <strong>Number of unique Photo Locations: </strong>
                {uniquePhotoLocations(currentFlight.photoLocations).length}
              </Data>
            </StyledContainer>
            <Legend />
            <Break />
            <FlightMap currentFlight={currentFlight} />
          </>
        ) : storedFlightPaths.length ? (
          storedFlightPaths.map((flightPath) => (
            <StyledContainer key={flightPath._id}>
              <CardTitle>{flightPath.name}</CardTitle>
              <Data>
                <strong>Sequence Length: </strong>
                {flightPath.flightPath.length} commands
              </Data>
              <Data>
                <strong>Number of Photos Taken: </strong>
                {flightPath.photoLocations.length}
              </Data>
              <Data>
                <strong>Number of unique Photo Locations: </strong>
                {uniquePhotoLocations(flightPath.photoLocations).length}
              </Data>
              <Button
                value={flightPath._id}
                onClick={setFlightDisplayed.bind(this, flightPath._id)}
              >
                Select
              </Button>
            </StyledContainer>
          ))
        ) : (
          <div>There are no stored Flight Paths</div>
        )}
      </Box>
    </>
  );
}
export default FlightPaths;
