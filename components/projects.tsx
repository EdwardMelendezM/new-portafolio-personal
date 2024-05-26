'use client'

import Image from "next/image";
import useModalStore from "@/hooks/use-modal-store";
import ProjectModal from "@/components/project-modal";

const projects = [
    {
        title: "SmartOne",
        image: "/projects/proy-odin.PNG",
        url: "https://odin.onscp.com/auth/login"
    },
    {
        title: "Airbnb Clone",
        image: "/projects/proy-airbnb.PNG",
        url: "https://clone-airbnb-proyect-3x0alluux-edwardmelendezm.vercel.app/"
    },
    {
        title: "Casa Miau",
        image: "/projects/proy-casa-miau.JPG",
        url: "https://github.com/EdwardMelendezM/CasaMiau"
    },
    {
        title: "Gestor de silabos C.I.",
        image: "/projects/proy-centro-computo.JPG",
        url: "https://github.com/EdwardMelendezM/SISTEMA-DE-GESTION-DE-SILABOS-Y-CONTROL-DE-ASISTENCIA-PARA-EL-DEPARTAMENTO-ACADEMICO-DE-ING.-INFORMA"
    },
    {
        title: "Ecommerce CMS",
        image: "/projects/proy-ecommerce.jpg",
        url: "https://ecommerce-admin-pi-eight.vercel.app/sign-in?redirect_url=https%3A%2F%2Fecommerce-admin-pi-eight.vercel.app%2F"
    },
    {
        title: "Afit gym",
        image: "/projects/proy-gym-afit.JPG",
        url: "https://edwardmelendezm.github.io/"
    },
    {
        title: "Messenger Clone",
        image: "/projects/proy-messenger.jpg",
        url: "https://messenger-clone-next-js-13-fdf5nsnqb-edwardmelendezm.vercel.app/"
    },
];

const Projects: React.FC = () => {
    const openModal = useModalStore((state) => state.openModal);

    return (
        <div className="w-full flex flex-col items-center justify-start py-10">
            <h1 className="text-4xl font-bold text-gray-700 dark:text-gray-200 mb-10">
                Proyectos
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 w-[90%] max-w-6xl">
                {projects.map((project, index) => (
                    <div key={index} className="group relative">
                        <div
                            onClick={() => openModal(project)}
                            className="cursor-pointer relative w-full h-64 md:h-80 bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                layout="fill"
                                objectFit="contain"
                                className="transition-transform transform group-hover:scale-105"
                            />
                        </div>
                        <p className="text-center text-lg font-semibold text-gray-700 dark:text-gray-200 mt-4">
                            {project.title}
                        </p>
                    </div>
                ))}
            </div>
            <ProjectModal/>
        </div>
    );
}

export default Projects;
