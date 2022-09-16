import { Routes, Route, } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Cocktail from './pages/Cocktail';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cocktail/:id' element={<Cocktail />} />
      </Routes>
    </>
  );
}

export default App;
