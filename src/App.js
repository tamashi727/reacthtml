
import logo from './logo.svg';
import "./App.css";
import Header from './app/Header';
import Home from './app/Home';
import About from './app/About';
import Contact from './app/Contact';
import {BrowserRouter as Router,Routes,Route,useNavigate} from 'react-router-dom';

function App() {
  return (
    <Router>
    <Header/>
   <div class name="container">
    
    <h1>hello world</h1>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/about' element={<About />} />
      <Route exact path='/contact' element={<Contact />} />
    </Routes>
    
   </div>
   </Router>
      
  );
}

export default App;
