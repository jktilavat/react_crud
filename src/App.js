import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Navbar from './components/pages/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>s
      <h1>namste</h1>
      <Home/>
      <Contact/>
      <About/>
    </div>
  );
}

export default App;
