import { useState, useEffect } from "react";

function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calcula a cor com base na posição de rolagem
  const calculateBgColor = () => {
    const maxScroll = 300; // Altura após a qual a cor será totalmente cinza
    const scrollFactor = Math.min(scrollPosition / maxScroll, 1);
    const colorValue = Math.floor(255 - scrollFactor * 128); // de 255 (branco) a 127 (cinza claro)
    return `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-10 transition-colors duration-300 h-16"
        style={{ backgroundColor: calculateBgColor() }}
      >
        <div className="flex justify-end space-x-6 py-4 px-4">
          <ul className="flex gap-6 text-black cursor-pointer font-bold justify-center mt-1.5">
            <li className="hover:text-orange-500">
              <a href="#servicos" className="transition duration-300">SERVIÇOS</a>
            </li>
            <li className="hover:text-orange-500">
              <a href="#sobrenos">SOBRE NÓS</a>
            </li>
          </ul>
          <div className="ml-8 flex items-center space-x-0">
            <button className="bg-gray-300 text-black hover:bg-orange-500 rounded-l-full px-4 py-1 border-2 border-black font-bold">
              Criar conta
            </button>
            <button className="bg-black text-white hover:bg-orange-500 hover:text-black rounded-r-full px-8 py-1 border-2 border-black font-bold">
              Entrar
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
