import React, { Component } from 'react';
import Form from './containers/Form';
import WheatherLayout from './containers/WheatherLayout';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form/>
        <WheatherLayout/>
      </div>
    );
  }
}

export default App;
