function Project({ name, category, image, demoLink, repoLink }) {
    return (
        <div className="project">
            <h3 className="project-title">{name}</h3>
            <img className="project-image" src={image} alt={name} />
            <div className="btn-wrapper">
                <ul>
                    <li>
                        <a
                            className="btn"
                            href={demoLink}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Live Demo
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a
                            className="btn"
                            href={repoLink}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Source Code
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Project;