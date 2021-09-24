import React from "react";

export default class Controls extends React.Component {
  render() {
    return (
      <div className="controls">
        <div className="control-gravity">
          <button
            type="button"
            onClick={() => this.props.updateGravity(this.props.gravity + 1)}
          >
            +1
          </button>
          <button
            type="button"
            onClick={() =>
              this.props.gravity === 0
                ? ""
                : this.props.updateGravity(this.props.gravity - 1)
            }
          >
            -1
          </button>
          <p>GRAVITY: {this.props.gravity}</p>
        </div>
        <div className="control-shapes">
          <button
            type="button"
            onClick={() => this.props.updateFrequency(this.props.frequency + 1)}
          >
            +1
          </button>
          <button
            type="button"
            onClick={() =>
              this.props.frequency === 0
                ? ""
                : this.props.updateFrequency(this.props.frequency - 1)
            }
          >
            -1
          </button>
          <p>FREQUENCY: {this.props.frequency}</p>
        </div>
      </div>
    );
  }
}
