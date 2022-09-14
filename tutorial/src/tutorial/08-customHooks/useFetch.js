import { useState } from 'react';

export const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const res = await fetch(url);
            if (res.status >= 200 && res.status <= 299) {
                const result = await res.json();
                setData(result);
                setIsLoading(false);
            }
            setIsLoading(false);
            setIsError(true);
            throw new Error('Something went wrong');
        } catch (error) {
            console.log(error);
            console.log(error.message);
            setIsLoading(false);
        }

    };



    return { isLoading, isError, data, fetchData };
};