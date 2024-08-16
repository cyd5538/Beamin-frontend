"use client";

import useSearchModal from "@/store/useSearchModal";
import { motion } from "framer-motion";

const SearchModal: React.FC = () => {
  const { isSearchOpen, closeSearchModal } = useSearchModal();

  const modalVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: "0%" },
    exit: { opacity: 0, x: "100%" },
  };

  return (
    <>
      {isSearchOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeSearchModal}
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
            SearchModal
          </motion.div>
        </div>
      )}
    </>
  );
};

export default SearchModal;
