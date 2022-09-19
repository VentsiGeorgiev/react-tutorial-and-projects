import { useGlobalContext } from '../context';

function Quiz() {
    const { isLoading, isStarted, questions, page, nextPage, checkAnswer, correct } = useGlobalContext();

    if (isLoading) {
        return <h3>Loading..</h3>;
    }

    if (isStarted) {

        const { question, incorrect_answers, correct_answer } = questions[page];

        const allAnswers = [...incorrect_answers, correct_answer];
        const suffledAnswers = allAnswers
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);


        return (
            <div className="section quiz-section">
                {isStarted && questions &&
                    <>
                        <h2 className='question-title'>{question}</h2>
                        <div className='answers'>
                            <p className='correct-answers'>Correct Answers:  {correct}/{page}</p>
                            {suffledAnswers.map((answer, index) => (
                                <button onClick={() => checkAnswer(correct_answer === answer)} className='btn-answer' key={index}>{answer}</button>
                            ))}
                        </div>
                        <div className='center'>
                            <button className='btn-next' onClick={nextPage}>Next</button>
                        </div>
                    </>
                }

            </div>
        );
    }




}

export default Quiz;