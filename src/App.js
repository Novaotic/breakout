import './App.css';
import BrickGrid from './components/BrickGrid.js';
import Paddle from './components/Paddle.js';

function App() {
  return (
    <div className="App">
      <h1>Break Out</h1>
      <BrickGrid />


      <Paddle />
    </div>
  );
}

export default App;
