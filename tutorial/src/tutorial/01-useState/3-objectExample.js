import { useState } from 'react';

function ObjectExample() {
    // Change object - message

    const [person, setPerson] = useState({
        name: 'peter',
        age: 24,
        message: 'random message',
    });

    const handleChange = () => {

        setPerson((prevState) => ({
            ...prevState, message: 'another random message'
        }));
    };

    return (
        <div>
            <h3>{person.message}</h3>
            <button type="button" onClick={handleChange}>change message</button>
        </div>
    );

}

export default ObjectExample;