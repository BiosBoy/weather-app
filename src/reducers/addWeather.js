import * as types from '../constants/ActionsTypes'

let initialState = {
    city: '',
    weather: [],
    loadMore: 5
};

const weather = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_WEATHER:
            return Object.assign({}, state, {
                city: action.cityName,
                weather: [
                    ...action.cityWeather
                ],
                loadMore: 5
            });
        default:
            return state;
    }
}

export default weather;