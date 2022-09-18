import {
    SET_LOADING,
    SET_NEWS,
} from './actions';

function reducer(state, action) {

    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case SET_NEWS:
            return {
                ...state,
                isLoading: false,
                news: action.payload,
            };
        default:
            throw new Error(`No Matching ${action.type} Action Type`);
    }

};


export default reducer;