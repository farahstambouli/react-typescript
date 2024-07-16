import React from 'react';

// Define the type for the props usint the interface
interface GreetingProps {
  name: string;
}

// Use the defined type for the props
//FC :is functional component that is a react typescript component
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div className="greeting">Hello, {name}!</div>;
};

export default Greeting;
