import { useState, useContext, createContext } from 'react';
import { data } from '../../data';


// createContext give us access to two components - Provider, Consumer
const PersonContext = createContext();


function ContextAPI() {
    const [people, setPeople] = useState(data);

    const removePerson = (id) => {
        setPeople((prevState) => (
            prevState.filter((person) => person.id !== id)
        ));
    };

    return (
        <>
            <PersonContext.Provider value={{ removePerson }}>
                <h2>UseContext</h2>
                <hr />
                <section>
                    <ListOfPeople people={people} />
                </section>
            </PersonContext.Provider>
        </>
    );
}

const ListOfPeople = ({ people }) => {
    return (<>
        <div>
            {people.map((person) => {
                return <SignlePerson key={person.id} person={person} />;
            })}
        </div>
    </>);
};

const SignlePerson = ({ person }) => {
    // useContext accept the createContext name
    const { removePerson } = useContext(PersonContext);

    return (<>
        <div>
            <h4>Name: {person.name} --- ID: {person.id}</h4>
            <button
                onClick={() => removePerson(person.id)}
            >
                delete</button>
        </div>
    </>);
};

export default ContextAPI;