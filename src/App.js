import Calculator from './components/Calculator/Calculator';
//import ImagePost from './components/ImagePost/ImagePost';
import CountdownTimer from './components/TicTacToe/CountdownTimer';
import Game from "./components/TicTacToe/Game";
//import './App.css';

function App() {
  return (
    <div >
      <Calculator />
      <br />
      <br />
      <br />
      {/* <ImagePost /> */}

      <br />
      <CountdownTimer />
      <br />
      <Game />
    </div>
  );
}

export default App;
