import React from 'react'
import { useLocation } from 'react-router-dom'

const ProjectStatus = () => {
    const location = useLocation();
    const{
        cost1,cost2,cost3,cost4,
        stake1,stake2,stake3,stake4,stake5,stake6,
    } = location.state || {};
  return (
    <>
      <div className='h-[74px] w-full bg-[#EFF3FC] flex items-center justify-center'>
        <h2 className='text-[40px] leading-[] font-[700] font-[Inter]'>Project Status <span className='ml-[10px] h-2 w-6 '> - </span> <span className='text-[#34C759] ml-[20px]'>Green</span></h2>
      </div>
      <div className='flex w-full gap-10 py-[26px] px-[50px]'>
                <div className='w-[50%]'>
                <h3 className='font-[700] text-[40px] leading-[56px] text-[#034BDD]'>Cost</h3>
                <ul className='mt-[10px] list-disc list-inside'>
                    <li className='text-[29px] font-[Inter] font-[500] leading-[46px]'>Project Budget - {cost1 || 'N/A'}</li>
                    <li className='text-[29px] font-[Inter] font-[500] leading-[46px]'>Labor Hours - {cost2 || 'N/A'}</li>
                    <li className='text-[29px] font-[Inter] font-[500] leading-[46px]'>Planned wages - {cost3 || 'N/A'}</li>
                    <li className='text-[29px] font-[Inter] font-[500] leading-[46px]'>Spent - {cost4  || 'N/A'}</li>

                    
                
                </ul>
                </div>
                <div className='w-[50%]'>
                <h3 className='font-[700] text-[40px] leading-[56px] text-[#034BDD]'>Key Stakeholders Invloved</h3>
                <ul className='mt-[10px] list-disc list-inside'>
                
                    <li className='text-[29px] font-[Inter] font-[500] leading-[46px]'>Sponsor Organization- {stake1 || 'N/A'} </li>
                    <li className='text-[29px] font-[Inter] font-[500] leading-[46px]'>Initiative Sponsor - {stake2  || 'N/A'} </li>

                    <li className='text-[29px] font-[Inter] font-[500] leading-[46px]'>Initiative Owner - {stake3  || 'N/A'} </li>

                    <li className='text-[29px] font-[Inter] font-[500] leading-[46px]'>initiative Manager - {stake4 || 'N/A'}</li>
                    <li className='text-[29px] font-[Inter] font-[500] leading-[46px]'>IT Manager - {stake5 ||  'N/A'}</li>

                    <li className='text-[29px] font-[Inter] font-[500] leading-[46px]'>Project Office - {stake6  || 'N/A'}</li>

                </ul>
                </div>
                </div>
    </>
  )
}

export default ProjectStatus
