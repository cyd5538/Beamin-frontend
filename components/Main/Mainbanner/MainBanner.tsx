import Image from 'next/image';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MainBanner = () => {
  const bannerList = [
    {
      id: 1,
      imgSrc: "/main/mainbanner/mainbanner1.jpg"
    },
    {
      id: 2,
      imgSrc: "/main/mainbanner/mainbanner2.jpg"
    },
    {
      id: 3,
      imgSrc: "/main/mainbanner/mainbanner3.jpg"
    },
  ]

  const responsive = {
    mobile: {
      breakpoint: { max: 3000, min: 400 },
      items: 1
    }
  };

  return (
    <div>
        <Carousel
          responsive={responsive}
          className='mt-4'
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000} 
          ssr={true}
          transitionDuration={500}
          swipeable={true}
          draggable={true}
          arrows={false}
        >
        {bannerList.map((list) => (
          <div key={list.id} className="carousel-item">
            <Image
              width="200"
              height="200"
              src={list.imgSrc}
              alt={list.imgSrc}
              className='w-full object-fit h-40 rounded-3xl px-2'
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default MainBanner
