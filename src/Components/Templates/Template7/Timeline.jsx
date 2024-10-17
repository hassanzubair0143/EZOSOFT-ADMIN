import React from 'react'

const Timeline = () => {
  return (
    <>
       <div className='h-[74px] w-full bg-[#EFF3FC] flex items-center justify-center'>
        <h2 className='text-[40px] leading-[] font-[700] font-[Inter]'>Timeline</h2>
      </div>
      <div className='flex w-full gap-10 py-[40px] px-[50px]'>
                <div className='w-[50%] flex'>
                <div className='flex flex-col w-full gap-4'>
                    <div className='flex gap-3'>
                        <div className='flex items-center gap-2'>
                            <div className='w-[43px] h-[43px] bg-[#B0C750] rounded-full'><h2 className=' text-[30px] font-[700] font-[Inter] text-white text-center'>G</h2></div>
                            <p className='text-[29px] font-[Inter] font-[500]'>On Track</p>
                        </div>
                       
                    </div>
                    <div className='flex gap-3'>
                        <div className='flex items-center gap-2'>
                            <div className='w-[43px] h-[43px] bg-[#E2842A] rounded-full'><h2 className=' text-[30px] font-[700] font-[Inter] text-white text-center'>A</h2></div>
                            <p className='text-[29px] font-[Inter] font-[500]'>At Risk</p>
                        </div>
                       
                    </div>
                    <div className='flex gap-3'>
                        <div className='flex items-center gap-2'>
                            <div className='w-[43px] h-[43px] bg-[#C92F3A] rounded-full'><h2 className=' text-[30px] font-[700] font-[Inter] text-white text-center'>R</h2></div>
                            <p className='text-[29px] font-[Inter] font-[500]'>Off Track</p>
                        </div>
                       
                    </div>
                </div>

                <div className='flex flex-col w-full gap-4'>
                    <div className='flex gap-3'>
                        <div className='flex items-center gap-2'>
                            <div className='w-[43px] h-[43px] bg-[#03AFDF] rounded-full'><h2 className=' text-[30px] font-[700] font-[Inter] text-white text-center'>N</h2></div>
                            <p className='text-[29px] font-[Inter] font-[500]'>Not Started</p>
                        </div>
                       
                    </div>
                    <div className='flex gap-3'>
                        <div className='flex items-center gap-2'>
                            <div className='w-[43px] h-[43px] bg-[#755797] rounded-full'><h2 className=' text-[30px] font-[700] font-[Inter] text-white text-center'>H</h2></div>
                            <p className='text-[29px] font-[Inter] font-[500]'>On Hold</p>
                        </div>
                       
                    </div>
                    <div className='flex gap-3'>
                        <div className='flex items-center gap-2'>
                            <div className='w-[43px] h-[43px] bg-black rounded-full'><h2 className=' text-[30px] font-[700] font-[Inter] text-white text-center'>C</h2></div>
                            <p className='text-[29px] font-[Inter] font-[500]'>Completed</p>
                        </div>
                       
                    </div>
                </div>
                
               
                </div>



                <div className=' w-[50%] flex flex-col items-end justify-end gap-6 pr-[30px]'>
                
                <div className='flex gap-4 '>
                    <div className='w-[70px] h-[25px] bg-[#4D5813]'></div>
                    <h2 className='text-[29px] font-[500] font-[Inter] leading-[15px]'>Duration</h2>
                </div>  
               

                
                <div className='flex gap-3'>
                    <div className='w-[70px] h-[25px] bg-[#76862C]'></div>
                    <h2 className='text-[29px] font-[500] font-[Inter] leading-[15px]'>Proposed</h2>
                </div>  
                

                
                <div className='flex gap-4'>
                    <div className='w-[70px] h-[25px] bg-[#B3CB35]'></div>
                    <h2 className='text-[29px] font-[500] font-[Inter] leading-[15px]'>Progress</h2>
                </div>  
               
                </div>
                </div>
    </>
  )
}

export default Timeline
