import React, { Component, Fragment } from 'react';

class WeatherItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div className="weather-item" key={this.props.params.key}>
                    <div className="weather-item_temperature">
                        <span>Local temperature: </span><p>{this.props.params.main.temp.toFixed(0)} °</p>
                    </div>
                    <div className="weather-item_status">
                        <span>Local status: </span><p>{this.props.params.weather[0].main}</p>
                    </div>
                    <div className="weather-item_situation">
                        <span>Street situation: </span>
                        <div className="weather-item_img">
                            <p>{this.props.params.weather[0].description}</p>
                            <img src={`http://openweathermap.org/img/w/${this.props.params.weather[0].icon}.png`} alt={'this.props.params.main.temp'} />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default WeatherItem;
