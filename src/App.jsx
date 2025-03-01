import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {  Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Books from './pages/Books'
import BookDetail from './pages/BookDetail'
import PrivateRoute from './components/PrivateRoute'

function App() {
  
  return(
    
      <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/books" element={<PrivateRoute><Books/></PrivateRoute>}/>
          <Route path="/books/:id" element={<PrivateRoute><BookDetail/></PrivateRoute>}/>


        </Routes>
      </>
    
  );
};

export default App
