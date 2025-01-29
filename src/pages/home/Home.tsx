function Home() {
  return (
    <div
      className="relative w-full h-screen flex flex-col justify-center text-white"
      style={{
        backgroundImage: "url('/fotohome.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
        height: "100vh"
      }}
    >
      <div className="relative max-w-4xl px-6 ml-64 grid justify-items-start">
        <h1 className="text-4xl md:text-5xl font-bold hover:text-orange-500 transition">
          We are ShapeOne!
        </h1>
        <p className="mt-4 pb-4 text-lg text-left">
          <p>  Nós somos a Shape One, somos focados em acessibilidade e crescimento pessoal através de exercícios. Nosso objetivo é capacitar indivíduos de todas as idades e habilidades a alcançarem o seu potencial máximo, promovendo um estilo de vida saudável e equilibrado.</p>
        </p>
        <button className="mt-6 px-10 py-2 bg-orange-500/15 border-2 border-orange-500 hover:bg-orange-500 text-orange-500 hover:text-black font-bold rounded-full shadow-lg transition">
          Veja nossos treinos
        </button>
      </div>
    </div>
  );
}

export default Home;
