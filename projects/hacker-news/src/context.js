import { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from './reducer';
import {
    SET_LOADING,
    SET_NEWS,
    SET_QUERY,
} from './actions';

const AppContext = createContext();

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';

const initialState = {
    isLoading: true,
    news: [],
    query: 'react'
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchData = async (url) => {
        dispatch({ type: SET_LOADING });
        try {
            const response = await fetch(url);
            const result = await response.json();
            dispatch({ type: SET_NEWS, payload: result.hits });
        } catch (error) {
            console.log(error);
        }

    };

    const handleSearch = (query) => {
        dispatch({ type: SET_QUERY, payload: query });
    };

    useEffect(() => {
        fetchData(`${API_ENDPOINT}${state.query}`);
    }, [state.query]);

    return <AppContext.Provider
        value={{
            ...state,
            handleSearch,
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