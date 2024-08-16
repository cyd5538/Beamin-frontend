import React from "react";
import { RiMoneyCnyCircleLine } from "react-icons/ri";
import { CiBellOn, CiShoppingCart } from "react-icons/ci";
import { MdArrowDropDown } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import useSearchModal from "@/store/useSearchModal";
import useNoticeModal from "@/store/useNoticeModal";
import useBenefitModal from "@/store/useBenefitModal";

const Mainbar = () => {
  const { openSearchModal } = useSearchModal();
  const { openNoticeModal } = useNoticeModal();
  const { openBenefitModal } = useBenefitModal();

  return (
    <div className="bg-slate-400 px-4 pb-2 rounded-b-xl">
      <div className="flex gap-4 w-full justify-between text-white pt-4">
        <h2 className="text-xl font-semibold flex justify-center items-center cursor-pointer">
          용산구 용산102길 245 <MdArrowDropDown />
        </h2>
        <div className="flex gap-4">
          <RiMoneyCnyCircleLine
            onClick={openBenefitModal}
            className="cursor-pointer"
            size={28}
            color="white"
          />
          <CiBellOn
            onClick={openNoticeModal}
            className="cursor-pointer"
            size={28}
            color="white"
          />
          <CiShoppingCart className="cursor-pointer" size={28} color="white" />
        </div>
      </div>
      <div onClick={openSearchModal} className="mt-4 relative">
        <input
          className="h-10 w-full text-base px-10 text-slate-400"
          type="text"
          placeholder="돈까스 나와라 뚝딱"
        />
        <FaSearch className="absolute top-3 left-4" color="#94a3b8" />
      </div>
    </div>
  );
};

export default Mainbar;
