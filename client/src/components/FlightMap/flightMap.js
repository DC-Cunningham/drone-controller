import React, { useState, useEffect } from "react";
import Grid from "../Grid/grid";
import Loading from "./loading";
import styled from "styled-components";

const MapContainer = styled.div`
  width: 100%;
  height: 1200px;
  padding: 50px;
  display: flex;
  overflow: scroll;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.primaryDark};
`;

const makeArray = (xMin, xMax, yMin, yMax) => {
  const xRange = range(xMin, xMax);
  const yRange = range(yMin, yMax);
  const yArray = [];
  for (let i = yMin; i < yMax + 1; i++) {
    const xArray = [];
    for (let j = xMin; j < xMax + 1; j++) {
      xArray.push({ x: j, y: i, colour: "", photoCount: 0 });
    }
    yArray.unshift(xArray);
  }
  return yArray;
};

const range = function (a, b) {
  return Math.abs(a - b);
};

const FlightMap = (props) => {
  const [loading, setLoading] = useState(true);

  const flightPathArray = props.currentFlight.flightPath;
  const xMin = Math.min.apply(
    Math,
    flightPathArray.map(function (o) {
      return o.x;
    })
  );
  const xMax = Math.max.apply(
    Math,
    flightPathArray.map(function (o) {
      return o.x;
    })
  );
  const yMin = Math.min.apply(
    Math,
    flightPathArray.map(function (o) {
      return o.y;
    })
  );
  const yMax = Math.max.apply(
    Math,
    flightPathArray.map(function (o) {
      return o.y;
    })
  );
  const [flightPoint, setFlightPoint] = useState(
    makeArray(xMin, xMax, yMin, yMax)
  );

  // const update = () => {
  //   for (let i = 0; i < flightPathArray.length; i++) {
  //     const newArray = [...flightPoint].map((row, index) => {
  //       if (index === flightPathArray[i].y) {
  //         row.splice(flightPathArray[i].x, 1, flightPathArray[i]);
  //       }
  //       return row;
  //     });
  //     setFlightPoint(newArray);
  //   }
  // };

  const update = () => {
    for (let i = 0; i < flightPathArray.length; i++) {
      const newArray = [...flightPoint].map((row, index) => {
        if (row.x === flightPathArray[i].x && row.y === flightPathArray[i].y) {
          row.splice(index, 1, {
            x: row.x,
            y: row.y,
            colour: "red",
            photoCount: 0,
          });
        }
        return row;
      });
      setFlightPoint(newArray);
    }
  };

  useEffect(() => {
    update();
    setLoading(false);
  }, []);

  return (
    <>
      <MapContainer>
        {loading ? <Loading /> : <Grid flightPoint={flightPoint} />}
      </MapContainer>
    </>
  );
};

export default FlightMap;

//   // Generate the x axis header row
//   function renderHeaderRow([colStart, colEnd]) {
//     const headerRow = [];
//     for (let i = colStart; i <= colEnd; i++) {
//         headerRow.push(<HeaderTile key={`X${i}`} headerId={`X${i}`} headerName={i} />);
//     }
//     return headerRow;
// }

// // Generate rows to be displayed on the y-axis
// function renderRows([rowStart, rowEnd]) {
//     const rows = [];
//     for (let i = rowStart; i <= rowEnd; i++) {
//         const rowId = `Y${i}`;
//         rows.push(<GridRow key={rowId} rowId={rowId} yPos={i} />);
//     }
//     return rows;
// }

// return (
//     <div className="d-flex flex-column flex-nowrap overflow-auto p-2 my-3 mx-auto">
//         {renderRows(state.rangeY)}
//         <div className="d-flex flex-row flex-nowrap justify-content-center">
//             <HeaderTile headerId={`XY`} headerName="" />
//             {renderHeaderRow(state.rangeX)}
//         </div>
//     </div>
// );
