import './App.css';
import GameContainer from './components/GameContainer.js';

function App() {
  return (
    <div className="App" style={{
      display: 'grid',
      gridTemplateColumns: '[first] 30% [game] 40% [second] 30%',
      gridTemplateRows: '[top] 25% [bottom] auto',
    }}>
      <h1 style={{
        gridArea: 'top / first / bottom / first',
      }}>Break Out!</h1>
      <GameContainer />
    </div>
  );
}

export default App;
