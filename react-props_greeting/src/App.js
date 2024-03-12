import "./styles.css";
import TemperatureDisplay from "./components/TemperatureDisplay.js";
export default function App() {
  return (
    <div>
      <TemperatureDisplay temperature={31} />
    </div>
  );
}
