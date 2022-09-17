import useFetch from '../hooks/useFetch';
import paginate from '../utils/paginate';
import { useEffect, useState } from 'react';
import User from './Follower';
import Spinner from './Spinner';
const url = 'https://api.github.com/users/markerikson/followers?per_page=100';

function UserList() {

    const { data, isLoading } = useFetch(url);
    const [followers, setFollowers] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        if (isLoading) {
            return;
        }

        setFollowers(paginate(data)[page]);
    }, [data, isLoading, page]);

    if (isLoading) {
        return <Spinner />;
    }

    const handleNext = () => {

        setPage((prevState) => {
            let nextPage = prevState + 1;
            if (nextPage >= paginate(data).length) {
                return 0;
            }
            return nextPage;
        });
    };

    const handlePrev = () => {
        setPage((prevState) => {
            let nextPage = prevState - 1;
            if (nextPage < 0) {
                return paginate(data).length - 1;
            }
            return nextPage;
        });
    };



    return (
        <section className='section'>
            <h2 className='followers-title'>Followers</h2>
            <div className='followers'>

                {followers && followers.map((user) => (
                    <User key={user.id} {...user} />
                ))}

            </div>
            <div className='buttons'>
                <button
                    onClick={handlePrev}
                    className='btn btn-prev'
                >
                    Prev
                </button>
                {!isLoading && paginate(data).map((_, index) => {
                    return <button
                        className={`btn ${page === index ? 'active' : ''}`}
                        key={index}
                        onClick={() => setPage(index)}
                    >
                        {index}
                    </button>;
                })}
                <button
                    onClick={handleNext}
                    className='btn btn-next'
                >
                    Next
                </button>
            </div>
        </section>
    );
}

export default UserList;