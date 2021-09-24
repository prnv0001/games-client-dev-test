import React from "react";
import PlayArea from "./components/PlayArea";

import "./styles/App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="heading">Falling Shapes Game</h1>
        <PlayArea />
      </div>
    );
  }
}
