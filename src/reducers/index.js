import * as types from '../constants/ActionsTypes'
import { combineReducers } from 'redux';
import weather from './addWeather';
import loadMore from './loadMore';

const reducers = combineReducers({
    weather,
    loadMore
});

export default reducers;