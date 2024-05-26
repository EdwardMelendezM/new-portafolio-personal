import { create } from 'zustand'

interface ModalState {
    isOpen: boolean;
    project: { title: string, image: string, url: string } | null;
    openModal: (project: { title: string, image: string, url: string }) => void;
    closeModal: () => void;
}

const useModalStore = create<ModalState>((set) => ({
    isOpen: false,
    project: null,
    openModal: (project) => set({ isOpen: true, project }),
    closeModal: () => set({ isOpen: false, project: null })
}));

export default useModalStore;