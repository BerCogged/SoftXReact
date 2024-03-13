import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import Roulette from './Roulette';
import Login from "./Login";
import Register from './Register';
function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Menu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/roulette">
            <Roulette/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path='/register'>
            <Register/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;