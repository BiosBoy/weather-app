import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moreWeather } from '../actions'
import loadMoreComponent from '../components/loadMore'

const mapStateToProps = state => (console.log('loadMoreComponent', state), {
    state: state
});

const mapDispatchToProps = dispatch => ({
   moreWeather: (loadMore) => dispatch(moreWeather(loadMore))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)(loadMoreComponent);
