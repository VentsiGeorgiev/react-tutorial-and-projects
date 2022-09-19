import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const API_URL = 'https://opentdb.com/api.php?';


const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isStarted, setIsStarted] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [page, setPage] = useState(0);
    const [correct, setCorrect] = useState(0);
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
            setIsLoading(true);
            const response = await fetch(`${API_URL}amount=${quesCount}&category=${categoryConfig[cat]}&difficulty=${diff}&type=multiple`);
            const result = await response.json();
            // console.log(result.results);
            setQuestions(result.results);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }

    };

    const handleChange = (e) => {
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
        setIsStarted(true);
    };

    const nextPage = () => {
        setPage((prevState) => {
            const nextPage = prevState + 1;
            if (nextPage > questions.length - 1) {
                console.log('Last Page');
                return 0;
            } else {
                return nextPage;
            }
        });
    };

    const checkAnswer = (isCorrectAnswer) => {
        if (isCorrectAnswer) {
            setCorrect((prevState) => prevState + 1);
        }
        nextPage();
    };


    return <AppContext.Provider value={{
        isLoading,
        questions,
        formData,
        isStarted,
        page,
        correct,
        handleChange,
        handleSubmit,
        nextPage,
        checkAnswer
    }}
    >
        {children}
    </AppContext.Provider>;
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };