import { useState } from "react";

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>{text}</th>
          <td>{value}</td>
        </tr>
      </tbody>
    </table>
  );
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
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="All" value={bad + good + neutral} />
      <StatisticLine
        text="Average"
        value={(good - bad) / (bad + good + neutral)}
      />
      <StatisticLine
        text="Positive"
        value={(good / (bad + good + neutral)) * 100}
      />
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
