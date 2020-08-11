import React, { useState, useEffect } from "react";
import API from "../utils/API";
import FlightMap from "../components/flightMap";

function FlightPaths() {
  const [storedFlightPaths, setStoredFlightPaths] = useState([]);
  const [currentFlight, setCurrentFlight] = useState({
    flightPath: [],
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

  const setFlightDisplayed = (req) => {
    API.getFlightPath(req)
      .then((res) => setCurrentFlight(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      {storedFlightPaths.length ? (
        storedFlightPaths.map((flightPath) => (
          <button
            key={flightPath._id}
            value={flightPath._id}
            onClick={setFlightDisplayed.bind(this, flightPath._id)}
          >
            {flightPath.name}
          </button>
        ))
      ) : (
        <div>There are no stored Flight Paths</div>
      )}
      {currentFlight.flightPath.length ? (
        <FlightMap currentFlight={currentFlight} />
      ) : (
        <div>Please select a Flight Path to display</div>
      )}
    </>
  );
}
export default FlightPaths;
