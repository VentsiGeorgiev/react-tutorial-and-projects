import { useState } from 'react';
import { data } from '../../data';

function PropDrilling() {
    const [people, setPeople] = useState(data);

    // # removePerson function  -> ListOfPeople ->  SignlePerson ->

    const removePerson = (id) => {
        setPeople((prevState) => (
            prevState.filter((person) => person.id !== id)
        ));
    };

    return (
        <>
            <h2>PropDrilling</h2>
            <hr />
            <section>
                <ListOfPeople people={people} removePerson={removePerson} />
            </section>
        </>
    );
}

const ListOfPeople = ({ people, removePerson }) => {
    return (<>
        <div>
            {people.map((person) => {
                return <SignlePerson key={person.id} person={person} removePerson={removePerson} />;
            })}
        </div>
    </>);
};

const SignlePerson = ({ person, removePerson }) => {
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

export default PropDrilling;