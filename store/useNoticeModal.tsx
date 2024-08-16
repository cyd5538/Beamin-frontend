import { create } from "zustand";

interface NoticeModalState {
  isNoticeOpen: boolean;
  openNoticeModal: () => void;
  closeNoticeModal: () => void;
}

const useNoticeModal = create<NoticeModalState>((set) => ({
  isNoticeOpen: false,
  openNoticeModal: () => set({ isNoticeOpen: true }),
  closeNoticeModal: () => set({ isNoticeOpen: false }),
}));

export default useNoticeModal;
