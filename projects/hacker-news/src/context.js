import { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from './reducer';
import {
    SET_LOADING,
    SET_NEWS,
    SET_QUERY,
    HANDLE_PAGE,
} from './actions';

const AppContext = createContext();

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';

const initialState = {
    isLoading: true,
    news: [],
    query: 'react',
    page: 0,
    nbPages: 0,
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchData = async (url) => {
        dispatch({ type: SET_LOADING });
        try {
            const response = await fetch(url);
            const result = await response.json();
            dispatch({
                type: SET_NEWS,
                payload: {
                    news: result.hits,
                    page: result.page,
                    nbPages: result.nbPages
                }
            });
        } catch (error) {
            console.log(error);
        }

    };

    const handleSearch = (query) => {
        dispatch({ type: SET_QUERY, payload: query });
    };

    const handlePage = (value) => {
        dispatch({ type: HANDLE_PAGE, payload: value });
    };

    useEffect(() => {
        fetchData(`${API_ENDPOINT}${state.query}&page=${state.page}`);
    }, [state.query, state.page]);

    return <AppContext.Provider
        value={{
            ...state,
            handleSearch,
            handlePage,
        }}
    >
        {children}
    </AppContext.Provider>;

};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { useGlobalContext };
export { AppContext, AppProvider };