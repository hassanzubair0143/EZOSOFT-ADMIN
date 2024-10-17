import React from 'react'
import Achievementicon from '/src/assets/images/achievements.svg'
import Actions from '/src/assets/images/actions-icon.svg'
import OverallStatus from '/src/assets/images/overall-status.svg'
import RiskIcon from '/src/assets/images/risk.svg'
import GanttChart from './GanttChart'
import { useLocation } from 'react-router-dom'

const Financials = () => {
  const location = useLocation();
  const {
     budget,
     mileStone1,mileStone2,
     target1,target2,
     actualDate1,actualDate2,
     manager1,manager2,teamMember,sponser,BDH,BUH,financeManager,
     achevTitle1,achevDesc1,achevTitle2,achevDesc2,
     action1,action2,action3,action4,issue1,issue2,issue3,issue4,
     riskAchie1,riskAchie2,selectedColor1,selectedColor2,
     
  } = location.state || {};


    const getColor = (status)=>{
        switch(status){
            case 'mild':
            return 'bg-[#FFCC00]';
            case 'significant':
                return 'bg-[#FF3B30] text-white';
            case 'minor':
              return 'bg-[#34C759] text-white';
             default:
             return '';
        }
    }
  
  return (
    <>
      <div className='px-[60px] mt-[] w-full pb-[13px]'>
        <h2 className='text-center text-[34px] leading-[40px] font-bold'>Financials</h2>
        <p className='text-center text-[27px] leading-[32px] '>Budget to complete this project is <span className='font-bold'>{budget || '___'}</span></p>
        <div className='w-[100%] border-t mt-[10px] pl-[30px]'></div>
        <div className='flex items-center justify-center bg-orange mt-[10px] '>
         <h2 className='py-[11px] text-[33px] text-center leading-[39px] font-bold font-[Inter] '>Milestone Schedule</h2>
         </div>
         <table className='w-full'>
            <th  className=' text-[25px]  leading-[30px] font-bold bg-[#FFE9B8]  border-black'>Milestone </th>
            <th  className='border-l text-[25px]  leading-[30px] font-bold bg-[#FFE9B8] border-r border-[#CCCCCC]'>Target Completions Date </th>
            <th  className='border-l border-[#CCCCCC] text-[25px]  leading-[30px] font-bold bg-[#FFE9B8]'>Actual Date </th>
            <tbody>
                <tr>
                  <td className=' text-[25px] text-center leading-[30px] border-r border-b border-[#CCCCCC]'>{mileStone1 || 'N/A'}</td>
                  <td className='border-l text-[25px] text-center leading-[30px] border-r border-b border-[#CCCCCC]'>{target1 ||  'N/A'}</td>

                  <td className='border-l text-[25px] text-center leading-[30px] border-b border-[#CCCCCC]'>{actualDate1  || 'N/A'}</td>

                </tr>
                <tr>
                  <td className=' text-[25px] text-center leading-[30px] border-r border-b border-[#CCCCCC]'>{mileStone2  || 'N/A'}</td>
                  <td className='border-l text-[25px] text-center leading-[30px] border-r border-b border-[#CCCCCC]'>{target2  || 'N/A'}</td>
                  <td className='border-l text-[25px] text-center leading-[30px] border-b border-[#CCCCCC]'>  {actualDate2 || 'N/A'}</td>
                  </tr>
            </tbody>
         </table>
          {/*2nd table project team  */}

          <div className='flex mt-[13px]'>
            <div className='w-[50%] text-center border-r border-[#CCCCCC] bg-[#FFE9B8] py-[11px] text-[30px] leading-[36px] font-bold'>Approval/Review Committee</div>
            <div className='w-[50%] text-center bg-[#FFE9B8] py-[11px] text-[30px] leading-[36px] font-bold'>Project Team</div>
            
            
          </div>
          <table className='w-full'>
          
          <tbody>
            <tr>
                <td className='border-r border-b border-[#CCCCCC] text-center text-[25px] leading-[30px]'>project manager</td>
                <td className='border-r border-b border-[#CCCCCC] text-center text-[25px] leading-[30px]'>{manager1  || 'N/A'}</td>

                <td className='border-r border-b border-[#CCCCCC] text-center text-[25px] leading-[30px]'>sponser</td>
                <td className=' border-b border-[#CCCCCC] text-center text-[25px] leading-[30px]'>{sponser  || 'N/A'}</td>

            </tr>
            <tr>
                <td className='border-r border-b border-[#CCCCCC] text-center text-[25px] leading-[30px]'>project manager</td>
                <td className='border-r border-b border-[#CCCCCC] text-center text-[25px] leading-[30px]'>{manager2   || 'N/A'}</td>

                <td className='border-r border-b border-[#CCCCCC] text-center text-[25px] leading-[30px]'>Business Division Head</td>
                <td className=' border-b border-[#CCCCCC] text-center text-[25px] leading-[30px]'>{BDH || 'N/A'}</td>
            </tr>
            <tr>
                <td className='border-r border-b border-[#CCCCCC] text-center text-[25px] leading-[30px] ' rowSpan={2}>Team Member</td>
                
                
                <td className='border-r border-b border-[#CCCCCC] text-center text-[25px] leading-[30px]' rowSpan={2}>{teamMember || 'N/A'}</td>
                <td className='border-r border-b border-[#CCCCCC] text-center text-[25px] leading-[30px]'>Business Unit Head</td>
                <td className=' border-b border-[#CCCCCC] text-center text-[25px] leading-[30px]'>{BUH  || 'N/A'}</td>

            </tr>
            <tr>
                
                
                
                <td className='border-r border-b border-[#CCCCCC] text-center text-[25px] leading-[30px]'>Finance Manager</td>
                <td className=' border-b border-[#CCCCCC] text-center text-[25px] leading-[30px]'>{financeManager || 'N/A'}</td>
            </tr>
          </tbody>

          </table>

          
         <div className='flex w-full gap-[50px] mt-[10px]'>
               {/* left div */}
        <div className='w-[50%]'>
         <div className='bg-[#FFE9B8] flex gap-[50px]'>
          <div className='w-[57px] h-[57px] bg-black flex items-center justify-center'>
          <img src={Achievementicon} alt='' className=''/>
          </div>
          <div className='flex items-center justify-center'>
          <h2 className='w-full text-[33px]  leading-[39px] font-bold font-[Inter]'>Key Achievement of Last Week</h2>
          </div>
        </div>
        
         <div className='mt-[18px]'>
         <div className='flex gap-4  mt-[11px] pl-[18px]'>
            <div className='mt-[10px] max-w-[13px] w-full h-[13px]  border border-orange rounded-full'></div>
            <p className='text-[25px] leading-[30px] font-[500]'>{achevTitle1  || 'N/A'}</p>

          </div>
          <p className=' pl-[45px] text-[25px]  leading-[30px]'>{achevDesc1 || 'N/A'}</p>

            <div className='flex gap-4  mt-[11px] pl-[18px]'>
            <div className='mt-[10px] max-w-[13px] w-full h-[13px]  border border-orange rounded-full'></div>
            <p className='text-[25px] leading-[30px] font-[500]'>{achevTitle2 || 'N/A'}</p>
          </div>
          <p className=' pl-[45px] text-[25px]  leading-[30px]'>{achevDesc2   || 'N/A'}</p>

         </div>
        </div>
           {/* right side div */}
           <div className='w-[50%]'>
         <div className='bg-[#FFE9B8] flex gap-[50px]'>
          <div className='w-[57px] h-[57px] bg-black flex items-center justify-center'>
          <img src={Actions} alt='' className=''/>
          </div>
          <div className='flex items-center justify-center'>
          <h2 className='w-full text-[33px]  leading-[39px] font-bold font-[Inter]'>Key Actions of Next Week </h2>
          </div>
        </div>
        <table  className='w-full '>

            <thead className='bg-[#EFF3F3]'>
                <th className='text-[20px] leading-[24px] text-center w-[57px] p-2  border-r  border-[#CCCCCC] font-bold'>No.</th>
                <th className=' w-[50%] text-[20px] leading-[24px] text-center p-2  border-r  border-[#CCCCCC] font-bold'>Actions</th>
                <th  className='w-[50%] text-[20px] leading-[24px] text-center  p-2 border-[#CCCCCC] font-bold'  >Issue to Discuss</th>
            </thead>
            <tbody>
                <tr>
                    <td className='text-[16px] leading-[20px] text-center border-b border-[#CCCCCC] border-r'>1</td>
                    <td className='text-[16px] leading-[20px] text-center border-b border-[#CCCCCC] border-r'>{action1 ||  'N/A'}</td>

                    <td className='text-[16px] leading-[20px] text-center border-b border-[#CCCCCC] '>{issue1  || 'N/A'}</td>

                </tr>
                <tr>
                    <td className='text-[16px] leading-[20px] text-center border-b border-[#CCCCCC] border-r'>2</td>
                    <td className='text-[16px] leading-[20px] text-center border-b border-[#CCCCCC] border-r'>{action2 ||  'N/A'}</td>
                    <td className='text-[16px] leading-[20px] text-center border-b border-[#CCCCCC] '>{issue2  || 'N/A'}</td>
                </tr>
                <tr>
                    <td className='text-[16px] leading-[20px] text-center border-b border-[#CCCCCC] border-r'>3</td>
                    <td className='text-[16px] leading-[20px] text-center border-b border-[#CCCCCC] border-r'>{action3 ||  'N/A'}</td>
                    <td className='text-[16px] leading-[20px] text-center border-b border-[#CCCCCC] '>{issue3  || 'N/A'}</td>
                </tr>
                <tr>
                    <td className='text-[16px] leading-[20px] text-center border-b border-[#CCCCCC] border-r'>4</td>
                    <td className='text-[16px] leading-[20px] text-center border-b border-[#CCCCCC] border-r'>{action4 ||  'N/A'}</td>
                    <td className='text-[16px] leading-[20px] text-center border-b border-[#CCCCCC] '>{issue4  || 'N/A'}</td>
                </tr>
            </tbody>
        </table>

        
        
        </div>
         </div>

         {/* bottom div */}
         <div className='flex w-full gap-[50px] mt-[10px]'>
        <div className='w-[50%]'>
            <div className='bg-[#FFE9B8] flex gap-[20px]'>
             <div className='w-[57px] h-[57px] bg-black flex items-center justify-center'>
             <img src={OverallStatus} alt='' className=''/>
             </div>
             <div className='flex items-center justify-center'>
             <h2 className='w-full text-[33px]  leading-[39px] font-bold font-[Inter]'>Overall Status Outline</h2>
             </div>
           </div>
           <GanttChart/>
        </div>
       
       {/* bottom right div */}
       <div className='w-[50%]'>
            <div className='bg-[#FFE9B8] flex gap-[50px]'>
             <div className='w-[57px] h-[57px] bg-black flex items-center justify-center'>
             <img src={RiskIcon} alt='' className=''/>
             </div>
             <div className='flex items-center justify-center'>
             <h2 className='w-full text-[33px]  leading-[39px] font-bold font-[Inter]'>Risks to be Highlighted</h2>
             </div>
           </div>
           <table  className='w-full '>

            <thead className='bg-[#EFF3F3]'>
                <th className='text-[20px] leading-[24px] text-center w-[57px] p-2  border-r  border-[#CCCCCC] font-bold'>No.</th>
                <th className=' w-[50%] text-[20px] leading-[24px] text-center p-2  border-r  border-[#CCCCCC] font-bold'>Actions</th>
                <th  className='w-[50%] text-[20px] leading-[24px] text-center  p-2 border-[#CCCCCC] font-bold'  >Severity</th>
            </thead>
            <tbody>
                <tr>
                    <td className='text-[16px] leading-[20px] text-center border-b border-[#CCCCCC] border-r'>1</td>
                    <td className='text-[16px] leading-[20px] text-center border-b border-[#CCCCCC] border-r'>{riskAchie1  || 'N/A'}</td>

                    <td className='text-[16px] py-[20px] flex items-center justify-center border-b border-[#CCCCCC] '><div className={`w-[22px] h-[22px] rounded-full ${getColor(selectedColor1)}`}></div></td>
                </tr>
                <tr>
                    <td className='text-[16px] leading-[20px] text-center border-b border-[#CCCCCC] border-r'>2</td>
                    <td className='text-[16px] leading-[20px] text-center border-b border-[#CCCCCC] border-r'>{riskAchie2   || 'N/A'}</td>

                    <td className='text-[16px] py-[20px] flex items-center justify-center border-b border-[#CCCCCC] '><div className={`w-[22px] h-[22px] rounded-full ${getColor(selectedColor2)}`}></div></td>
                    
                </tr>
                
            </tbody>
        </table>

        <div className='flex justify-end gap-[40px] mt-[26px] pr-[50px]'>
            <div className='flex gap-2'>
             <div className='w-[22px] h-[22px] rounded-full bg-[#FF3B30]'></div>
             <h2>Significant</h2>
            </div>
            <div className='flex gap-2'>
             <div className='w-[22px] h-[22px] rounded-full bg-[#FFCC00]'></div>
             <h2>Mild</h2>
            </div>
            <div className='flex gap-2'>
             <div className='w-[22px] h-[22px] rounded-full bg-[#34C759]'></div>
             <h2>Minor</h2>
            </div>
        </div>
        </div>

        </div>
       
      </div>
      <div className='h-[14px] w-full bg-[#0C1C2C] '></div>
      <div className='h-[3px] w-full  '></div>
    </>
  )
}

export default Financials
