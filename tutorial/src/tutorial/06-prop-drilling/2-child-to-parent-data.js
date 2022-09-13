import { useState } from 'react';

const Child = ({ increment }) => {
    return (
        <div>
            <button onClick={() => increment(100)}>+</button>
        </div>
    );
};


function Parent() {

    const [count, setCount] = useState(0);

    const increment = (value) => {
        setCount((prevState) => prevState + value);
    };

    return (
        <div>
            <h2>Parent</h2>
            <h2>Count: {count}</h2>
            <Child increment={increment} />
        </div>
    );
}

export default Parent;

// https://bobbyhadz.com/blog/react-pass-data-from-child-to-parent
