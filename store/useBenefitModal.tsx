import { create } from "zustand";

interface BenefitModalState {
  isBenefitOpen: boolean;
  openBenefitModal: () => void;
  closeBenefitModal: () => void;
}

const useBenefitModal = create<BenefitModalState>((set) => ({
  isBenefitOpen: false,
  openBenefitModal: () => set({ isBenefitOpen: true }),
  closeBenefitModal: () => set({ isBenefitOpen: false }),
}));

export default useBenefitModal;
