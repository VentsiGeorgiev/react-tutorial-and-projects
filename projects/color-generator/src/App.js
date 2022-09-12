import { useState } from 'react';

import Values from 'values.js';
import ColorItem from './components/ColorItem';

const HEX_REGEX = new RegExp(/#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/);

function App() {
  const [color, setColor] = useState('');
  const [list, setList] = useState(new Values('#42d1f5').all(10));
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    try {

      if (HEX_REGEX.test(color)) {
        let colors = new Values(color).all(10);
        setList(colors);
        setError(false);
        setMessage('');
      } else {
        setList([]);
        setError(true);
        setMessage('Invalid HEX code. Example of correct HEX code is #42d1f5');
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className='container'>
        <h1 className='title'>Color Generator</h1>
        <form className='form' onSubmit={submitHandler}>
          <input
            type="text"
            name="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#42d1f5'
            className={error ? 'form-input err-input' : 'form-input'}
          />
          <button className='btn'>Submit</button>
        </form>
        {error && <p className='err-msg'>{message}</p>}
      </section>
      <section className='color-wrapper'>
        {list.map((color, index) => (
          <ColorItem key={index} color={color} index={index} />
        ))}
      </section>
    </>

  );
}

export default App;
