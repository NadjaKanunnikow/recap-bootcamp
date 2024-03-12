import "./styles.css";

export default function App() {
  return (
    <div>
      <TemperatureDisplay temperature={31} />
    </div>
  );
}

function TemperatureDisplay({ temperature }) {
  return (
    <div>
      <h1>
        It is {temperature < 25 ? "cold!" : temperature > 30 ? "hot" : "warm!"}
      </h1>
    </div>
  );
}
