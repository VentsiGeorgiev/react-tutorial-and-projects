function Photo({ urls: { regular }, alt_description }) {
    return (
        <div>
            <img className="photo" src={regular} alt={alt_description} />
        </div>
    );
}

export default Photo;