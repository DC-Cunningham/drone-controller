// import React from "react";
// import API from "../utils/API";

// const droneInput = API.getFlightPath;
// const photoLocations = [];

// // const flightPath = API;
// let dronePosition = { x: 0, y: 0, step: 0, lastCommand: "" };

// for (let i = 0; i < droneInput.length; i++) {
//   let command = droneInput.charAt(i);
//   switch (command) {
//     case "<":
//       dronePosition = {
//         x: dronePosition.x - 1,
//         y: dronePosition.y,
//         step: dronePosition.step + 1,
//         lastCommand: "<",
//       };
//       flightPath.push(dronePosition);
//       break;
//     case ">":
//       dronePosition = {
//         x: dronePosition.x + 1,
//         y: dronePosition.y,
//         step: dronePosition.step + 1,
//         lastCommand: ">",
//       };
//       flightPath.push(dronePosition);
//       break;
//     case "^":
//       dronePosition = {
//         x: dronePosition.x,
//         y: dronePosition.y + 1,
//         step: dronePosition.step + 1,
//         lastCommand: "^",
//       };
//       flightPath.push(dronePosition);
//       break;
//     case "v":
//       dronePosition = {
//         x: dronePosition.x,
//         y: dronePosition.y - 1,
//         step: dronePosition.step + 1,
//         lastCommand: "v",
//       };
//       flightPath.push(dronePosition);
//       break;
//     case "x":
//       photoLocations.push({
//         x: dronePosition.x,
//         y: dronePosition.y,
//         photoNumber: photoLocations.length,
//       });
//       break;
//   }
// }

// const uniquePhotoLocations = photoLocations.reduce((accumulator, current) => {
//   if (checkIfAlreadyExist(current)) {
//     return accumulator;
//   } else {
//     return [...accumulator, current];
//   }

//   function checkIfAlreadyExist(currentVal) {
//     return accumulator.some((item) => {
//       return item.x === currentVal.x && item.y === currentVal.y;
//     });
//   }
// }, []);

// console.log(flightPath);
// console.log(photoLocations);
// console.log(uniquePhotoLocations);

// //The number of commands given to the drone is 5853
// console.log(droneInput.length);

// // The number of Billboard photographs taken is 1195
// console.log(photoLocations.length);

// //The number of individual Billboards photographed is 655
// console.log(uniquePhotoLocations.length);

// function Detail() {
//   return (
//     <>
//       <div>
//         The number of command given for the complete Flight Path was{" "}
//         {droneInput.length}
//       </div>
//     </>
//   );
// }
// export default Detail;
