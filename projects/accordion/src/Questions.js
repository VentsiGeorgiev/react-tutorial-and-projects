import { useState } from 'react';

function Questions({ qa }) {
    const [showAnswer, setShowAnswer] = useState(false);

    const handleClick = () => {
        setShowAnswer((prevState) => !prevState);
    };

    const { question, answer } = qa;
    return (
        <div className='card'>
            <h3 className="question">{question}</h3>
            {showAnswer && <p className='answer'>{answer}</p>}
            {showAnswer ?
                <button onClick={handleClick} className='btn'>-</button>
                :
                <button onClick={handleClick} className='btn'>+</button>}
        </div>
    );
}

export default Questions;