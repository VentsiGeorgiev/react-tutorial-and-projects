import { useState } from 'react';
import { data } from '../../data';
function ArrayExample() {
    // Remove from array

    const [people, setPeople] = useState(data);


    const removeHandler = (id) => {
        setPeople((prevState) => {
            return prevState.filter((user) => user.id !== id);
        });
    };


    return (
        <div>
            <h4>Array Example</h4>
            {people.map((user) => (
                <div>
                    <h4>{user.name}</h4>
                    <button type="button" onClick={() => removeHandler(user.id)}>del</button>
                </div>
            ))}
        </div>

    );

}

export default ArrayExample;