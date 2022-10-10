import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home/Home.jsx';
import Footer from './component/Footer/Footer.jsx';
import Contact from './component/Contact/Contact.jsx';
import Project from './component/Project/Project.jsx';
import About from './component/About/About.jsx';
import {useDispatch} from 'react-redux';
import {getPosts} from './actions/posts';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    
    <div className="App">
    
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    
      <Footer />
    </div>
  );
}

export default App;
