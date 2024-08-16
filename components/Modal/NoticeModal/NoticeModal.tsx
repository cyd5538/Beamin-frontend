"use client";

import useNoticeModal from "@/store/useNoticeModal";
import { motion } from "framer-motion";

const NoticeModal: React.FC = () => {
  const { isNoticeOpen, closeNoticeModal } = useNoticeModal();

  const modalVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: "0%" },
    exit: { opacity: 0, x: "100%" },
  };

  return (
    <>
      {isNoticeOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeNoticeModal}
        >
          <motion.div
            className="w-[440px] h-full relative p-8 rounded bg-white shadow-lg"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.1 }}
            onClick={(e) => e.stopPropagation()}
          >
            NoticeModal
          </motion.div>
        </div>
      )}
    </>
  );
};

export default NoticeModal;
