import { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from './reducer';
import {
    SET_LOADING,
    SET_NEWS,
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

    useEffect(() => {
        fetchData(`${API_ENDPOINT}${state.query}`);
    }, [state.query]);

    return <AppContext.Provider
        value={{
            ...state,
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