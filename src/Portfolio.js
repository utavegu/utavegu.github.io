import Regalia from './components/Regalia';
import Works from './components/Works';

function Portfolio() {
  // Бэкграунд - градиент
  return (
    <>
      <h1 className="visually-hidden">Портфолио</h1>
      <Works />
      <Regalia />
    </>
  );
}

export default Portfolio;
