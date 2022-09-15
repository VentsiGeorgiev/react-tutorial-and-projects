import { useEffect, useState } from 'react';
import { reviews } from './data';
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function App() {
    const [people, setPeople] = useState(reviews);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = people.length;

        if (index < 0) {
            setIndex(lastIndex - 1);
        }
        if (index >= lastIndex) {
            setIndex(0);
        }

    }, [index, people]);



    return (
        <section className='section'>
            <section className='section-center'>
                {people.map((person, personIndex) => {
                    const { id, name, image, job, text } = person;

                    let position = 'nextSlide';

                    if (personIndex === index) {
                        position = 'active';
                    }

                    if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
                        position = 'lastSlide';
                    }

                    return <article className={position} key={id}>
                        <img src={image} alt={name} className='person-img' />
                        <h4 className='name'>{name}</h4>
                        <p className='job'>{job}</p>
                        <p className='text'>{text}</p>
                    </article>;
                })}

                <button className='prev' onClick={() => setIndex(index - 1)}><FaChevronLeft /></button>
                <button className='next' onClick={() => setIndex(index + 1)}><FaChevronRight /></button>
            </section>




        </section>
    );
}

export default App;
