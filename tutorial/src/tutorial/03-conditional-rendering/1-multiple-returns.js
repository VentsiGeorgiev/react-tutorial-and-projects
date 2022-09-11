import { useState } from 'react';

function MultipleReturns() {
    const [loading, setLoading] = useState(true);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <h2>MultipleReturns</h2>
    );
}

export default MultipleReturns;