import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Booknow from './components/Booknow';
import Prices from "./components/Prices";
import Faqs from "./components/Faqs";
import Contactus from "./components/Contactus";
import Waiver from "./components/PartyBusWaiver";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    
    <Router>
    <div className="App">
      <Switch>
      <Route exact path='/'>
							<Home />
					</Route>
      <Route path='/Prices'>
			<Prices />
			</Route>
      <Route path='/Faqs'>
					<Faqs />
			</Route>
      <Route path='/ContactUs'>
					<Contactus />
			</Route>
      <Route path='/BookNow'>
					<Booknow />
			</Route>
      <Route path='/Waiver'>
					<Waiver />
			</Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
