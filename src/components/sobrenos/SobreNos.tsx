const SobreNos = () => {
  return (
    <section className="flex items-center justify-center min-w-screen">

      <div className="flex flex-col max-w-6xl items-center text-center my-36">
        <img src="/src/assets/about-us-svgrepo-com.svg" alt="Sobre Nós" className="w-20 h-20" />


        <h2 id="sobrenos" className=" text-xl font-bold text-gray-800 mb-6">
          Sobre Nós
        </h2>

        <div className="text-left text-lg text-gray-700 leading-relaxed mt-6">
          <p>
            Nosso site fitness nasceu para tornar a vida saudável acessível a todos.
            Acreditamos que a mudança começa pelo movimento, e nosso objetivo é
            fornecer treinos práticos e acessíveis para qualquer pessoa, em qualquer lugar.
          </p>

          <p>
            Não importa se você está começando ou já tem experiência: aqui, você encontra
            motivação e suporte para evoluir e alcançar seus objetivos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SobreNos;
