import React, { Component } from 'react';
import { connect } from 'react-redux';
import WheatherLayoutComponent from '../components/WheatherLayout'

const mapStateToProps = state => (console.log('WheatherLayoutComponent ', state), {
   cityStore: state.weather
});

export default connect(
    mapStateToProps, 
    null)(WheatherLayoutComponent);
