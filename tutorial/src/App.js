// useState
import StringExample from './tutorial/01-useState/1-stringExample';
import ArrayExample from './tutorial/01-useState/2-arrayExample';
import ObjectExample from './tutorial/01-useState/3-objectExample';
import CounterExample from './tutorial/01-useState/4-counterExample';
// useEffect
import UseEffectBasics from './tutorial/02-useEffect/1-Basics';
import UseEffectCleanup from './tutorial/02-useEffect/2-Cleanup';
import FetchData from './tutorial/02-useEffect/3-FetchData';


function App() {
  return (
    <section className='container'>
      <h1>Tutorial</h1>

      <section className='example'>
        <h2>Examples</h2>
      </section>

      <section className='tutorial'>
        {/* <StringExample /> 
        <ArrayExample /> 
        <ObjectExample />
        <CounterExample />
        <UseEffectBasics />
        <UseEffectCleanup />*/}
        <FetchData />
      </section>
    </section>
  );
}

export default App;
