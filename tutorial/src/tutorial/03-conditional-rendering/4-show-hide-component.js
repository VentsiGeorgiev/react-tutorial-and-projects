import { useEffect, useState } from 'react';

function ShowHideComponent() {
    const [show, setShow] = useState(false);
    return (
        <>

            <div>
                <h1>Show/Hide</h1>
            </div>

            <section>
                <button onClick={() => setShow(!show)} >Show/Hide</button>
                {show && <Item />}
            </section>
        </>
    );
}

const Item = () => {
    const [size, setSize] = useState(window.innerWidth);

    const checkSize = () => {
        setSize(window.innerWidth);
    };

    // Every time we show/hide the component we run, so
    // every time we add event listener, withut removing it after that
    // useEffect(() => {
    //     window.addEventListener('resize', checkSize);
    // }, []);

    // Even if we have dependency array we need a clean up function
    useEffect(() => {
        window.addEventListener('resize', checkSize);
        return () => {
            window.removeEventListener('resize', checkSize);
        };
    }, []);


    return (<div>
        <h1>Window</h1>
        <h2>size: {size} px</h2>
    </div>);
};

export default ShowHideComponent;