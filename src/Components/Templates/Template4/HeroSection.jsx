import React from 'react'
import ProjectInfo from '/src/assets/images/project-information-logo.svg'
import MeetingGoal from '/src/assets/images/Meeting.svg'
import MeetingObjectives from '/src/assets/images/Meeting-objectives.svg'
import Constraints from '/src/assets/images/constraints.svg'
import Assumptions from '/src/assets/images/assumptions.svg'
import ProjectInformation from '/src/assets/images/project-information.svg'
import DeliverAble from '/src/assets/images/project-deliverable.svg'
import MeetingAgenda from '/src/assets/images/Meeting-agenda.svg'
import { useLocation } from 'react-router-dom'



const HeroSection = () => {
  const location = useLocation()
  const {title,description,image,
    meetinggoals,meetinggoals2,
    info1,info2,info3,
     obj1,obj2,obj3,obj4,
     cons1,cons2,cons3,
     asumption1,asumption2,asumption3,
     pName, pStartDate, pEndDate, pBudget,pDesc,
     pdtext1,pdtext2,pdtext3,
     meeting1,meeting2,meeting3,meeting4,meeting5,
     purpose1,purpose2,purpose3,purpose4,purpose5,
     medium1,medium2,medium3,medium4,medium5,
     freq1,freq2,freq3,freq4,freq5,
     aud1,aud2,aud3,aud4,aud5,
    } = location.state|| {}

    

  return (
    <>
  <div className='w-[100%] bg-green lg:max-h-[546px] xl:max-h-[546px] md:max-h-[646px] max-h-[900px] '>
      <div className='w-full lg:px-[60px] xl:px-[60px] md:px-[30px] px-[15px] flex lg:flex-row xl:flex-row flex-col'>
        <div className='mt-[40px] lg:w-[50%] xl:w-[50%] w-[100%]'>
         <h2 className='text-[67px] h-[180px] overflow-hidden leading-[81px] font-[Inter] text-white'>{title || 'One Pager Team Meeting Charter'}</h2>
         <p className='mt-[33px] h-[140px] overflow-hidden text-[22px] text-white'>{description || ''}</p>
        
         
         <div className=' mt-[38px] w-[333px] h-[56px] max-w-[350px] w-full bg-clay text-green flex items-center justify-center'>
         {image ? (
        <img
          src={image}
          alt='Company logo'
          className='object-cover w-full h-full'
         
        />
      ) : (
        <p>No image uploaded.</p>
      )}
         </div>

        </div>

 {/* overlayed div */}

        <div className='lg:w-[50%] xl:w-[50%] w-[100%] w-full bg-clay mt-[40px] '>
        <div className='mt-[56px] flex gap-2'>
        <div className=' ml-[20px] w-[44px] h-[44px] flex items-center justify-center border border-green bg-white rounded-full'>
          <img src={ProjectInfo} alt='project information'/>
        </div>
        <h2 className=' font-[Inter] font-[700] text-[30px] leading-[36px] text-green'>Project Information</h2>
        </div>
        <div className='border-t border-green max-w-[393px] ml-[38px] -translate-y-[1px] rounded-l'></div>
        <div className='min-h-[185px] lg:ml-[65px] xl:ml-[65px] md:ml-[30px] ml-[10px]  mt-[18px] pl-[30px] border border-lightClay max-w-[80%] w-full'>
           <ul className='list-disc '>
      <li>
      <p className='text-[24px] font-[400] font-inter'>{info1 || 'information not given'}</p>
    </li>

    {info2 && (<li>
      <p className='text-[24px] font-[400] font-inter'>{info2}</p>
    </li>)}

    {info3 && (<li>
      <p className='text-[24px] font-[400] font-inter'>{info3}</p>
    </li>)}
    
           </ul>
        </div>



        <div className='mt-[18px] flex gap-2'>
        <div className=' ml-[20px] w-[44px] h-[44px] flex items-center justify-center border  border-green bg-white rounded-full'>
          <img src={MeetingGoal} alt='project information'/>
        </div>
        <h2 className=' font-[Inter] font-[700] text-[30px] leading-[36px] text-green '>Meeting Goals</h2>
        </div>
        <div className='border-t border-green max-w-[393px] ml-[38px] -translate-y-[1px] rounded-l'></div>
        <div className={`lg:ml-[70px] xl:ml-[70px] mt-[16px]  py-[8px] px-[30px] bg-[url('/src/assets/images/bgArrow1.svg')] bg-no-repeat`}>
           
            <p className='text-[24px] font-[400] font-[Inter]'>{meetinggoals || 'not described'}</p>
           
       </div>
       {meetinggoals2 && (
  <div className={`lg:ml-[70px] xl:ml-[70px] mt-[16px] py-[8px] px-[30px] bg-[url('/src/assets/images/bgArroe2.svg')] bg-no-repeat`}>
    <p className='text-[24px] font-[400] font-[Inter]'>{meetinggoals2}</p>
  </div>
)}


      <div className='mt-[20px] flex gap-2'>
        <div className=' ml-[20px] w-[44px] h-[44px] flex items-center justify-center border  border-green bg-white rounded-full'>
          <img src={MeetingObjectives} alt='project information'/>
        </div>
        <h2 className=' font-[Inter] font-[700] text-[30px] leading-[36px] text-green '>Meeting Objectives</h2>
        </div>
        <div className='border-t border-green max-w-[393px] ml-[38px] -translate-y-[1px] rounded-l'></div>
{/* meeting objectives */}
        <div className='min-h-[200px] lg:ml-[65px] xl:ml-[65px] md:ml-[30px] ml-[10px]  mt-[18px] pl-[30px] border border-lightClay max-w-[80%] w-full'>
           <ul className='list-disc '>
   <li>
      <p className='text-[24px] font-[400] font-[Inter]'>{obj1 || 'not given'}</p>
    </li>

    {obj2 && ( <li>
      <p className='text-[24px] font-[400] font-[Inter]'>{obj2}</p>
    </li>)}

    {obj3 && ( <li>
      <p className='text-[24px] font-[400] font-[Inter]'>{obj3}</p>
    </li>)}

    {obj4 && ( <li>
      <p className='text-[24px] font-[400] font-[Inter]'>{obj4}</p>
    </li>)}

      

    
    
    
   
           </ul>
        </div>

 {/* constraints and assumption */}

         <div className='flex w-[100%] pr-[47px]'>
        <div className='w-[50%]'>
        <div className='mt-[20px] flex gap-2 '>
        <div className=' ml-[20px] w-[44px] h-[44px] flex items-center justify-center border  border-green bg-white rounded-full'>
          <img src={Constraints} alt='project information'/>
        </div>
        <h2 className=' font-[Inter] font-[700] text-[30px] leading-[36px] text-green '>Constraints</h2>
        </div>
        <div className='border-t border-green max-w-[393px] ml-[38px] -translate-y-[1px] rounded-l'></div>
         </div>

         <div className='w-[50%] '>
        <div className='mt-[20px] flex  gap-2 '>
        <div className=' ml-[20px] w-[44px] h-[44px] flex items-center justify-center border  border-green bg-white rounded-full'>
          <img src={Assumptions} alt='project information'/>
        </div>
        <h2 className=' font-[Inter] font-[700] text-[30px] leading-[36px] text-green '>Assumptions</h2>
        </div>
        <div className='border-t border-green max-w-[393px] ml-[38px] -translate-y-[1px] rounded-l'></div>
         </div>
        </div>
        <div className='mr-[35px] my-[20px] lg:ml-[65px] xl:ml-[65px] md:ml-[30px] ml-[10px] border border-lightClay'>

        <div className='min-h-[80px] flex w-full border-b border-lightClay'>
            <p className='w-[50%] p-[24px] text-[22px] font-[Inter] font-[400]'>{cons1 || ''}</p>
            <p className='w-[50%] border-l border-lightClay p-[10px] text-[22px] font-[Inter] font-[400]'>{asumption1 || ''}</p>
            </div>

            <div className='min-h-[80px] flex w-full border-b border-lightClay'>
            <p className='w-[50%] p-[24px] text-[22px] font-[Inter] font-[400]'>{cons2 || ''}</p>
            <p className='w-[50%] border-l border-lightClay p-[10px] text-[22px] font-[Inter] font-[400]'>{asumption2 || ''}</p>
            </div>

            <div className='min-h-[80px] flex w-full border-b border-lightClay'>
            <p className='w-[50%] p-[24px] text-[22px] font-[Inter] font-[400]'>{cons3 || ''}</p>
            <p className='w-[50%] border-l border-lightClay flex p-[10px] text-[22px] font-[Inter] font-[400]'>{asumption3 || ''}</p>
            </div>
            
        </div>

        
        
        </div>


      </div>
      </div>

      <div className='mt-[20px] lg:w-[50%] xl:w-[50%] w-full lg:px-[60px] px-[20px] xl:translate-y-0 lg:translate-y-0 md:translate-y-[900px] translate-y-[1400px]'>
      <div className='flex items-center gap-2'>
        <div className='-ml-[20px] w-[44px] h-[44px] flex items-center justify-center border border-green bg-white rounded-full'>
          <img src={ProjectInformation} alt='project information'/>
        </div>
        <h2 className=' font-[Inter] font-[700] text-[30px] leading-[36px] text-green text-nowrap '>Project Information</h2>
        </div>
        <div className=' border-t border-green max-w-[393px] -translate-y-[1px] rounded-l'></div>
{/* project information */}
     <div className='border border-lightClay w-[100%] mt-[16px]'>
     <div className='flex border-b border-lightClay'>
            <p className='w-[50%] p-[10px] text-[20px] font-[Inter] font-[400]'>Project Name</p>
            <p className='w-[50%] border-l border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{pName || ''}</p>
            </div>

            <div className='flex border-b border-lightClay'>
            <p className='w-[50%] p-[10px] text-[20px] font-[Inter] font-[400]'>Project Start Date</p>
            <p className='w-[50%] border-l border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{pStartDate||''}</p>
            </div>

            <div className='flex border-b border-lightClay'>
            <p className='w-[50%] p-[10px] text-[20px] font-[Inter] font-[400]'>Estimated Completion</p>
            <p className='w-[50%] border-l border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{pEndDate || ''}</p>
            </div>

            <div className='flex border-b border-lightClay'>
            <p className='w-[50%] p-[10px] text-[20px] font-[Inter] font-[400]'>Project Budget</p>
            <p className='w-[50%] border-l border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{pBudget || ""}</p>
            </div>

            <div className='flex '>
            <p className='w-[50%] p-[10px] text-[20px] font-[Inter] font-[400]'>Add Text Here</p>
            <p className='w-[50%] border-l border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{pDesc  || ''}</p>

            </div>
     </div>


     <div className='mt-[30px] flex gap-2 items-center'>
        <div className=' -ml-[20px] w-[44px] h-[44px] flex items-center justify-center border border-green bg-white rounded-full'>
          <img src={DeliverAble} alt='project information'/>
        </div>
        <h2 className=' font-[Inter] font-[700] text-[30px] leading-[36px] text-green '>Project Deliverables</h2>
        </div>
        <div className='border-t border-green max-w-[393px] -translate-y-[1px] rounded-l'></div>
            
       <div className='w-full mt-[19px] border border-lightClay'>
       
            <p className='min-h-[50px] border-b  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{pdtext3 || ''}</p> 
            <p className='min-h-[50px] border-b  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{pdtext1 || ''}</p> 
            <p className='min-h-[50px] p-[10px] text-[20px] font-[Inter] font-[400]'>{pdtext2 || ''}</p> 
          
       </div>

        </div>



{/* meeting agenda table */}


<div className='w-full  lg:px-[65px] px-[20px] xl:translate-y-0 lg:translate-y-0 md:translate-y-[1300px] translate-y-[1500px] overflow-x-auto'>
          
          <div className='mt-[20px] flex  gap-2 '>
          <div className='-ml-[20px] w-[44px] h-[44px] flex items-center justify-center border  border-green bg-white rounded-full'>
            <img src={MeetingAgenda} alt='project information'/>
          </div>
          <h2 className=' font-[Inter] font-[700] text-[30px] leading-[36px] text-green '>Meeting Agenda</h2>
          </div>
          <div className='border-t border-green max-w-[393px] -translate-y-[1px] rounded-l'></div>
  
            <table className='mt-[16px] max-w-[100%] w-full border border-lightClay'>
              <thead className='bg-clay'>
                <tr>
                  <th className='border-b border-r max-w-[20%]  border-lightClay p-[10px] text-[25px] font-[Inter] font-[600]'>Meetings</th>
                  <th className='border-b border-r max-w-[30%]  border-lightClay p-[10px] text-[25px] font-[Inter] font-[600]'>Purpose</th>
                  <th className='border-b border-r max-w-[15%]  border-lightClay p-[10px] text-[25px] font-[Inter] font-[600]'>Medium</th>
                  <th className='border-b border-r max-w-[15%]  border-lightClay p-[10px] text-[25px] font-[Inter] font-[600]'>Frequency</th>
                  <th className='border-b border-r max-w-[20%]  border-lightClay p-[10px] text-[25px] font-[Inter] font-[600]'>Audience</th>
  
                </tr>
  
              </thead>
              <tbody>
                <tr className='h-[50px]'>
                <td className='border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{meeting1 || ''}</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{purpose1 || ''}</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{medium1 ||''}</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{freq1 || ''}</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{aud1 || ''}</td>
                </tr>
  
                <tr className='h-[50px]'>
                <td className='border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{meeting2 ||  ''}</td>
  
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{purpose2 || ''}</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{medium2||''}</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{freq2 || ''}</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{aud2 ||  ''}</td>
  
                </tr>
  
                <tr className='h-[50px]'>
                <td className='border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{meeting3 || ''}</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{purpose3 ||  ''}</td>
  
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{medium3  || ''}</td>
  
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{freq3 || ''}</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{aud3 ||  ''}</td>
                </tr>
  
  
                <tr className='h-[50px]'>
                <td className='border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{meeting4 || ''}</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{purpose4 ||   ''}</td>
  
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{medium4  || ''}</td>
  
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{freq4 || ''}</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{aud4 ||  ''}</td>
                </tr>
  
                <tr className='h-[50px]'>
                <td className=' border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{meeting5 || '' }</td>
                <td className=' text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{purpose5  || ''}</td>
  
                <td className=' text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{medium5  || ''}</td>
  
                <td className=' text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{freq5 || ''}</td>
                <td className=' text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{aud5 ||  ''}</td>
                </tr>
  
  
              </tbody>
                
                  
            </table>
            </div>    
    
    </>
  )
}

export default HeroSection
