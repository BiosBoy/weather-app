import React, { Component } from 'react';
import WeatherItem from './WeatherItem';
import LoadMore from '../containers/LoadMore';

class WheatherLayout extends Component {

    render() {
        let date = '';
        let status = false;
        return (
            <div className="weather-layout">
                <h1>Your weather wiil be displayed here:</h1>
                <h2>{this.props.cityStore.city}</h2>
                <div className="weather-container">  
                    {this.props.cityStore.weather.slice(0, this.props.cityStore.loadMore).map((day, index) => {
                        if (date != day.dt_txt.substr(0, day.dt_txt.length - 9)) {
                            date = day.dt_txt.substr(0, day.dt_txt.length - 9);
                            status = true;
                        } else {
                            status = false;
                        }
                        return <WeatherItem key={index} params={day} date={status === true ? date : ''} time={day.dt_txt.substr(day.dt_txt.length - 9)}/>
                    })}
                </div>
                <LoadMore/>
            </div>
        );
    }
}

export default WheatherLayout;
