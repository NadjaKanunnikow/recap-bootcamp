import "./styles.css";

// export default function App() {
//   return (
//     <div>
//       <Greeting name="Mareike" />
//     </div>
//   );
// }

// function Greeting({ name }) {
//   return (
//     <div>
//       <h1>Hello {name === "Mareike" ? "Coach" : { name }}!</h1>
//     </div>
//   );
// }

//conditional rendering

import React from "react";

function TemperatureDisplay({ temperature }) {
  temperature = 27;
  // Bedingtes Rendern für "Es ist heiß!" (Bonus)
  return <div>{temperature > 25 ? "Es ist warm!" : "Es ist kühl!"}</div>;
}

export default TemperatureDisplay;
