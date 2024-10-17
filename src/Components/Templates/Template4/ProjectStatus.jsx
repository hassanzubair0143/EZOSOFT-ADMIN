import React, { useState } from 'react'
import ProjectStatusIcon from '/src/assets/images/project-status.svg'
import { useLocation } from 'react-router-dom';

const ProjectStatus = () => {
    const getStatus = (status)=>{
        switch(status){
            case 'In Progress':
            return 'bg-[#FFFF00]';
            case 'Completed':
                return 'bg-blue text-white';
            case 'Not Started':
                return 'bg-[#FB0200] text-white';
             default:
             return '';
        }
    }
  
   const location = useLocation();
  const {pStatus1,pStatus2,pStatus3,pStatus4,due1,due2,due3,due4,done1,done2,done3,done4,} = location.state || {};
    
  return (
    <>
       <div className='w-full  lg:px-[65px] px-[20px] pb-[50px] xl:translate-y-0 lg:translate-y-0 md:translate-y-[1300px] translate-y-[1500px] overflow-x-auto'>
          
          <div className='mt-[20px] flex  gap-2 '>
          <div className='-ml-[20px] w-[44px] h-[44px] flex items-center justify-center border  border-green bg-white rounded-full'>
            <img src={ProjectStatusIcon} alt='project information'/>
          </div>
          <h2 className=' font-[Inter] font-[700] text-[30px] leading-[36px] text-green '>Project Status</h2>
          </div>
          <div className='border-t border-green max-w-[393px] -translate-y-[1px] rounded-l'></div>
  
            <table className='mt-[16px] max-w-[100%] w-full border border-lightClay'>
              <thead className='bg-clay'>
                <tr>
                  <th className='border-b border-r max-w-[25%] w-full  border-lightClay p-[10px] text-[25px] font-[Inter] font-[600]'>Milestones</th>
                  <th className='border-b border-r max-w-[25%] w-full  border-lightClay p-[10px] text-[25px] font-[Inter] font-[600]'>status</th>
                  <th className='border-b border-r max-w-[25%] w-full  border-lightClay p-[10px] text-[25px] font-[Inter] font-[600]'>Due</th>
                  <th className='border-b border-r max-w-[25%] w-full  border-lightClay p-[10px] text-[25px] font-[Inter] font-[600]'>Done</th>
  
                </tr>
  
              </thead>
              <tbody>
                <tr>
                <td className='border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>Requirement Gathering</td>
                <td className={`${getStatus(`${pStatus1}`)} text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]`}>{pStatus1 ||  'N/A'}</td>

                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{due1 || 'N/A'}</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{done1 || 'N/A'}</td>
                </tr>
  
                <tr>
                <td className='border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>Current Business Process Analysis</td>
                <td className={`${getStatus(`${pStatus2}`)} text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]`}>{pStatus2 ||  'N/A'}</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{due2 || 'N/A'}</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{done2 || 'N/A'}</td>
                </tr>
  
                <tr>
                <td className='border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>Project Presentation</td>
                <td className={`${getStatus(`${pStatus3}`)} text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]`}>{pStatus3 || 'N/A'}</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{due3 || 'N/A'}</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{done3 || 'N/A'}</td>
                </tr>
  
  
                <tr>
                <td className='border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>Add text Here</td>
                <td className={`${getStatus(`${pStatus4}`)} text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]`}>{pStatus4 || 'N/A'}</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{due4 || 'N/A'}</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{done4 || 'N/A'}</td>
                </tr>
  
  
  
              </tbody>
                
                  
            </table>
            </div>
    </>
  )
}

export default ProjectStatus
