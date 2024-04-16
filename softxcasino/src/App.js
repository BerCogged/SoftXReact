import './App.css';
import Navbar from './componets/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './componets/Menu';
import Home from './componets/Home';
import History from './componets/History';
import Roulette from './Games/Roulette';
import Login from "./Login";
import Register from './Register';
import Poker from './Games/Poker';
import BlackJack from './Games/Blackjack';
import Plink from './Games/Plinko';
import Slot from "./Games/Slot"
function App() {

  return (
    <Router>
      <div className="App" >
        <Navbar />
        <Menu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/roulette">
            <Roulette/>
          </Route>
          <Route path='/poker'>
            <Poker/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path='/register'>
            <Register/>
          </Route>
          <Route path='/blackjack'>
            <BlackJack/>
          </Route>
          <Route path='/plinko'>
            <Plink/>
          </Route>
          <Route path='/slot'>
            <Slot/>
          </Route>
          <Route path='/history'>
            <History/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;