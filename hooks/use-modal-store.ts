import {create} from 'zustand'

interface ModalState {
    isOpen: boolean;
    project: { title: string, image: string, url: string, technologies: string[] } | null;
    openModal: (project: { title: string, image: string, url: string }) => void;
    onClose: () => void;
}

const useModalStore = create<ModalState>((set) => ({
    isOpen: false,
    project: null,
    openModal: (project) => set({isOpen: true, project}),
    onClose: () => set({isOpen: false, project: null})
}));

export default useModalStore;
