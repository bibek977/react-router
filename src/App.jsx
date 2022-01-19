import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Feature from './components/Feature'


export default function App() {
  return( 
  <>
  <Header></Header>
  <Routes>
    <Route index path="/" element={<Home />} />
    <Route path="/feature" element={<Feature/>}/>
    <Route path="/about" element={<About />}/>
    <Route path="/blog" element={<Blog/>} />
    <Route path="/contact" element={<Contact/>}/>
  </Routes>
  </>
  )
}
