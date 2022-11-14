import { useState } from "react";

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementGoodValue = () => {
    setGood(good + 1);
  };

  const incrementNeutralValue = () => {
    setNeutral(neutral + 1);
  };

  const incrementBadValue = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="good" handleClick={incrementGoodValue} />
      <Button text="neutral" handleClick={incrementNeutralValue} />
      <Button text="bad" handleClick={incrementBadValue} />
      <h1>Statistics</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  );
};

export default App;
