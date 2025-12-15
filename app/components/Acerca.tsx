import Image from 'next/image';

export const Acerca = () => {
  return (
    <section
      id="acerca"
      className="flex w-full overflow-hidden py-20 min-h-[80vh] items-center justify-center"
    >
      <div className="flex flex-col xl:flex-row px-4 xl:px-48">
        <div className="flex flex-col justify-center xl:w-1/2 md:p-10">
          <h1 className="font-dm-sans text-2xl md:text-4xl xl:text-7xl lg:mb-8 pb-6">
            Acerca de mí
          </h1>
          <p className="font-montserrat mb-6 text-gray-600 md:text-2xl">
            Soy un desarrollador frontend apasionado por crear interfaces
            limpias, funcionales y bien estructuradas. Empecé en la programación
            por curiosidad y con el tiempo se convirtió en una motivación diaria
            por seguir aprendiendo.
          </p>
          <p className="font-montserrat text-gray-600 md:text-2xl">
            He construido mi formación por mi cuenta mediante proyectos
            personales, documentación oficial y buenas prácticas del ecosistema
            JavaScript. Disfruto resolver problemas, mejorar la experiencia del
            usuario y seguir creciendo cada día dentro del mundo del desarrollo
            web.
          </p>
          <div className="flex justify-center items-center my-6 gap-4 md:mt-10">
            <div className="flex flex-col justify-center items-center p-4 lg:py-10 bg-[#F6F7F9] rounded-2xl w-1/2">
              <p className="font-montserrat md:text-xl">Aprendizaje</p>
              <p className="font-montserrat text-2xl md:text-3xl text-indigo-500">
                constante
              </p>
            </div>
            <div className="flex flex-col justify-center items-center p-4 lg:py-10 bg-[#F6F7F9] rounded-2xl w-1/2">
              <p className="font-montserrat text-2xl md:text-3xl text-indigo-500">
                100%
              </p>
              <p className="font-montserrat md:text-xl">Autodidacta</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center xl:w-1/2">
          <Image
            src="/escritorio.jpg"
            alt="escritorio"
            width="600"
            height="600"
            className="rounded-2xl w-full max-h-[350px] md:max-h-[450px] lg:max-h-[600px] md:object-top object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};
