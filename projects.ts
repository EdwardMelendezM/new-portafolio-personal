import {Experience} from "@/components/experence-card";
import {Project} from "@/components/projects";

export const projects: Project[] = [
    {
        title: "SmartOne",
        image: "/projects/proy-odin.PNG",
        url: "https://odin.onscp.com/auth/login",
        technologies: ["Angular 17", "Go", "Microservicios", "Clean Architecture", "Docker", "Kubernetes", "Gitlab CI/CD", "AWS", "Multi tenants"],
        descriptions: [
            "Colabore en el desarrollo de microservicios con angular 17, implementando clean architecture.",
            "Colabore en el desarrollo de microservicios con go, implementando clean architecture.",
            "Colabore en el despliege con kubernetes y docker, implementando CI/CD con Gitlab.",
            "Colabore en la implementacion de multi tenants, para la gestion de multiples empresas en un solo sistema.",
        ]
    },
    {
        title: "Airbnb Clone",
        image: "/projects/proy-airbnb.PNG",
        url: "https://clone-airbnb-proyect-3x0alluux-edwardmelendezm.vercel.app/",
        technologies: ["Next JS", "Tailwind CSS", "React JS", "Prisma DB", "Planetscale", "Vercel"],
        descriptions: [
            "Colabore en la integracion de planescale con prisma, para la gestion de la base de datos.",
            "Mejore la UI/UX del proyecto, implementando tailwind css.",
            "Desarrolle un login seguro con Next Auth.",
        ]
    },
    {
        title: "Casa Miau",
        image: "/projects/proy-casa-miau.JPG",
        url: "https://github.com/EdwardMelendezM/CasaMiau",
        technologies: ["Php", "MVC", "Mysql", "Bootstrap", "Javascript"],
        descriptions: [
            "Desarrolle un sistema de gestion de adopciones de mascotas, con un sistema de login y roles.",
            "Colabore en la gestion de la base de datos, implementando un modelo relacional.",
        ]
    },
    {
        title: "Gestor de silabos C.I.",
        image: "/projects/proy-centro-computo.JPG",
        url: "https://github.com/EdwardMelendezM/SISTEMA-DE-GESTION-DE-SILABOS-Y-CONTROL-DE-ASISTENCIA-PARA-EL-DEPARTAMENTO-ACADEMICO-DE-ING.-INFORMA",
        technologies: ["Php", "MVC", "Mysql", "Bootstrap", "Javascript", "Reportes PDF"],
        descriptions: [
            "Desarrolle un sistema de gestion de silabos y control de asistencia para el departamento academico de Ing. Informatica.",
            "Colabore en la gestion de la base de datos, implementando un modelo relacional.",
            "Mejore la integracion de reportes PDF, para la generacion de reportes de asistencia y silabos.",
            "Colabore en la funcionalidad de ingreso masivo de datos, para la gestion de silabos y asistencia.",
        ]
    },
    {
        title: "Ecommerce CMS",
        image: "/projects/proy-ecommerce.jpg",
        url: "https://ecommerce-admin-pi-eight.vercel.app/sign-in?redirect_url=https%3A%2F%2Fecommerce-admin-pi-eight.vercel.app%2F",
        technologies: ["CMS", "Next JS", "Tailwind", "React JS", "Prisma DB", "Planetscale", "Vercel"],
        descriptions: [
            "Desarrolle un CMS para la gestion de productos, categorias, usuarios y ordenes.",
            "Colabore en la integracion de planescale con prisma, para la gestion de la base de datos.",
            "Mejore la UI/UX del proyecto, implementando tailwind css.",
            "Desarrolle un login seguro con Next Auth.",
        ]
    },
    {
        title: "Afit gym",
        image: "/projects/proy-gym-afit.JPG",
        url: "https://edwardmelendezm.github.io/",
        technologies: ["Html", "Css", "Javascript", "Responsive Design"],
        descriptions: [
            "Desarrolle un sitio web para un gimnasio, con un diseño responsive.",
            "Mejore la UI/UX del proyecto, implementando un diseño moderno y minimalista.",
        ]
    },
    {
        title: "Messenger Clone",
        image: "/projects/proy-messenger.jpg",
        url: "https://messenger-clone-next-js-13-fdf5nsnqb-edwardmelendezm.vercel.app/",
        technologies: ["Pusher", "Next JS", "Tailwind CSS", "React JS", "Vercel", "MongoDB"],
        descriptions: [
            "Desarrolle un clon de messenger, con un chat en tiempo real.",
            "Mejore la UI/UX del proyecto, implementando tailwind css.",
            "Desarrolle un login seguro con Next Auth.",
            "Colabore en la integracion de pusher, para el chat en tiempo real.",
        ]
    },
];

export const experiences: Experience[] = [
    {
        title: "Full Stack Developer",
        company: "Smart City S.A.C.",
        duration: "Set 2023 - Presente",
        description: "Colabore en el desarrollo y mantenimiento de aplicaciones ERP. Ademas mejore el desarrollo de microservicios con angular 17 y go, implementando clean architecture.",
        badges: ['Angular', 'Go', 'Microservicios', 'Clean Architecture', 'Kubernetes','Multi tenants', '...']
    },
    {
        title: "Fundador de InfoCode19",
        company: "InfoCode19",
        duration: "Nov 2021 - Presente",
        description: "Desarrolle proyectos de forma free lance para empresas y personas naturales en el area de desarrollo web.",
        badges: ['Qwik', 'Astro', 'Nest js', 'React Native', 'Flutter', '...']
    },
    {
        title: "Fundador de ASDU",
        company: "Association of Software Developers of the Unsaac",
        duration: "Dic 2021 - Presente",
        description: "Lideré un equipo de desarrolladores fullstack para la creación de aplicaciones web altamente interactivas utilizando tecnologías modernas como React.js, Next.js, Node.js y Go.",
        badges: ['Next js','Prisma', 'Mongo DB', 'Tailwind','Mysql', '...']
    }
]
