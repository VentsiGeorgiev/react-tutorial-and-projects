function Person({ person }) {
    const { image, name, age } = person;
    return (
        <div className='cart'>
            <img className='image' src={image} alt={name} />
            <div className='info'>
                <h4 className='name'>{name}</h4>
                <p className='age'>Age: {age}</p>
            </div>
        </div>
    );
}

export default Person;