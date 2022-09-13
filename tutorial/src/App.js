// useState
import StringExample from './tutorial/01-useState/1-stringExample';
import ArrayExample from './tutorial/01-useState/2-arrayExample';
import ObjectExample from './tutorial/01-useState/3-objectExample';
import CounterExample from './tutorial/01-useState/4-counterExample';
// useEffect
import UseEffectBasics from './tutorial/02-useEffect/1-Basics';
import UseEffectCleanup from './tutorial/02-useEffect/2-Cleanup';
import FetchData from './tutorial/02-useEffect/3-FetchData';
// Conditional Rendering
import MultipleReturns from './tutorial/03-conditional-rendering/1-multiple-returns';
import MultipleReturnsFetch from './tutorial/03-conditional-rendering/2-multiple-returns-fetch';
import ShortCircuit from './tutorial/03-conditional-rendering/3-shortcut-evaluation';
import ShowHideComponent from './tutorial/03-conditional-rendering/4-show-hide-component';
// Forms
import ControlledInputs from './tutorial/04-forms/1-controlled-inputs';
import MultipleInputs from './tutorial/04-forms/2-multiple-inputs';
import UseReducerExample from './tutorial/05-useReducer/1-use-reducer-setup';
// useReducer

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
        <UseEffectCleanup />
        <FetchData />
        <MultipleReturns />
        <MultipleReturnsFetch />
        <ShortCircuit />
        <ShowHideComponent />
        <FetchData />
        <ControlledInputs />
        <MultipleInputs />*/}
        <UseReducerExample />
      </section>
    </section>
  );
}

export default App;
