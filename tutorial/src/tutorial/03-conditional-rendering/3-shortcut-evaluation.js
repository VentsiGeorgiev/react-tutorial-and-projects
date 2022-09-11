import { useState } from 'react';

function ShortCircuit() {

    const [text, setText] = useState('HTML');
    // const [text, setText] = useState('');
    const firstValue = text || 'JS';
    const secondValue = text && 'React';

    const [isDisplayed, setIsDisplayed] = useState(true);

    const handleChange = () => {
        setIsDisplayed((prevState) => !prevState);
    };

    return (
        <>
            <h2>Short Circuit</h2>
            <h3>|| and &&</h3>

            <div>
                {/* {if(true){console.log('error')}} - not working */}
                <h1>first value: {firstValue}</h1>
                <h1>second value: {secondValue}</h1>
            </div>
            <hr />
            <div>
                <h1>{text || 'Learn more JS'}</h1>
                <h1>{text && 'Learn more React'}</h1>
            </div>
            {text && <h1>Hey {text}!</h1>}
            <hr />
            {isDisplayed ? (<p>Learn every day</p>) : (<p>Take a rest</p>)}
            <button type="button" onClick={() => setIsDisplayed((prevState) => !prevState)} >change</button>
            <button type="button" onClick={handleChange} >change2</button>
        </>

    );
}

export default ShortCircuit;