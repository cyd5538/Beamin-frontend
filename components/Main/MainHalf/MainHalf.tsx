import Image from 'next/image'
import React from 'react'

const MainHalf = () => {
  return (
    <div className='border-2 h-[70px] gap-2 flex justify-center items-center border-blue-300 rounded-2xl mt-4 px-2 mx-2 text-center'>
      <span> <b>최대 반값!</b> 지금 초특가로 드려요</span>
      <Image src="/halfprice.jpg" alt="halfprice" width={70} height={70}/>
    </div>
  )
}

export default MainHalf
