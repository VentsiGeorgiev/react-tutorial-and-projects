import { useState } from 'react';
import { useEffect } from 'react';
import { FaUser, FaEnvelope, FaCalendarAlt, FaMapMarkedAlt, FaPhoneSquare } from 'react-icons/fa';

const url = 'https://randomuser.me/api/';

function App() {

    const [user, setUser] = useState({});
    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const fetchUser = async () => {
        try {
            const response = await fetch(url);
            const result = await response.json();

            const data = result.results[0];

            // const newUser = {
            //     firstName: data.name.first,
            //     lastName: data.name.last,
            //     email: data.email,
            //     age: data.dob.age,
            //     // address: `${data.location.street.name} ${data.location.street.number} ${data.location.country}`,
            //     streetName: data.location.street.name,
            //     streetNumber: data.location.street.number,
            //     country: data.location.country,
            //     phone: data.phone,
            //     image: data.picture.large
            // };

            const newUser = {
                name: `${data.name.first} ${data.name.last}`,
                email: data.email,
                age: data.dob.age,
                address: `${data.location.street.name} ${data.location.street.number} ${data.location.country}`,
                phone: data.phone,
                image: data.picture.large
            };

            setUser(newUser);
            setTitle('name');
            setValue(newUser.name);
            setIsLoading(false);

        } catch (error) {
            console.log(error);
        }

    };

    useEffect(() => {
        fetchUser();
    }, []);


    const handleClick = (e) => {
        setTitle([e.currentTarget.id]);
        setValue(user[e.currentTarget.id]);
    };


    if (isLoading) {
        return <h3>Loading...</h3>;
    }

    return (
        <main>
            <section>
                <article className='person'>
                    <header>
                        <img className='person-image' src={user && user.image} alt={user.name} />
                    </header>
                    <div className='person-info'>
                        <div className='person-data'>
                            <p className='title'>{title}</p>
                            <h3 className='value'>{value}</h3>
                        </div>

                        <div className='icons'>
                            <button
                                id='name'
                                className='btn'
                                onClick={handleClick}
                            >
                                <FaUser className='icon' />
                            </button>
                            <button
                                id='email'
                                className='btn'
                                onClick={handleClick}
                            >
                                <FaEnvelope className='icon' />
                            </button>
                            <button
                                id='age'
                                className='btn'
                                onClick={handleClick}
                            >
                                <FaCalendarAlt className='icon' />
                            </button>
                            <button
                                id='address'
                                className='btn'
                                onClick={handleClick}
                            >
                                <FaMapMarkedAlt className='icon' />
                            </button>
                            <button
                                id='phone'
                                className='btn'
                                onClick={handleClick}
                            >
                                <FaPhoneSquare className='icon' />
                            </button>

                        </div>

                        <button
                            onClick={fetchUser}
                            className='btn-random'
                        >Random</button>
                    </div>

                </article>
            </section>
        </main>
    );
}

export default App;
