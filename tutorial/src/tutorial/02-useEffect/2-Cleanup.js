import { useEffect, useState } from 'react';
// cleanup function

function UseEffectCleanup() {
    const [size, setSize] = useState(window.innerWidth);

    const checkSize = () => {
        setSize(window.innerWidth);
    };

    // Memory leak
    // useEffect(() => {
    //     window.addEventListener('resize', checkSize);
    // });

    useEffect(() => {
        console.log('useEffect');
        window.addEventListener('resize', checkSize);
        return () => {
            console.log('cleanup');
            window.removeEventListener('resize', checkSize);
        };
    });
    // --===---
    //  # VS
    // --===---
    useEffect(() => {
        console.log('useEffect');
        window.addEventListener('resize', checkSize);
        // return () => {
        //     console.log('cleanup');
        //     window.removeEventListener('resize', checkSize);
        // };
    }, []);

    console.log('render');

    return (
        <div>
            <h2>useEffect CleanUp</h2>

            <h3>Window</h3>
            <h2>{size} px</h2>
        </div>
    );
}

export default UseEffectCleanup;