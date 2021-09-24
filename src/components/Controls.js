import React from "react";

export default class Controls extends React.Component {
  render() {
    const { updateFrequency, updateGravity, gravity, frequency } = this.props;

    return (
      <div className="controls">
        <div className="control-gravity">
          <button type="button" onClick={() => updateGravity(gravity + 1)}>
            +1
          </button>
          <button
            type="button"
            onClick={() => (gravity === 0 ? "" : updateGravity(gravity - 1))}
          >
            -1
          </button>
          <p>GRAVITY: {gravity}</p>
          <p className="desktop-only">(Speed Indicator)</p>
        </div>
        <div className="control-shapes">
          <button type="button" onClick={() => updateFrequency(frequency + 1)}>
            +1
          </button>
          <button
            type="button"
            onClick={() =>
              frequency === 0 ? "" : updateFrequency(frequency - 1)
            }
          >
            -1
          </button>
          <p>FREQUENCY: {frequency}</p>
          <p className="desktop-only">(No of shapes per second)</p>
        </div>
      </div>
    );
  }
}
