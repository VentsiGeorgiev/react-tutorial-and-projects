import { useEffect, useState } from 'react';

function MultipleReturnsFetch() {
    const url = 'https://api.github.com/users/takeo';
    const [user, setUser] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                if (res.status <= 200 && res.status >= 299) {
                    setLoading(false);
                    setIsError(true);
                    console.log(res.statusText);
                    throw new Error(res.statusText);

                }
                const result = await res.json();
                setUser(result);
                setLoading(false);

            } catch (err) {
                console.log(err);
                console.error(err);
            }
        };
        fetchData();
    }, []);

    if (isLoading) {
        return <h2>Loading...</h2>;
    }
    if (isError) {
        return <h2>Error...</h2>;
    }


    return (
        <>
            <h2>User: {user.login}</h2>
            <h3>Name: {user.name}</h3>
        </>

    );
}

export default MultipleReturnsFetch;