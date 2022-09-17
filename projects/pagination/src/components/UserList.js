import useFetch from '../hooks/useFetch';
import User from './User';

const url = 'https://api.github.com/users/markerikson/followers?per_page=100';

function UserList() {

    const { data, isLoading } = useFetch(url);
    console.log(data);

    if (isLoading) {
        return <h3>Loading...</h3>;
    }

    return (
        <>
            <div>UserList</div>
            <User />
        </>
    );
}

export default UserList;