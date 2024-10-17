import React from 'react'
import { useLocation } from 'react-router-dom'

const HeroSection = () => {
  const location = useLocation()
  const {title,description,circleImage} = location.state || {}
  return (
    <>
     <div className='w-full bg-orange min-h-[472px]'>
     <div className='p-[90px] mx-[65px] flex'>
     <div className='max-w-[100%] w-full'>
     <h2 className='font-bold text-[58px] leading-[70px] max-w-[940px]'>{title || 'N/A'}</h2>
     <p className='mt-[20px] font-normal text-[25px] leading-[32px] max-w-[840px]'>{description || 'N/A'}</p>
     </div>

     <div className='flex justify-end max-w-[15%] mt-[40px] '>
     <div className='w-[406px]  h-[406px]  bg-white rounded-full flex items-center justify-center absolute border-[10px] text-center border-white'>
        <img src={circleImage || 'image not uploaded'} alt='image not uploaded' className='bg-cover rounded-full w-[400px] h-[390px]' />
     </div>
     </div>
      
     </div>
    
     </div>
    </>
  )
}

export default HeroSection
