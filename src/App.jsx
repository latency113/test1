import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Course from './pages/Course';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/course' element={<Course/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App