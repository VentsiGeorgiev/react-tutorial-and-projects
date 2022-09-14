import { useState } from 'react';
import { reviews } from './data';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';


function Review() {

    const [index, setIndex] = useState(0);
    const { name, image, job, text } = reviews[index];

    const checkNumber = (number) => {
        if (number > reviews.length - 1) {
            return 0;
        }
        if (number < 0) {
            return reviews.length - 1;
        }
        return number;
    };

    const nextPerson = () => {
        setIndex((index) => {
            index++;
            return checkNumber(index);
        });
    };

    const prevPerson = () => {
        setIndex((index) => {
            index--;
            return checkNumber(index);
        });
    };


    return (
        <section className='wrapper'>
            <h1 className='title'>Reviews</h1>
            <div className='underline'></div>
            <article className='reviews'>

                <div className='review'>
                    <img className='image' src={image} alt={name} />
                    <h3 className='name'>{name}</h3>
                    <p className='positon'>{job}</p>
                    <p className='text'>{text}</p>
                </div>
                <div className='buttons'>
                    <FaAngleLeft onClick={prevPerson} className='icon' />
                    <FaAngleRight onClick={nextPerson} className='icon' />
                </div>


            </article>
        </section>
    );
}

export default Review;