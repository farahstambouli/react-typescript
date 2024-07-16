import React from 'react';
import './App.css';
import Greeting from './components/Greeting';
import Counter from './components/Counter';

const App: React.FC = () => {
  return (
    <div className="container">
      <h1>Welcome to My App</h1>
      <Greeting name="Daisy Mae" />
      <Counter />
    </div>
  );
}

export default App;

