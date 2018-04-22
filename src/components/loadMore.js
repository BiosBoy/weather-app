import React, { Component, Fragment } from 'react';

class WeatherItem extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    loadMore = () => {
        this.props.moreWeather(this.props.state.loadMore + 5);
    }

    componentDidUpdate() {
        if (this.props.state.loadMore === this.props.state.weather.length) {
            this.myRef.current.remove();
        }
    }

    render() {
        return (
            <div ref={this.myRef} id="loadMore" className="weather-more">
                <button onClick={this.loadMore}>Load more days...</button>
            </div>
        );
    }
}

export default WeatherItem;
