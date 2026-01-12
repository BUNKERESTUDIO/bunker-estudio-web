import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "BUNKER",
  lastName: "ESTUDIO",
  name: "BUNKER ESTUDIO",
  role: "Ingeniería de Sonido",
  avatar: "/images/avatar.jpg",
  email: "info.bunkerestudio@gmail.com",
  location: "Europe/Madrid", // 
  languages: ["Español", "Euskera"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Suscríbete a la newsletter</>,
  description: <>Novedades del Búnker</>,
};

const social: Social = [
  // Si el icono de youtube no sale, prueba cambiando "youtube" por "linkedin" temporalmente
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/yoursoundproductions/", // PON TU INSTA
    essential: true,
  },
  {
    name: "YouTube",
    icon: "youtube", 
    link: "https://www.youtube.com/@BUNKER_ESTUDIO", // PON TU CANAL NUEVO
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Inicio",
  title: `${person.name} | Ingeniería de Sonido`,
  description: `Estudio de grabación y mezcla especializado en sonido con autoridad.`,
  headline: <>Del subsuelo a la alta fidelidad</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">BUNKER</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Sonido con autoridad
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      Bunker Estudio nace para dar respuesta a sonidos que otros no saben tratar. 
      <br /> Perfección técnica sin perder la esencia cruda.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "El Búnker",
  title: `Sobre – ${person.name}`,
  description: `Conoce la filosofía de ${person.name}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Filosofía",
    description: (
      <>
        Sé lo que es la rabia de grabar un disco y que suene a plástico. 
        En el Búnker, utilizamos herramientas de élite para que la potencia 
        que traes se traduzca en un sonido sólido y con una pegada innegociable.
      </>
    ),
  },
  work: {
    display: true,
    title: "Servicios",
    experiences: [
      {
        company: "Grabación y Captura",
        timeframe: "Presencial",
        role: "Ingeniería crítica",
        achievements: [
          <>Uso de cadena de señal de alta gama (Neumann, Soundskulptor Clase A).</>,
          <>Enfoque en capturar la actitud real del artista.</>,
        ],
        images: [],
      },
      {
        company: "Mezcla y Mastering",
        timeframe: "Online / Presencial",
        role: "Post-producción",
        achievements: [
          <>Definición, fase y pegada profesional para tus pistas.</>,
          <>Tratamiento híbrido analógico/digital.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Criterio Técnico",
    institutions: [
      {
        name: "Eslabones de la cadena",
        description: <>Trabajo exclusivo con previos Clase A y microfonía de referencia.</>,
      },
      {
        name: "Actitud sobre el papel",
        description: <>La técnica al servicio de la fuerza del audio.</>,
      },
    ],
  },
  technical: {
    display: false,
    title: "Skills",
    skills: [],
  },
};

export const blog = {
    title: 'Últimas novedades del Búnker',
    description: 'Historias desde el subsuelo.',
    path: '/blog', // AÑADE ESTA LÍNEA AQUÍ
    posts: [
        {
            title: "Grabación de baterías en el Búnker",
            description: "Cómo conseguimos ese sonido crudo y con autoridad en nuestras sesiones.",
            label: "Sesiones",
            path: "grabacion-baterias",
            images: []
        },
        {
            title: "Mezcla Analógica",
            description: "El proceso detrás de nuestro sonido característico.",
            label: "Procesos",
            path: "mezcla-analogica",
            images: []
        }
    ]
}

const work: Work = {
  path: "/work",
  label: "Sessions",
  title: `Portfolio – ${person.name}`,
  description: `Trabajos realizados en el Búnker`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Estudio",
  title: `El equipo – ${person.name}`,
  description: `Un vistazo al hardware del Búnker`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };

