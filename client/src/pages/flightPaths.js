import React, { useState, useEffect } from "react";
import API from "../utils/API";
import FlightMap from "../components/FlightMap/flightMap";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Break = styled.div`
  flex-basis: 100%;
  height: 20px;
`;

const StyledContainer = styled.div`
  max-width: 300px;
  width: 100%;
  height: 320px;
  margin: 10px;
  background-color: ${({ theme }) => theme.primaryLight};
  border: 1px solid;
  border-radius: 10% 25%;
  padding: 25px 12px 18px;
  float: left;
`;

const Card = styled.div`
  display: block;
`;

const Title = styled.h2`
  color:${({ theme }) => theme.primaryLight}};
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
  margin: 10px;
  padding: 8px 14px;
  background: #c24a66;
  color: ${({ theme }) => theme.primaryDark}};
  cursor: pointer;
  border: 1px solid #fff;
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
        <Title>Saved Flight Paths</Title>
        <Break />
        {storedFlightPaths.length ? (
          storedFlightPaths.map((flightPath) => (
            <StyledContainer>
              <Card>
                <CardTitle>{flightPath.name}</CardTitle>
                <Data>
                  <strong>Sequence Length: </strong>
                  {flightPath.flightPath.length} commands
                </Data>
                <Data>
                  <strong># of Photos Taken: </strong>
                  {flightPath.photoLocations.length}
                </Data>
                <Data>
                  <strong># of unique Photo Locations: </strong>
                  {uniquePhotoLocations(flightPath.photoLocations).length}
                </Data>
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
