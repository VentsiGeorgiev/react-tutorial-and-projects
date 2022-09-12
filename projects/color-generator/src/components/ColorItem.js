import { useEffect, useState } from 'react';
import { rgbToHex } from '../utils/rgbToHex';

function ColorItem({ color, index }) {
    const [alert, setAlert] = useState(false);
    const { rgb } = color;
    const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);


    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, [alert]);

    return (
        <div
            onClick={() => {
                setAlert(true);
                navigator.clipboard.writeText(hex);
            }}
            className='color'
            style={{ backgroundColor: `${hex}` }}
        >
            <p className={index > 10 ? 'light-color' : ''}>{hex}</p>
            {alert && <p className={index > 10 ? 'light-color' : 'copy'}>Copy To Clipboard</p>}
        </div >
    );
}

export default ColorItem;