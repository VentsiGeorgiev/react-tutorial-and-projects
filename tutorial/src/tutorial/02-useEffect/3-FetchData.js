import { useEffect, useState } from 'react';

const url = 'https://api.github.com/users';

function UseEffectBasics() {
    const [users, setUsers] = useState([]);

    // # Infinity loop
    // const fetchData = async () => {
    //     const res = await fetch(url);
    //     const result = await res.json();
    //     // setUsers(result);
    //     console.log(result);
    // };

    // useEffect(() => {
    //     fetchData();
    // });

    // const fetchData = async () => {
    //     const res = await fetch(url);
    //     const result = await res.json();
    //     setUsers(result);
    // };

    // useEffect(() => {
    //     fetchData();
    // }, []);

    const fetchData = async () => {
        const response = await fetch('https://api.github.com/users');
        const data = await response.json();
        console.log('data = heere');
        console.log(data);
        setUsers(data);
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div>
            <h2>useEffect Fetch Data</h2>
            <ul>
                {users.map((user) => (
                    <div key={user.id}>
                        <li>{user.login}</li>
                        <img src={user.avatar_url} alt={user.login} height={40} width={40} />
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default UseEffectBasics;