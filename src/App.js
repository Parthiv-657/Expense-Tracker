import React from 'react';
import './App.css';
import Header from './Components/Header'
import Tracker from './Components/Tracker'
class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Tracker />
      </div>
    );
  }
}

export default App;