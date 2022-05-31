import './App.css';
import Score from './components/Score';
import Solution from './components/Solution';
import Hints from './components/Hints';
import Letters from './components/Letters';

function App() {
  return (
    <div className='App'>
      <Score />
      <Solution />
      <Hints />
      <Letters />
    </div>
  );
}

export default App;
