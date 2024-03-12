export default function TemperatureDisplay({ temperature }) {
  return (
    <div>
      <h1>
        It is {temperature < 25 ? "cold!" : temperature > 30 ? "hot" : "warm!"}
      </h1>
    </div>
  );
}
