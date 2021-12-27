import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ToTopButton from './components/ToTopButton';

function App() {
  return (
    <div className="App">
       <Home />
       <About />
       <Service />
       <Contact />
       <Footer />
       <ToTopButton />
    </div>
  );
}

export default App;
