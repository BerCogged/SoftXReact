import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import Roulette from './Roulette';
function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Menu />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/roulette">
            <Roulette/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;