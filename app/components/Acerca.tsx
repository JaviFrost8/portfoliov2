import Image from 'next/image';
import React from 'react';

export const Acerca = () => {
  return (
    <section
      id="acerca"
      className="flex py-20 min-h-[80vh] items-center justify-center"
    >
      <div className="flex flex-col items-center lg:flex-row md:mt-20 gap-10 px-10 md:px-20 lg:px-56">
        <div className="flex flex-col justify-center lg:w-1/2">
          <h1 className="font-dm-sans mb-8 text-4xl md:text-7xl">
            Acerca de mí
          </h1>
          <p className="font-montserrat leading-relaxed md:text-xl text-gray-700 mb-8">
            Soy un desarrollador frontend apasionado por crear interfaces
            limpias, funcionales y bien estructuradas. Empecé en la programación
            por curiosidad y con el tiempo se convirtió en una motivación diaria
            por seguir aprendiendo.
          </p>
          <p className="font-montserrat leading-relaxed md:text-xl text-gray-700">
            He construido mi formación por mi cuenta mediante proyectos
            personales, documentación oficial y buenas prácticas del ecosistema
            JavaScript. Disfruto resolver problemas, mejorar la experiencia del
            usuario y seguir creciendo cada día dentro del mundo del desarrollo
            web.
          </p>
          <div className="flex w-full gap-6 md:gap-14 mt-10">
            <div className="flex flex-col items-center justify-center w-1/2 p-6 md:p-10 bg-[#F6F7F9] rounded-2xl">
              <p className="font-montserrat text-xl">Aprendizaje</p>
              <p className="font-montserrat text-3xl  text-indigo-500">
                constante
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-1/2 p-6 md:p-10 bg-[#F6F7F9] rounded-2xl">
              <p className="font-montserrat text-3xl text-indigo-500">100%</p>
              <p className="font-montserrat text-xl">Autodidacta</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:w-1/2">
          <Image
            src="/escritorio.jpg"
            alt="escritorio"
            width="600"
            height="600"
            className="rounded-2xl w-full max-h-[350px] md:max-h-[600px] object-cover shadow-2xl "
          />
        </div>
      </div>
    </section>
  );
};
