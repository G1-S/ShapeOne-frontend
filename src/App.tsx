import React from 'react'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Services from './components/services/Services'   
import SobreNos from './components/sobrenos/Sobrenos'     


function App() {
    return (
      <>
        <Navbar/>
        <Home />
        <Services />
        <SobreNos />
      </>
    );
}

export default App

