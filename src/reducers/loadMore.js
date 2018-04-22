import * as types from '../constants/ActionsTypes'

let initialState = {
    city: '',
    weather: [],
    loadMore: 5
};

const loadMore = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_MORE:
            return Object.assign({}, state, {
                ...state,
                loadMore: action.loadMore
            });
        default:
            return state;
    }
}

export default loadMore;