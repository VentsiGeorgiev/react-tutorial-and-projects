import { useState } from 'react';

function StringExample() {
    // Change string

    const [text, setText] = useState('Server Error');

    const clickHandler = () => {
        if (text === 'Server Error') {
            setText('Client Error');
        } else {
            setText('Server Error');
        }
    };

    return (
        <div>
            <h4>{text}</h4>
            <button type="button" onClick={clickHandler}>Change Error</button>
        </div>
    );

}

export default StringExample;