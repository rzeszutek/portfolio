import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Service from './Service';
import Project from './Project';
import Contact from './Contact';
import ToTopButton from './ToTopButton';

function App() {
  return (
    <div className="App">
       <Home />
       <About />
       <Service />
       <Contact />
       <ToTopButton />
    </div>
  );
}

export default App;
