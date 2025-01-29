import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Services from './components/servicos/Servicos'
import SobreNos from './components/sobrenos/SobreNos'
import Footer from './components/footer/Footer'


function App() {
  return (
    <>
      <Navbar />
      <main className='w-full overflow-hidden'>
        <Home />
        <Services />
        <SobreNos />
        <Footer />
      </main>
    </>
  );
}

export default App

