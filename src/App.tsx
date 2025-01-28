import React from 'react'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Services from './components/services/Services'        


function App() {
    return (
      <>
        <Navbar/>
        <Home />
        <Services />
      </>
    );
}

export default App

