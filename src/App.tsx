import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar title="restaurant" />
    </div>
  );
};

export default App;
