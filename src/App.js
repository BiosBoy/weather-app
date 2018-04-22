import React, { Component } from 'react';
import Form from './containers/Form';
import './App.css'
import WheatherLayout from './containers/WheatherLayout';
import WeatherImage from './components/WeatherImage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form/>
        <WheatherLayout/>
        <WeatherImage/>
      </div>
    );
  }
}

export default App;
