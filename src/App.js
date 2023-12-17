import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Testimonials from './components/Testimonials';
import CareersPage from './components/Careers';
import Terms from './components/Terms';
import Aboutus from './components/Aboutus';
import Contact from './components/Contact';
import Sponsor from './components/Sponsor';

function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products/>} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/Testimonials' element={<Testimonials />} />
          <Route path='/Aboutus' element={<Aboutus/>} />
          <Route path='/Contact' element={<Contact/>} />
          
          <Route path='/Careers' element={<CareersPage />} />
          <Route path='/Terms' element={<Terms />} />
          <Route path='/Sponsor' element={<Sponsor />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
