import React, { Component, Fragment } from 'react';

class WeatherItem extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    loadMore = () => {
        this.props.moreWeather(this.props.state.loadMore + 5);
    }

    componentDidMount() {
        if (this.props.state.loadMore === 5) {
            this.myRef.current.style.display = 'none';
        }
    }

    componentDidUpdate() {
        if (this.props.state.loadMore !== 0) {
            this.myRef.current.style.display = 'flex';
            this.myRef.current.style.justifyContent = 'center';
        }
        if (this.props.state.loadMore >= this.props.state.weather.length) {
            console.log(this.props.state.loadMore, this.props.state.weather.length)
            this.myRef.current.style.display = 'none';
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
