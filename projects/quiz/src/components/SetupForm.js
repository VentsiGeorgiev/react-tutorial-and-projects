import { useGlobalContext } from '../context';

function SetupForm() {
    const { message } = useGlobalContext();
    return (
        <div>
            SetupForm
            <p>{message}</p>
        </div>
    );
}

export default SetupForm;