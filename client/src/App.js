import React, { Component } from 'react';
import Home from "./pages/Home"

class App extends Component {
  state = {
    articles: [{ _id: 1, title: "go Brazil!", url: "none" }]

  }
  render() {
    return (
      <Home/>
    )
  }
}

export default App;
