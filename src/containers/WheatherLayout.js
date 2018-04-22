import React, { Component } from 'react';
import { connect } from 'react-redux';
import WheatherLayoutComponent from '../components/WheatherLayout'

const mapStateToProps = state => ({
   cityStore: state
});

export default connect(
    mapStateToProps, 
    null)(WheatherLayoutComponent);