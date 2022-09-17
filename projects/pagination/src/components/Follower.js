function User({ avatar_url, login, html_url }) {
    return (
        <div className="follower">
            <img className="follower-img" src={avatar_url} alt={login} />
            <div className="follower-info">
                <h3>{login}</h3>
                <a className="link" href={html_url} rel="noreferrer" target='_blank'>profile</a>
            </div>

        </div>
    );
}

export default User;