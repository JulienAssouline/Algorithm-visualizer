import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import Sorting from "./Sorting";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route path="/" exact component={LandingPage} />
        <Route path="/sorting" exact component={Sorting} />
      </Router>
    </div>
  );
}

export default App;
