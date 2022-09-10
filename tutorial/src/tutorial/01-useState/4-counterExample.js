import { useState } from 'react';

function CounterExample() {
    // Simple counter

    const [value, setValue] = useState(0);

    const incrementHadler = () => {
        setValue((prevState) => prevState + 1);
    };

    const resetHadler = () => {
        setValue(0);
    };

    const decrementHadler = () => {
        setValue((prevState) => prevState - 1);
    };

    return (
        <div>
            <h3>Counter</h3>
            <h1>{value}</h1>
            <button type="button" onClick={incrementHadler}>+</button>
            <button type="button" onClick={resetHadler}>reset</button>
            <button type="button" onClick={decrementHadler}>-</button>
        </div>
    );

}

export default CounterExample;