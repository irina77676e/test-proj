import React from 'react';
import Controls from './Controls';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {};

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };
  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };
  render() {
    return (
      <div className="Counter">
        <span className="Counter_ _value">{this.state.value}</span>

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
        {/* <div className="Counter_ _controls">
          <button type="button" onClick={this.handleIncrement}>
            Plus one
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Minus one
          </button>
        </div> */}
      </div>
    );
  }
}

export default Counter;
