import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

const API_URL = 'https://opentdb.com/api.php?';


const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [questions, setQuestions] = useState([]);
    const [formData, setFormData] = useState({
        questionCount: 10,
        category: 'sports',
        difficulty: 'easy',
    });
    const { questionCount, category, difficulty } = formData;

    const fetchData = async (quesCount, cat, diff) => {
        const categoryConfig = {
            sports: 21,
            mythology: 20,
            history: 23,
        };
        try {
            const response = await fetch(`${API_URL}amount=${quesCount}&category=${categoryConfig[cat]}&difficulty=${diff}&type=multiple`);
            const result = await response.json();
            // console.log(result.results);
            setQuestions(result.results);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }

    };

    const handleChange = (e) => {
        // console.log(e.target.value);
        // console.log(e.target.name);
        setFormData((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!questionCount || !category || !difficulty) {
            return;
        }

        fetchData(questionCount, category, difficulty);
    };


    return <AppContext.Provider value={{
        isLoading,
        questions,
        formData,
        handleChange,
        handleSubmit
    }}
    >
        {children}
    </AppContext.Provider>;
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };