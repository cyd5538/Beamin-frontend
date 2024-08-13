import { create } from "zustand";

interface searchModalState {
  isSearchOpen: boolean;
  openSearchModal: () => void;
  closeSearchModal: () => void;
}

const useSearchModal = create<searchModalState>((set) => ({
  isSearchOpen: false,
  openSearchModal: () => set({ isSearchOpen: true }),
  closeSearchModal: () => set({ isSearchOpen: false }),
}));

export default useSearchModal;
