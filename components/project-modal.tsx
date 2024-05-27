import Image from 'next/image';

import useModalStore from "@/hooks/use-modal-store";
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";

const ProjectModal: React.FC = () => {
    const {isOpen, project, onClose} = useModalStore();

    if (!isOpen || !project) return null;

    return (
        <Dialog
            open={isOpen}
            onOpenChange={onClose}>
            <DialogContent className="p-0 overflow-hidden max-w-4xl">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-bold">
                        {project.title}
                    </DialogTitle>
                </DialogHeader>
                <div className="relative w-full h-80 md:h-[50vh]">
                    <Image
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-t-lg"
                    />
                </div>
                <div className="p-6">
                    <div className="text-center mb-4">
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                        >
                            Ver proyecto
                        </a>
                    </div>
                    <div className="mb-4">
                        <p className="text-lg font-semibold">Tecnologías utilizadas:</p>
                        {project.technologies.map((tech, index) => (
                            <li key={index} className="text-gray-700">{tech}</li>
                        ))}
                    </div>
                    <div className="flex justify-end">
                        <button
                            onClick={onClose}
                            className="bg-gray-100 text-gray-800 px-4 py-2 rounded hover:bg-gray-200 transition"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ProjectModal;
