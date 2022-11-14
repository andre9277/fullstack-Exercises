import { useState } from "react";

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <p>No feedback given!</p>
      </div>
    );
  }
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {bad + good + neutral}</p>
      <p>Average: {(good - bad) / (bad + good + neutral)}</p>
      <p>Positive: {(good / (bad + good + neutral)) * 100} %</p>
    </div>
  );
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
