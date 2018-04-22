import * as types from '../constants/ActionsTypes';

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
        case types.LOAD_MORE:
            let a = Object.assign({}, state, {
                ...state,
                loadMore: action.loadMore
            });
            return a;
        default:
            return state;
    }
}

export default weather;