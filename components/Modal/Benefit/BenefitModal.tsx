"use client";

import useBenefitModal from "@/store/useBenefitModal";  
import { motion } from "framer-motion";

const BenefitModal: React.FC = () => {
  const { isBenefitOpen, closeBenefitModal } = useBenefitModal();

  const modalVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: "0%" },
    exit: { opacity: 0, x: "100%" },
  };

  return (
    <>
      {isBenefitOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeBenefitModal}
        >
          <motion.div
            className="w-[440px] h-full relative p-8 rounded bg-white shadow-lg"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
          >
            BenefitModal
          </motion.div>
        </div>
      )}
    </>
  );
};

export default BenefitModal;
