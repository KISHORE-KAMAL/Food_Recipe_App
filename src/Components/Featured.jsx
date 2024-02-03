import React, { useState } from 'react'
import burger from "../Images/burger_1.jpg"
import pizza from "../Images/pizza_1.jpg"
import rice from "../Images/rice_1.jpg"
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from "react-icons/rx"

const Featured = () => {

  const sliders = [
    {
      url: burger
    },
    {
      url: pizza
    },
    {
      url: rice
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlider = ()=>
  {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? sliders.length-1 : currentIndex-1
    setCurrentIndex(newIndex)
  }

  const nextSlider = ()=>
  {
    const isLastSlide = currentIndex === sliders.length-1
    const newIndex = isLastSlide ? 0 : currentIndex+1
    setCurrentIndex(newIndex)
  }

  const moveToNextSlide = (sliderIndex)=>
  {
    setCurrentIndex(sliderIndex)
  }

  return (
    <div className='max-w-[1520px] h-[500px] w-full py-4 px-4 relative group'>
      <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500' style={{backgroundImage: `url(${sliders[currentIndex].url})`}}>
      </div>

      <div className='hidden group-hover:block absolute top-[44%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlider}/>
      </div>

      <div className='hidden group-hover:block absolute top-[44%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlider}/>
      </div>

      <div className='flex top-4 justify-center py-2 '>
        {
          sliders.map((sliderItems, sliderIndex)=>
          {
            return <div key={sliderIndex} className='text-2xl cursor-pointer' onClick={()=> moveToNextSlide(sliderIndex)}>
              <RxDotFilled/>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Featured