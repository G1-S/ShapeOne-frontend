import React from 'react'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Services from './components/services/Services'   
import SobreNos from './components/sobrenos/SobreNos'    
import Footer from './components/footer/Footer' 


function App() {
    return (
      <>
        <Navbar/>
        <Home/>
        <Services/>
        <SobreNos/>
        <Footer/>
      </>
    );
}

export default App

