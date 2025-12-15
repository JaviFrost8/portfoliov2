import Image from 'next/image';
import Link from 'next/link';

export const Inicio = () => {
  return (
    <section
      id="inicio"
      className="flex flex-col min-h-screen items-center justify-center w-full bg-[#F6F7F9] px-6 md:px-20"
    >
      <div className="w-48 h-48 overflow-hidden rounded-full border-[6px] border-white">
        <Image
          src="/yo.jpg"
          alt="foto de perfil"
          width="160"
          height="160"
          className="object-cover object-[50%_20%] w-full h-full"
        />
      </div>

      <h1 className="py-6 font-montserrat text-5xl md:text-7xl text-center">
        Hola, soy{' '}
        <span className="font-dm-sans bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Javier González
        </span>
      </h1>

      <p className="font-montserrat mt-2 text-xl md:text-3xl text-gray-600 text-center">
        Desarrollador frontend enfocado en React
      </p>

      <div className="flex sm:flex-row md:flex-row gap-6 md:gap-10 mt-6 md:mt-10 font-montserrat">
        <a href="#proyectos">
          <button className="px-4 py-2 md:px-6 md:py-4 bg-[#667EEA] text-white rounded-4xl cursor-pointer hover:bg-[#667EEA]/80 hover:shadow-lg transition-all duration-300">
            Ver proyectos
          </button>
        </a>
        <Link
          href="/archivos/José Javier Gonzalez - curriculum-dev.pdf"
          download
        >
          <button className="px-4 py-2 md:px-6 md:py-4 rounded-4xl cursor-pointer border-2 border-[#ccc] hover:border-[#667EEA] hover:text-[#667EEA] transition-all duration-300">
            Descargar CV
          </button>
        </Link>
      </div>
    </section>
  );
};
