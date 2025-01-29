const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-200 m-8">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
              ShapeOne
            </span>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">
                Veja mais projetos
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/G1-S"
                    className="hover:underline"
                  >
                    Github - Grupo
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">
                Desenvolvedores
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li>
                  <a
                    href="https://github.com/dudavalmor"
                    className="hover:underline"
                  >
                    Eduarda Valmor
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/AugustoFO"
                    className="hover:underline"
                  >
                    Felix Augusto
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/lyncoln-campello"
                    className="hover:underline"
                  >
                    Lyncoln Campello
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/mozartCuman"
                    className="hover:underline"
                  >
                    Mozart Cuman
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/sandymachadoo"
                    className="hover:underline"
                  >
                    Sandy Machado
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="#" className="hover:underline">
              ShapeOne™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
