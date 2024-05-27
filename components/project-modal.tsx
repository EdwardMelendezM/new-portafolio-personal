import Image from 'next/image';
import Link from "next/link";
import {EyeIcon} from "lucide-react";

import useModalStore from "@/hooks/use-modal-store";
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";

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
                        objectFit="cover"
                        className="rounded-t-lg"
                    />
                    <Link href={project.url} target={"_blank"} className="absolute top-3 right-2">
                        <Badge variant="default">
                            Ver proyecto
                            <EyeIcon className="w-5 h-5 ml-2"/>
                        </Badge>
                    </Link>
                </div>
                <div className="px-6 pt-1 pb-5">
                    <div className="mb-1 flex gap-1">
                        {project.technologies.map((tech, index) => (
                            <Badge key={index} variant="outline">{tech}</Badge>
                        ))}
                    </div>
                    <div className="mt-5">
                        {project.descriptions.map((description, index) => (
                            <Badge key={index} variant="default">
                                {description}
                            </Badge>
                        ))}
                    </div>
                    <div className="flex justify-end mt-5">
                        <Button onClick={onClose} variant="outline">
                            Cerrar
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ProjectModal;
