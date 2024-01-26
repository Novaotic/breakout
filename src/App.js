import logo from './logo.svg';
import './App.css';
import Brick from './components/Brick.js'

function App() {
  return (
    <div className="App">
      <h1>Break Out</h1>
      <Brick color="blue" isDestroyed={false} />
    </div>
  );
}

export default App;
