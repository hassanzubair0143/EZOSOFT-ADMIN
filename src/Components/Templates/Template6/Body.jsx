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

      <div className='flex w-full mt-[18px] gap-[50px]'>
        {/* left div */}
        <div className='w-[50%]'>
         <div className='bg-[#FFE9B8]'><h2 className='py-[11px] text-[33px] text-center leading-[39px] font-bold font-[Inter]'>Project Scope</h2></div>
        
         <div className='mt-[18px]'>
         <div className='flex gap-4  mt-[11px] pl-[18px]'>
            <div className='mt-[10px] max-w-[13px] w-full h-[13px]  border border-orange rounded-full'></div>
            <p className='text-[25px] leading-[30px]'>{scop1 ||  'N/A'}</p>

          </div>
         <div className='flex gap-4  mt-[11px] pl-[18px]'>
           <div className='mt-[10px] max-w-[13px] w-full h-[13px] border border-orange rounded-full'></div>
           <p className='text-[25px] leading-[30px]'>{scop2  || 'N/A'}</p>  

         </div>
         </div>
        </div>
        
         {/* right div */}
         <div className='w-[50%]'>
         <div className='bg-[#FFE9B8]'><h2 className='py-[11px] text-[33px] text-center leading-[39px] font-bold font-[Inter]'>Deliverables</h2></div>
        
         <div className='mt-[18px]'>
         <div className='flex gap-4  mt-[11px] pl-[18px]'>
            <div className=' text-[25px] leading-[30px] text-[#58595B]'>01</div>
            <p className='text-[25px] leading-[30px]'>{deliver1  ||  'N/A'}</p>

          </div>
         <div className='flex gap-4  mt-[11px] pl-[18px]'>
           <div className=' text-[25px] leading-[30px] text-[#58595B]'>02</div>
           <p className='text-[25px] leading-[30px]'>{deliver2   || 'N/A'}</p>  

         </div>
         </div>
        </div>
        
      </div>
      <div className='flex w-full gap-[50px]'>
         {/* left div */}
         <div className='w-[50%]'>
         <div className='bg-[#FFE9B8]'><h2 className='py-[11px] text-[33px] text-center leading-[39px] font-bold font-[Inter]'>Risk and Issues</h2></div>
        
         <div className='mt-[18px]'>
         <div className='flex gap-4  mt-[11px] pl-[18px]'>
            <div className=' text-[25px] leading-[30px] text-[#58595B]'>01</div>
            <p className='text-[25px] leading-[30px]'>{risk ||  'N/A'}</p>

          </div>
         </div>
        </div>

         {/* right div */}
         <div className='w-[50%]'>
         <div className='bg-[#FFE9B8]'><h2 className='py-[11px] text-[33px] text-center leading-[39px] font-bold font-[Inter]'>Assumptions/Dependence</h2></div>
        
         <div className='mt-[18px] flex '>
         <div className='flex gap-4  mt-[11px] pl-[18px] max-w-[50%] w-full'>
            <div className=' text-[25px] leading-[30px] text-[#58595B]'>01</div>
            <p className='text-[25px] leading-[30px]'>{asmp1 ||  'N/A'}</p>  

          </div>
          <div className='flex gap-4  mt-[11px] pl-[18px] max-w-[50%] w-full'>
            <div className=' text-[25px] leading-[30px] text-[#58595B]'>02</div>
            <p className='text-[25px] leading-[30px]'>{asm2 || 'N/A'}</p>
          </div>
         </div>
        </div>
      </div>

      {/* line div */}
      <div className='flex w-full mt-[20px] justify-center'>
        <div className='max-w-[60%] w-full border-t border-orange '></div>
      </div>

     


      </div>
    </div>
  )
}

export default Body
