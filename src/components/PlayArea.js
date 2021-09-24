import React from "react";
import Controls from "./Controls";
import { getRandomShape, drawShapes, app, CANVAS_WIDTH } from "../lib/utils";

export default class DrawingArea extends React.Component {
  constructor(props) {
    super(props);
    // defining states
    this.state = {
      gravity: 10, // controls the speed of falling shapes
      frequency: 1, // controls the no of shapes being generated per second
    };

    this.canvasRef = React.createRef();
    // eslint-disable-next-line no-unused-expressions
    this.interval; // reference to be used for setInterval
  }

  updateGravity = (updatedGravity) => {
    // this function controls the updating of gravity
    this.setState({ gravity: updatedGravity });
  };

  updateFrequency = (updatedFrequency) => {
    // this function controls the updating of frequency
    this.setState({ frequency: updatedFrequency });
  };

  // runs on mounting of application
  componentDidMount() {
    // appends canvas to the app
    this.canvasRef.current.parentNode.insertBefore(
      app.view,
      this.canvasRef.current.nextSibling
    );

    // for automatic falling of shapes
    this.automaticFallingShapes();

    // listens for click event on canvas
    app.view.addEventListener("mousedown", this.mouseDown);
  }

  componentDidUpdate(prevProps, prevState) {
    const { gravity, frequency } = prevState;
    if (gravity !== this.state.gravity || frequency !== this.state.frequency) {
      // runs every time gravity or frequency is updated
      clearInterval(this.interval);
      // for automatic falling of shapes
      this.automaticFallingShapes();
    }
  }

  // function to generate shapes falling automatically
  automaticFallingShapes = () => {
    this.interval = setInterval(() => {
      for (let i = 0; i < this.state.frequency; i++) {
        const y = -100;
        const x = Math.floor(Math.random() * CANVAS_WIDTH);
        drawShapes[getRandomShape()](x, y, this.state.gravity);
      }
    }, 1000);
  };

  componentWillUnmount() {
    // runs on unmounting of app
    clearInterval(this.interval);
    app.view.removeEventListener("mousedown", this.mouseDown);
  }

  mouseDown = (event) => {
    // this function runs whenever mouse is clicked inside the canvas

    const canvas = app.view;
    const { gravity } = this.state;
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    drawShapes[getRandomShape()](x, y, gravity);
  };

  render() {
    return (
      <>
        <div ref={this.canvasRef}></div>
        <Controls
          gravity={this.state.gravity}
          updateGravity={this.updateGravity}
          frequency={this.state.frequency}
          updateFrequency={this.updateFrequency}
        />
      </>
    );
  }
}
