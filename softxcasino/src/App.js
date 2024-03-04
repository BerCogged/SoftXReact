import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/home">
            <Home />
              </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;