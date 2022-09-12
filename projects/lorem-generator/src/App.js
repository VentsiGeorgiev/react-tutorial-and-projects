import { useState } from 'react';
import data from './data';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    let amount = Number(count);
    if (amount < 0) {
      amount = 1;
    }
    if (amount > 10) {
      amount = 10;
    }
    setText(data.slice(0, amount));
  };


  return (
    <section className="container">
      <section>
        <h1 className="title">Lorem Ipsum Generator</h1>
        <form onSubmit={submitHandler}>
          <input
            type="number"
            name="text"
            id="text"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            placeholder="Add Paragraph Count"
            className="input"
          />
          <button className="btn">Generate</button>
        </form>
      </section>
      <section className="paragraphs">
        {text && text.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>
    </section>

  );
}

export default App;
