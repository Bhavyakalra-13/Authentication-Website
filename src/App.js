import './App.css';
import Login from './Login';
import Signup from './signup';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = "/">
            <Login/>
          </Route>
          <Route exact path = "/signup">
            <Signup/>
          </Route>
          <Route>
            <Login/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
