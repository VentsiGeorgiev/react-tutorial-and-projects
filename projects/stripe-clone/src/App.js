import Hero from './components/Hero/Hero';
import MobileMenu from './components/MobileMenu/MobileMenu';
import Navbar from './components/Navbar/Navbar';
import Submenu from './components/Submenu/Submenu';

function App() {
  return (
    <>
      <Navbar />
      <MobileMenu />
      <Hero />
      <Submenu />
    </>
  );
}

export default App;
