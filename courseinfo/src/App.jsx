import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 },
  ];
  const total = parts.reduce((accum, cur) => accum + cur.exercises, 0);

  return (
    <div>
      <Header name={course} />
      <Content parts={parts} />
      <Total total={total} />
    </div>
  );
};

export default App;
