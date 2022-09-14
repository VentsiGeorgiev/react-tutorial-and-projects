import Questions from './Questions';
import { data } from './data';

function App() {
  return (
    <main>
      <section className='q-a'>
        <h1 className='title'>Thinking in React</h1>
        {data.map((qa, index) => {
          return <Questions key={index} qa={qa} />;
        })}
      </section>
    </main>
  );
}

export default App;
