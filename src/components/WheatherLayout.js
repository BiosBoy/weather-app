import React, { Component } from 'react';
import WeatherItem from './WeatherItem';
import LoadMore from '../containers/LoadMore';

class WheatherLayout extends Component {
    render() {
        return (
            <div className="weather-layout">
                <h1>Your weather wiil be displayed here:</h1>
                <h2>{this.props.cityStore.city}</h2>
                <div className="weather-container">  
                    {this.props.cityStore.weather.slice(0, this.props.cityStore.loadMore).map((day, index) => {
                        return <WeatherItem key={index} params={day} />
                    })}
                </div>
                <LoadMore/>
            </div>
        );
    }
}

export default WheatherLayout;
