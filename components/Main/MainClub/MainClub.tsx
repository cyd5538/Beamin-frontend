import { mainClubList } from '@/constants/mainClubData'
import Image from 'next/image'
import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import MainClubList from './MainClubList'

const MainClub = () => {


  return (
    <div className='bg-white rounded-xl mx-2 mt-4 p-2'>
      <div className='w-full flex justify-between mb-4'>
        <h2 className='flex justify-center items-center'>
          <span className='text-xl font-sans font-black'>배민배달</span>
          <p className='text-base'>&nbsp; <b>배민클럽</b>으로 무료배달!</p>
        </h2>
        <BiChevronRight size={24}/>
      </div>
      <div className='grid grid-cols-5 gap-y-6 justify-center items-center'>
        {mainClubList.map((list,idx) => (
          <MainClubList key={list.title} list={list} idx={idx}/>
        ))}
      </div>
    </div>
  )
}

export default MainClub
