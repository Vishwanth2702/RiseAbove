import './App.css';
import Home  from './components/Home';
import Animations from './components/animation';
import Mainhomepage from './components/mainhomepage';
function App() {
  return (
    <div className="App">
      <Animations/>
      <Home/>
      <Mainhomepage/>
    </div>
  );
}

export default App;
