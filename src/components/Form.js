import React, { Component } from 'react';

class Form extends Component {
    getWeather = (e) => {
        e.preventDefault();
        let city = e.target.city.value;
        const API_KEY = '39efbb597df791cd069876e3475fa631';

        let fetchWeather = async () => {
            const weatherRequest = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`);
            const weatherStore = await weatherRequest.json();
            this.props.setWeather(city, weatherStore.list);
        }
        fetchWeather();
    }

    render() {
        return (
            <div className="form">
                <h2>Type the name of the city: ("London" for example) </h2>
                <form onSubmit={this.getWeather} className="weather-form">
                    <input type="text" name="city" placeholder="City..." required/>
                    <input type="submit" value="GetWeather!" required/>
                </form>
            </div>
        );
    }
}

export default Form;
