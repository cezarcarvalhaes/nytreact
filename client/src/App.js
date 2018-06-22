import React, { Component } from 'react';
import Home from "./pages/Home";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";

class App extends Component {
  state = {
    articles: [{ _id: 1, title: "go Brazil!", url: "none" }]

  }
  render() {
    return (
      <Wrapper>
        <Jumbotron/>
        <Home/>
      </Wrapper>
    )
  }
}

export default App;
