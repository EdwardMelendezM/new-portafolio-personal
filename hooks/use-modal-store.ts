import {create} from 'zustand'
import {Project} from "@/components/projects";

interface ModalState {
    isOpen: boolean;
    project: Project | null;
    openModal: (project: Project) => void;
    onClose: () => void;
}

const useModalStore = create<ModalState>((set) => ({
    isOpen: false,
    project: null,
    openModal: (project) => set({isOpen: true, project}),
    onClose: () => set({isOpen: false, project: null})
}));

export default useModalStore;
