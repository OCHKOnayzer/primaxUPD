import { create } from "zustand";

// interface BearState {
//   bears: number;
//   increasePopulation: () => void;
//   removeAllBears: () => void;
//   updateBears: (newBears: number) => void;
// }

// const useBear = create<BearState>((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears) => set({ bears: newBears }),
// }))

type CurrentModal = "SideMenuModal" | null;

interface ModalState {
  isOpen: boolean;
  currentModal: CurrentModal;
  openModalWindow: () => void;
  closeModalWindow: () => void;
}

export const useModal = create<ModalState>((set) => ({
  isOpen: false,
  currentModal: null,
  openModalWindow: () => set({ isOpen: true }),
  closeModalWindow: () => set({ isOpen: false }),
}));
