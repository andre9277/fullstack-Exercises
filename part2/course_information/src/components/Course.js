const Header = ({ course }) => <h1>{course}</h1>;
const Total = ({ sum }) => <p>Number of exercises {sum}</p>;

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => {
  const total = parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    0
  );

  return (
    <>
      {parts.map((item) => (
        <Part part={item} key={item.id} />
      ))}
      <Total sum={total} />
    </>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </div>
  );
};

export default Course;
