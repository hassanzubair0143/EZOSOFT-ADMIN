import React from 'react'
import { useLocation } from 'react-router-dom'

const Hero = () => {
  const location = useLocation();
  const {title,desc,image,
    projectTitle,projectStartDate,projectEndDate,projectManager,projectSponser,
  } = location.state || {};

  return (
    <>
     <div className='bg-[#0C1C2C] w-full min-h-[250px]'>
        <div className='px-[60px] pt-[40px] flex justify-between'>
            <div  className='flex flex-col text-white'>

            <h1 className='text-[74px] leading-[90px] font-bold '>{title || 'N/A'}</h1>
            <p className='mt-[13px] text-[22px] leading-[26px] max-w-[1167px]'>{desc || 'N/A'}</p>
            </div>

            <div className='bg-orange w-[202px] h-[202px] rounded-full flex items-center justify-center'>
                <img 
                src={image} 
                alt='logo' className='w-[202px] h-[202px] rounded-full text-center'/>
            </div>
        </div>
     </div>

     <div className='bg-white w-full py-[20px]'>
        <div className='px-[60px] flex justify-between'>
            <div className='flex flex-col'>
              <div className='flex items-center w-full'>
                <div className='w-[82px] border-t border-black'></div>
                <div className='w-[13px] h-[13px] ml-[35px] rounded-full bg-white border-[#FFBF02] border absolute'></div>
              </div>
                <h2 className='mt-[13px] text-[24px] leading-[30px] font-bold'>Project Title</h2>
                <p className='mt-[10px] text-[16px] leading-[24px]'>{projectTitle ||  'N/A'}</p>

            </div>
            
            <div className='flex flex-col'>
              <div className='flex items-center w-full'>
                <div className='w-[82px] border-t border-black'></div>
                <div className='w-[13px] h-[13px] ml-[35px] rounded-full bg-white border-[#FFBF02] border absolute'></div>
              </div>
                <h2 className='mt-[13px] text-[24px] leading-[30px] font-bold'>Project Start Date</h2>
                <p className='mt-[10px] text-[16px] leading-[24px]'>{projectStartDate || 'N/A'}</p>
            </div>

            <div className='flex flex-col'>
              <div className='flex items-center w-full'>
                <div className='w-[82px] border-t border-black'></div>
                <div className='w-[13px] h-[13px] ml-[35px] rounded-full bg-white border-[#FFBF02] border absolute'></div>
              </div>
                <h2 className='mt-[13px] text-[24px] leading-[30px] font-bold'>Project End Date</h2>
                <p className='mt-[10px] text-[16px] leading-[24px]'>{projectEndDate ||  'N/A'}</p>

            </div>

            <div className='flex flex-col'>
              <div className='flex items-center w-full'>
                <div className='w-[82px] border-t border-black'></div>
                <div className='w-[13px] h-[13px] ml-[35px] rounded-full bg-white border-[#FFBF02] border absolute'></div>
              </div>
                <h2 className='mt-[13px] text-[24px] leading-[30px] font-bold'>Project Manager </h2>
                <p className='mt-[10px] text-[16px] leading-[24px]'>{projectManager ||  'N/A'}</p>

            </div>

            <div className='flex flex-col'>
              <div className='flex items-center w-full'>
                <div className='w-[82px] border-t border-black'></div>
                <div className='w-[13px] h-[13px] ml-[35px] rounded-full bg-white border-[#FFBF02] border absolute'></div>
              </div>
                <h2 className='mt-[13px] text-[24px] leading-[30px] font-bold'>Project Sponsor </h2>
                <p className='mt-[10px] text-[16px] leading-[24px]'>{projectSponser ||   'N/A'}</p>

            </div>

            </div>
            </div>
    </>
  )
}

export default Hero
