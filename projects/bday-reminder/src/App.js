import { useState } from 'react';
import { data } from './data';
import Person from './components/Person';

function App() {

  const [people, setPeople] = useState(data);

  const handleClick = () => {
    setPeople([]);
  };

  return (
    <section className='container'>
      <section className='wrapper'>
        {people.length > 1
          ? (<>
            <h3>{people.length} Birtdays today</h3>
            {people.map((person) => (
              <Person key={person.id} person={person} />
            ))}
            <button className='btn' type='button' onClick={handleClick}>Clear All</button> </>)
          : (<h4>No Birtdays today</h4>)
        }
      </section>
    </section>
  );
}

export default App;
