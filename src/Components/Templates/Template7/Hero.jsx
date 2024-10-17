import React from 'react'
import { useLocation } from 'react-router-dom'

const Hero = () => {

    const location = useLocation();
    const {
        title,description,image,
        obj1,obj2,obj3,acc1,accomp2,acc3,
        ben1,ben2,risk1,risk2,

     } = location.state || {};

  return (
    <>
        <div className='px-[50px] py-[37px] bg-[#D5E3FE] w-full flex justify-between'>
        <div className='max-w-[70%] min-h-[332px]'>
        <h2 className='font-bold text-[72px] leading-[88px] w-full'>{title || 'N/A'}</h2> 

        <p className='mt-[20px] text-[27px] leading-[36px] w-full font-[Inter] italic'>{description || 'N/A'}</p>
        </div>
       <div className='flex items-end translate-y-[100px] w-[30%]'>
       <div className='absolute ml-[40px] w-[360px] h-[360px] flex items-center justify-center   bg-gradient-to-br  from-[#CEDAFC] to-[#415FDF] rounded-full'>
       <img src={image || 'image'} alt='project information' className='w-[311px] h-[311px] rounded-full'/></div>
       </div>

        </div>
        <div className='w-full px-[50px] mt-[100px]'>
            <div className='flex w-full gap-10'>
                <div className='w-[50%]'>
                <h3 className='font-[700] text-[40px] leading-[56px]'>Objective</h3>
                <ul className='mt-[10px] list-disc list-inside'>
                    <li className='text-[29px] font-[Inter] font-[500] italic leading-[46px]'>{obj1 || 'N/A'}</li>
                    <li className='text-[29px] font-[Inter] font-[500] italic leading-[46px]'>{obj2 || 'N/A'}</li>
                    <li className='text-[29px] font-[Inter] font-[500] italic leading-[46px]'>{obj3 || 'N/A'}</li>
                
                </ul>
                </div>
                <div className='w-[50%]'>
                <h3 className='font-[700] text-[40px] leading-[56px]'>Accomplishments</h3>
                <ul className='mt-[10px] list-disc list-inside'>
                
                    <li className='text-[29px] font-[Inter] font-[500] italic leading-[46px]'>{acc1    || 'N/A'} </li>
                    <li className='text-[29px] font-[Inter] font-[500] italic leading-[46px]'>{accomp2 ||'N/A'}</li>
                    <li className='text-[29px] font-[Inter] font-[500] italic leading-[46px]'>{acc3    ||'N/A'}</li>
                </ul>
                </div>
                </div>

                <div className='flex w-full gap-10 py-[26px]'>
                <div className='w-[50%]'>
                <h3 className='font-[700] text-[40px] leading-[56px]'>Benefit</h3>
                <ul className='mt-[10px] list-disc list-inside'>
                    <li className='text-[29px] font-[Inter] font-[500] italic leading-[46px]'>{ben1 || 'N/A'}</li>
                    <li className='text-[29px] font-[Inter] font-[500] italic leading-[46px]'>{ben2 || 'N/A'}</li>
                    
                
                </ul>
                </div>
                <div className='w-[50%]'>
                <h3 className='font-[700] text-[40px] leading-[56px]'>Risk/Concerns</h3>
                <ul className='mt-[10px] list-disc list-inside'>
                
                    <li className='text-[29px] font-[Inter] font-[500] italic leading-[46px]'>{risk1 || 'N/A'} </li>
                    <li className='text-[29px] font-[Inter] font-[500] italic leading-[46px]'>{risk2 || 'N/A'}</li>
                </ul>
                </div>
                </div>

        </div>
    </>
  )
}

export default Hero
