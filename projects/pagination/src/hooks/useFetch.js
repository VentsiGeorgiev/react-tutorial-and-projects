import { useEffect, useState } from 'react';

function useFetch(url) {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                setIsLoading(false);
                setData(result);

            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        };

        fetchData();


    }, [url]);

    return { data, isLoading };

}

export default useFetch;