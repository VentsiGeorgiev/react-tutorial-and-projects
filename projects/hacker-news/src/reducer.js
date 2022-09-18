import {
    SET_LOADING,
} from './actions';

function reducer(state, action) {

    switch (action.type) {
        case SET_LOADING:
            return { ...state, isLoading: true };
        default:
            throw new Error(`No Matching ${action.type} Action Type`);
    }

};


export default reducer;