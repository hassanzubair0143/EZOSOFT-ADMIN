import React from 'react'
import { useLocation } from 'react-router-dom'

const Body = () => {
  const locaion = useLocation();

  const {  
    need1,need2,scop1,scop2,
    deliver1,deliver2,
    risk,
    asmp1,asm2,
  } = locaion.state || {};

  return (
    <div>
      <div className='px-[60px]'>

      {/* business needs */}
         <div className='flex items-center justify-center bg-orange mt-[18px] '>
         <h2 className='py-[11px] text-[33px] text-center leading-[39px] font-bold font-[Inter] '>Business Needs</h2>
         </div> 
     
      <div className='flex gap-4  mt-[11px] ml-[18px]'>
         <div className='mt-[10px] w-[13px] h-[13px] border border-orange rounded-full'></div>
         <p className='text-[25px] leading-[30px]'>{need1 || 'N/A'}</p>
      </div>
      <div className='flex gap-4  mt-[11px] ml-[18px]'>
         <div className='mt-[10px] w-[13px] h-[13px] border border-orange rounded-full'></div>
         <p className='text-[25px] leading-[30px]'>{need2 ||  'N/A'}</p>  

      </div>

     


      </div>
    </div>
  )
}

export default Body
