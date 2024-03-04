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
        It's {temperature > 25 ? "warm!" : temperature > 30 ? "hot" : "cold!"}
      </h1>
    </div>
  );
}
