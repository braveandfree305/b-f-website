import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from './components/Checkout';
import Success from "./components/Success";
import Cancel from "./components/Cancel";
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">

      <Switch>
      <Route exact path='/'>
							<Checkout />
					</Route>
      <Route path='/success'>
							<Success />
					</Route>
      <Route path='/cancel'>
						<Cancel />
			</Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
