"use client";

"use client";

import React, { useState } from "react";
import { RiHome3Fill } from "react-icons/ri";
import { FaShoppingBag } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

type MenuItem = {
  icon: JSX.Element;
  label: string;
};

const menuItems: MenuItem[] = [
  { icon: <RiHome3Fill size={24} color="gray" />, label: "홈" },
  { icon: <FaShoppingBag size={24} color="gray" />, label: "장보기 쇼핑" },
  { icon: <IoIosHeart size={24} color="gray" />, label: "찜" },
  { icon: <IoDocumentTextSharp size={24} color="gray" />, label: "주문내역" },
  { icon: <FaUserCircle size={24} color="gray" />, label: "마이배민" },
];

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);

    // 클릭 효과를 짧게 유지한 후 원래 상태로 되돌림
    setTimeout(() => {
      setActiveIndex(null);
    }, 300);
  };

  return (
    <nav className="fixed bottom-0">
      <ul className="flex h-[88px] shadow-top">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`w-[88px] h-[88px] flex flex-col gap-1 justify-center items-center cursor-pointer text-sm text-gray-600`}
            onClick={() => handleClick(index)}
          >
            <div className={`${activeIndex === index ? "animate-wiggle" : ""}`}>
              {item.icon}
            </div>
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
