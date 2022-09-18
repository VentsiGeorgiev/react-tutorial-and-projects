import {
    HANDLE_PAGE,
    REMOVE_ARTICLE,
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
                news: action.payload.news,
                page: action.payload.page,
                nbPages: action.payload.nbPages,
            };
        case SET_QUERY:
            return {
                ...state,
                query: action.payload
            };
        case HANDLE_PAGE:
            if (action.payload === 'next') {
                let nextPage = state.page++;
                if (nextPage > state.nbPages - 1) {
                    nextPage = 0;
                }
                return { ...state, page: nextPage };
            }
            if (action.payload === 'prev') {
                let prevPage = state.page--;
                if (prevPage < 0) {
                    prevPage = state.nbPages - 1;
                }
                return { ...state, page: prevPage };
            }
            return {
                ...state,
                query: action.payload
            };
        case REMOVE_ARTICLE:
            return {
                ...state,
                news: state.news.filter((x) => x.objectID !== action.payload)
            };

        default:
            throw new Error(`No Matching ${action.type} Action Type`);
    }

};


export default reducer;