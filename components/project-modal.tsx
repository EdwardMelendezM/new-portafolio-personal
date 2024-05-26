import { useEffect } from 'react';
import Image from 'next/image';

import useModalStore from "@/hooks/use-modal-store";

const ProjectModal: React.FC = () => {
    const { isOpen, project, closeModal } = useModalStore();

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
        } else {
            document.removeEventListener('keydown', handleEscape);
        }
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, closeModal]);

    if (!isOpen || !project) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg max-w-lg w-full">
                <div className="relative w-full h-80 md:h-[70vh]">
                    <Image
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-t-lg"
                    />
                </div>
                <div className="p-4">
                    <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4">{project.title}</h2>
                    <p className="text-lg text-blue-600 dark:text-blue-400 mb-4">{project.url}</p>
                    <button
                        onClick={closeModal}
                        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700"
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
