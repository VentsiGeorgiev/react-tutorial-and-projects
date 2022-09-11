import { useState } from 'react';

function ControlledInputs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [people, setPeople] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.trim() === '' || email.trim() === '') {
            return;
        }

        const newPerson = {
            id: new Date().valueOf(),
            name,
            email
        };

        // setPeople((people) => {
        //     return [...people, newPerson];
        // });
        setPeople((people) => (
            [...people, newPerson]
        ));

        setName('');
        setEmail('');
    };


    return (
        <>

            <section>
                <h2>Controlled inputs</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Name'
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Email'
                        />
                    </div>
                    <button>Submit</button>
                </form>
            </section>

            <section>
                <hr />
                {people.map((person) => (
                    <h3 key={person.id}>{person.name} - {person.email}</h3>
                ))}
            </section>

        </>
    );
}

export default ControlledInputs;