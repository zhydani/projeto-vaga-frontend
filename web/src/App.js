import './App.css';
import axios from 'axios'; //Optei por utilizar a lib (biblioteca) axios por ser mais simples do que a nativa fetch
import Anime from './components/animes';

function App() {

  return (
    <div className="App">
      <Anime />
    </div>
  );
}

export default App;
