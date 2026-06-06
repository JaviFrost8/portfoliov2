import marea from '@/public/marea-alta.webp';
import collector from '@/public/collector.webp';
import { StaticImageData } from 'next/image';
import rafaello from '@/public/rafaello.webp';
import vicio from '@/public/vicio.png';

interface PropsProjects {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: StaticImageData;
  caracteristicas: string[];
  demo?: string;
  codigo: string;
}

export const projects: PropsProjects[] = [
  {
    id: 1,
    nombre: 'Marea alta',
    descripcion:
      'Desarrollo de una web moderna para restaurante enfocada en mejorar la presencia online, facilitar reservas y ofrecer una experiencia visual atractiva tanto en móvil como en escritorio.',
    imagen: marea,
    caracteristicas: [
      'Diseño responsive',
      'Sistema de reservas',
      'Optimización SEO',
    ],
    demo: 'https://marea-alta-orpin.vercel.app/',
    codigo: 'https://github.com/JaviFrost8/marea-alta',
  },
  {
    id: 2,
    nombre: 'The Collector',
    descripcion:
      'Aplicación web para gestionar colecciones personales de películas. Cada usuario puede crear su propia biblioteca, guardar títulos, organizarlos y acceder a sus datos desde cualquier dispositivo gracias a Firebase.',
    imagen: collector,
    caracteristicas: [
      'Firebase',
      'Autenticación de usuarios',
      'Base de datos en tiempo real',
    ],
    demo: 'https://thecollectorv2.vercel.app/',
    codigo: 'https://github.com/JaviFrost8/theCollectorV2',
  },
  {
    id: 3,
    nombre: 'Vicio',
    descripcion:
      'Aplicación interactiva para concienciar sobre los efectos del consumo de drogas. Mediante decisiones y distintos escenarios, el usuario experimenta cómo las adicciones afectan a la salud, las relaciones personales y la calidad de vida, mostrando su impacto progresivo de forma visual y educativa.',
    imagen: vicio,
    caracteristicas: ['Diseño Responsive', 'Estado global', 'React Router'],
    demo: 'https://vicioapp-z9b8.vercel.app/',
    codigo: 'https://github.com/JaviFrost8/vicio',
  },
  {
    id: 4,
    nombre: 'Rafaello3D',
    descripcion:
      'Sitio web desarrollado para una empresa especializada en impresión 3D y fabricación personalizada. El proyecto está enfocado en mostrar sus servicios, trabajos realizados y facilitar el contacto con potenciales clientes mediante una experiencia moderna y responsive.',
    imagen: rafaello,
    caracteristicas: [
      'Galería de imagenes',
      'Formulario de contacto',
      'Optimización SEO',
    ],
    demo: 'https://rafaello3d.es/',
    codigo: 'https://github.com/JaviFrost8/rafaello3d',
  },
];
