import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [formData, setFormData] = useState({
        questionCount: 10,
        category: 'sport',
        difficulty: 'easy',
    });
    const { questionCount, category, difficulty } = formData;



    const handleChange = (e) => {
        // console.log(e.target.value);
        // console.log(e.target.name);
        setFormData((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('---');
        console.log(questionCount);
        console.log(category);
        console.log(difficulty);
        console.log('---');
    };


    return <AppContext.Provider value={{
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