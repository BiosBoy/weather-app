import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addWeather } from '../actions'
import FormComponent from '../components/Form'

const mapDispatchToProps = dispatch => ({
    setWeather: (cityName, cityWeather) => dispatch(addWeather(cityName, cityWeather))
});

export default connect(
    null,
    mapDispatchToProps)(FormComponent);
