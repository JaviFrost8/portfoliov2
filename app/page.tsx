import { Acerca } from './components/Acerca';
import { Inicio } from './components/Inicio';
import { Navbar } from './components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen items-center justify-center">
        <Inicio />
        <Acerca />
        <section
          id="proyectos"
          className="flex min-h-screen items-center justify-center"
        >
          <h2>Proyectos</h2>
        </section>
        <section
          id="contacto"
          className="flex min-h-screen items-center justify-center"
        >
          <h2>Contacto</h2>
        </section>
      </main>
    </>
  );
}
