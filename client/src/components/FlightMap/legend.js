import React from "react";
import Pixel from "../Grid/pixel";

function Legend() {
  return (
    <div>
      <Pixel colour="#61DAF9" /> = Unflown airspace
      <Pixel colour="#FFFFFF" /> = Flown Airspace
      <Pixel colour="#61DAF9" />
    </div>
  );
}
export default Legend;
