import { useEffect, useState } from 'react';
// by default runs after every re-render
// perform side effects 

function FetchData() {
    const [value, setValue] = useState(0);

    useEffect(() => {
        console.log('call useEffect');
        if (value > 2) {
            document.title = `New Messages(${value})`;
        }
    }, [value]);
    console.log('render component');


    return (
        <div>
            <h2>useEffect Basics</h2>
            <h1>{value}</h1>
            <button type='button' onClick={() => setValue(value + 1)}>+</button>
        </div>
    );
}

export default FetchData;