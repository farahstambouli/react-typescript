import React, { Component } from 'react';

// Define the type for the state
//defines the structure of the component's state
interface CounterState {
  count: number;
}

// Define the type for the props (if any, otherwise use an empty object)
//defines the structure of the component's props
interface CounterProps {}

// Use the defined types for the state and props
//specifies the types for props and state in the Counter class component.
class Counter extends Component<CounterProps, CounterState> {
  // Initialize the state with type annotations
  state: CounterState = {
    count: 0,
  };

  // Add type annotations for the method
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="counter">
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
