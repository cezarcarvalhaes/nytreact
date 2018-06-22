import React, { Component } from 'react';
import Home from "./pages/Home";
import Saved from "./pages/Saved"
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <Router>
        <Wrapper>
          <Jumbotron />
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
        </Wrapper>
      </Router>
    )
  }
}

export default App;
