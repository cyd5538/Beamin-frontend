import Image from 'next/image'
import React from 'react'

const MainChoice = () => {
  return (
    <div className='px-2 flex gap-2 justify-center items-center mt-2'>
      <div className='flex-1 h-32 rounded-2xl bg-white p-2'>
        <h2 className='text-xl font-extrabold mb-2'>가게배달</h2>
        <div className='flex relative w-full '>
          <span>가게에서 <br></br>자체 배달</span>
          <Image src="" alt="가게에세 자체 배달" width="50" height="50" className='absolute bottom-[-30px] right-[-10px]'/>
        </div>
      </div>
      <div className='flex-1 h-32 rounded-2xl bg-white p-2'>
        <h2 className='text-xl font-extrabold mb-2'>B마트</h2>
        <div className='flex relative w-full '>
          <span>과일<br></br>배달어때요</span>
          <Image src="/main/mainchoice/mainchoiceImg2.jpg" alt="B마트" width="50" height="50" className='absolute bottom-[-30px] right-[-10px]'/>
        </div>
      </div>
      <div className='flex-1 h-32 rounded-2xl bg-white p-2'>
        <h2 className='text-xl font-extrabold mb-2'>장보기.쇼핑</h2>
        <div className='flex relative w-full '>
          <span>편의점부터<br></br>마트까지</span>
          <Image src="/main/mainchoice/mainchoiceImg3.jpg" alt="장보기.쇼핑" width="50" height="50" className='absolute bottom-[-30px] right-[-10px]'/>
        </div>
      </div>

    </div>
  )
}

export default MainChoice
