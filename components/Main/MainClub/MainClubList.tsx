import Image from "next/image";
import React from "react";

interface Props {
  list: {
    title: string
    imgSrc: string
  }
  idx: number
}

const MainClubList:React.FC<Props> = ({list,idx}) => {
  const starbucks = idx === 7;
  const cu = idx === 8;
  const seven = idx === 9;

  return (
    <div
      className="flex relative flex-col justfiy-center items-center gap-2"
      key={list.title}
    >
      {cu || seven ?
      <div className="absolute top-[-20px] text-[10px] text-orange-400 border-2 border-orange-400 rounded-xl font-bold px-1 py-[2px]">장보기 쇼핑</div>
        : null
      }
      <div className={`w-14 h-14 flex justify-center items-center rounded-2xl ${
        starbucks ? 'bg-[#184032]' :
        cu ? 'bg-[#642E8E]' :
        seven ? 'bg-[#007B53]' :
        'bg-[#F4F6F8]'
      }`}>
        <Image src={list.imgSrc} alt={list.title} width={50} height={50} />
      </div>
      <p className="text-sm">{list.title}</p>
    </div>
  );
};

export default MainClubList;