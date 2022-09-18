import {
    SET_LOADING,
    SET_NEWS,
    SET_QUERY,
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
        case SET_QUERY:
            return {
                ...state,
                query: action.payload
            };

        default:
            throw new Error(`No Matching ${action.type} Action Type`);
    }

};


export default reducer;