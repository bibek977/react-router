import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from './components/Home'
// import About from './components/About'
import Header from './components/Header'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Feature, {Product, Products, ProductName, Dashboard} from './components/Feature'
// import { Product } from './components/Feature'
import Error from './components/Error'
import Search from './components/Search'
import Footer from './components/Footer';


export default function App() {
  return( 
  <>
  <BrowserRouter >
  <Header></Header>
  <Routes>
    <Route index path="/" element={<Home />} />
    <Route path="/feature" element={<Feature/>}>
      <Route path="product" element={<Product/>} />
      <Route path="products" element={<Products/>} />
      <Route path=":productName" element={<ProductName/>} />
      </Route>
    <Route path="/blog" element={<Blog/>} />
    <Route path="/search" element={<Search/>} />
    <Route path="/dashboard" element={<Dashboard />}/>
    <Route path="/footer" element={<Footer />}/>
    <Route path="/contact" element={<Contact name="bibek"/>}/>
    {/* <Route path="*" element={<Navigate replace to="/"/>}/> */}
    <Route path="*" element={<Error/>}></Route>

  </Routes>
  </BrowserRouter>
  </>
  )
}
