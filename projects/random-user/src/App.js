import { useState } from 'react';
import { useEffect } from 'react';

const url = 'https://randomuser.me/api/';

function App() {

    const [user, setUser] = useState({});

    const fetchUser = async () => {
        try {
            const response = await fetch(url);
            const result = await response.json();

            const data = result.results[0];
            console.log('data');
            console.log(data);

            const newUser = {
                firstName: data.name.first,
                lastName: data.name.last,
                email: data.email,
                age: data.dob.age,
                // address: `${data.location.street.name} ${data.location.street.number} ${data.location.country}`,
                streetName: data.location.street.name,
                streetNumber: data.location.street.number,
                country: data.location.country,
                phone: data.phone,
                password: data.login.password,
                image: data.picture.medium
            };

            setUser(newUser);

        } catch (error) {
            console.log(error);
        }

    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <main>
            <section>

            </section>
        </main>
    );
}

export default App;
