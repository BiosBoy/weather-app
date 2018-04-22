import * as types from '../constants/ActionsTypes'

export const addWeather = (cityName, cityWeather) => ({
    type: types.ADD_WEATHER,
    cityName,
    cityWeather
});

export const moreWeather = (loadMore) => ({
    type: types.LOAD_MORE,
    loadMore
});