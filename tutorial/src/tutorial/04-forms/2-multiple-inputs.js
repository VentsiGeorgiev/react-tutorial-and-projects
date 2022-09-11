import { useState } from 'react';

function MultipleInputs() {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [age, setAge] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: ''
    });
    const [people, setPeople] = useState([]);

    const { name, email, age } = formData;

    const handleChange = (e) => {
        setFormData((prevState) => (
            { ...prevState, [e.target.name]: [e.target.value] }
        ));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPerson = {
            id: new Date().valueOf(),
            name,
            email
        };
        if (name && email && age) {

            setPeople((people) => (
                [...people, newPerson]
            ));

            setFormData({
                name: '',
                email: '',
                age: ''
            });
        }

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
                            onChange={handleChange}
                            placeholder='Name'
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={handleChange}
                            placeholder='Email'
                        />
                    </div>
                    <div>
                        <input
                            type="age"
                            name="age"
                            id="age"
                            value={age}
                            onChange={handleChange}
                            placeholder='Age'
                        />
                    </div>
                    <button>Submit</button>
                </form>
            </section>

            <section>
                <hr />
                {people.map((person) => (
                    <h3 key={person.id}>{person.name} - {person.email} - {person.age}</h3>
                ))}
            </section>

        </>
    );
}

export default MultipleInputs;