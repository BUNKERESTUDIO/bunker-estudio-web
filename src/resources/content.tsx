import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "BUNKER",
  lastName: "ESTUDIO",
  name: "BUNKER ESTUDIO",
  role: "Producción, Mezcla & Mastering", // Refleja mejor lo que haces con el U87 y MP573
  avatar: "/images/avatar.jpg",
  email: "info.bunkerestudio@gmail.com",
  location: "Europe/Madrid",
  languages: ["Español", "Euskera"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Suscríbete a la newsletter</>,
  description: <>Novedades del Búnker</>,
};

const social: Social = [
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/yoursoundproductions/",
    essential: true,
  },
  {
    name: "YouTube",
    icon: "youtube", 
    link: "https://www.youtube.com/@BUNKER_ESTUDIO",
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
  title: `${person.name} | Producción y Mezcla de Alto Voltaje`,
  description: `Ingeniería de sonido para bandas que no se conforman con lo estándar. Neumann U87, Previos Clase A y pegada absoluta.`,
  headline: <>Sonido con <span className="text-brand-medium">Autoridad</span></>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">BUNKER</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          PRODUCCIÓN & MEZCLA CRUDA
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      Bunker Estudio es la respuesta al audio que suena "a plástico". 
      <br /> Transformamos tu rabia en <span className="text-brand-medium">alta fidelidad</span> desde el subsuelo.
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
        Sé lo que es la rabia de grabar un disco y que suene a plástico. En el Búnker, no hacemos grabaciones estándar; forjamos sonido con autoridad. Utilizamos herramientas de élite como el Neumann U87 y previos Clase A para que tu potencia se traduzca en una pared de sonido sólida y real.
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
          <>Cadena de señal de alta gama: <span className="text-brand-medium">Pureza Clase A</span>.</>,
          <>Captura de la <span className="text-brand-medium">actitud real</span>. Si no transmite, no sirve.</>,
        ],
        images: [],
      },
      {
        company: "Mezcla y Mastering",
        timeframe: "Online / Presencial",
        role: "Post-producción",
        achievements: [
          <>Definición, fase y una <span className="text-brand-medium">pegada demoledora</span>.</>,
          <>Tratamiento híbrido para un color analógico con precisión digital.</>,
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
        description: <>No hay compromiso: previos Clase A y conversión <span className="text-brand-medium">Audient</span>.</>,
      },
      {
        name: "La visión del productor",
        description: <>La técnica es solo el medio para que tu música <span className="text-brand-medium">golpee con fuerza</span>.</>,
      },
    ],
  },
  technical: {
    display: false, // Lo mantenemos oculto si no quieres mostrar skills específicas aún
    title: "Skills",
    skills: [],
  },
};

const blog: Blog = {
    title: 'Últimas novedades del Búnker',
    description: 'Historias desde el subsuelo.',
    path: '/blog',
    label: 'Blog'
};

const work: Work = {
  path: "/work",
  label: "Trabajos",
  title: `Trabajos – ${person.name}`,
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
