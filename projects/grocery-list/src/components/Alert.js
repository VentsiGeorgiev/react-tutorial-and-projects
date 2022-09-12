import { useEffect } from 'react';

function Alert({ msg, type, setAlert }) {

    useEffect(() => {

        setTimeout(() => {
            setAlert({
                show: false,
                msg: '',
                type: '',
            });
        }, 3000);

    }, [setAlert]);

    return (
        <p className={`alert alert-${type}`}>{msg}</p>
    );
}

export default Alert;