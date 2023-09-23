
import './App.css';
import About from './component/AboutComponent/About';
import Heder from './component/HederComponent/Heder';
import './madia.css'
import HomePag from './pags/HomePag/HomePag';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ServisPag from './pags/ServisPag/ServisPag';
import Blog from './component/BlogComponent/Blog';
import Contact from './component/ContactComponent/Contact';
import Footer from './component/FooterComponent/Footer';


function App() {
  return (
    <div className="App">
      <Router>
      <Heder/>
      <Routes>
        <Route  path='/' element={<HomePag />} />
      </Routes>
      <Routes>
        <Route  path='/about'  element= { <About />} />
      </Routes>
      <Routes>
        <Route  path='/servis'  element= {<ServisPag/>} />
      </Routes>
      <Routes>
         <Route  path='/blog'  element={<Blog/>} />
      </Routes>
      <Routes>
        <Route   path='/contact'  element={<Contact />} />
      </Routes>
      <Footer/>

      </Router>
     
    
    </div>
  );
}

export default App;
