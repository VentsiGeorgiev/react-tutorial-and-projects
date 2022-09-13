import { useReducer, useState } from 'react';

// reducer function takes the old state and action
// actions - what we are trying to do
// we always need to return some kind of state
// if we don't return no one of the functionality is gonna make sense
const reducer = (state, action) => {
    console.log('reducer function - state');
    console.log(state);

    if (action.type === 'ADD_PERSON') {
        const newPeople = [...state.people, action.payload];
        return { ...state, people: newPeople };
    }
    if (action.type === 'REMOVE_PERSON') {
        // const newPeople = state.people.filter((person) => {
        //     return person.id !== action.payload;
        // });
        // const newPeople = state.people.filter((person) => (
        //     person.id !== action.payload
        // ));
        const newPeople = state.people.filter((person) => person.id !== action.payload);
        return { ...state, people: newPeople };
    }


    throw new Error('No macthing action type');

};

const initialState = {
    people: [],
    message: '',
};

function UseReducerExample() {
    // The diff between useState and useReducer is 
    // each and every time you want to do something with the whole state
    // we ALWAYS, ALWAYS must use dispatch and it's gonna go through reducer function
    // reducer function  
    const [state, dispatch] = useReducer(reducer, initialState);

    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name) {
            const newPerson = {
                id: new Date().valueOf(),
                name
            };
            dispatch({ type: 'ADD_PERSON', payload: newPerson });
            setName('');
        }

    };

    return (
        <>
            <h1>useReducer Example</h1>
            <section>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button>Add</button>
                </form>


            </section>

            <section>
                {state.people.map((person) => (
                    <div key={person.id}>
                        <h3 >{person.name}</h3>
                        <button
                            onClick={() => dispatch({ type: 'REMOVE_PERSON', payload: person.id })}
                        >
                            del
                        </button>
                    </div>

                ))}
                <p>{state.message}</p>
            </section>
        </>
    );
}

export default UseReducerExample;