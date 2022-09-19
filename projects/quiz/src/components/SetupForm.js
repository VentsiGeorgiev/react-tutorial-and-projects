import { useGlobalContext } from '../context';

function SetupForm() {
    const { formData, handleChange, handleSubmit, isStarted } = useGlobalContext();
    const { questionCount, category, difficulty } = formData;
    return (
        <section className='section'>
            {isStarted === false &&
                <form onSubmit={handleSubmit} className='setup-form'>
                    <h2 className='form-title'>Setup Quiz</h2>
                    <div className='form-control'>
                        <label htmlFor='questionCount'>Number of Questions </label>
                        <input
                            type="number"
                            min={1}
                            max={50}
                            name="questionCount"
                            id="questionCount"
                            className='form-input'
                            value={questionCount}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-control'>
                        <label htmlFor='category'>Category</label>
                        <select
                            type="text"
                            name="category"
                            id="category"
                            className='form-input'
                            value={category}
                            onChange={handleChange}
                        >
                            <option value="sports">Sports</option>
                            <option value="history">History</option>
                            <option value="mythology">Mythology</option>
                        </select>
                    </div>
                    <div className='form-control'>
                        <label htmlFor='category'>Select Difficulty</label>
                        <select
                            type="text"
                            name="difficulty"
                            id="difficulty"
                            className='form-input'
                            value={difficulty}
                            onChange={handleChange}
                        >
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                    <div className='form-control'>
                        <button className='btn'>Start</button>
                    </div>
                </form>
            }
        </section>
    );
}

export default SetupForm;