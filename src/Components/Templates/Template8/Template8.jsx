import { Description } from '@mui/icons-material';
import React from 'react'
import { useLocation } from 'react-router-dom';

const Template8 = () => {
  const location = useLocation();
  const {
    title,engineer,preparedBy,date,summary,
    info,cost,changes,finalCost,
    info2,cost2,changes2,finalCost2,
    deadline,completion,eventdesc,
    deadline2,completion2,eventdesc2,
    deadline3,completion3,eventdesc3,
    construction,equipment,adminis,other,TotalAmount,
    source1,amount1,source2,amount2,source3,amount3,source4,amount4,totalSourceAmount,
  } = location.state || [];
  return (
    <>
      <div className='flex w-full px-[21px] pb-[23px]'>
        <div className='w-[50%] mt-[23px] pr-[27px] '>
          <h2 className='font-[500] leading-[26px] text-[22px]'>ENGINEERING PROJECT CLOSEOUT REPORT TEMPLATE</h2>
          <div className='mt-[20px]'>
          <label htmlFor='title' className='font-[Inter] text-[9px] font-[500]'>PROJECT TITLE</label>
          <div className='w-full min-h-[46px] outline-none border border-[#58595B] p-2 bg-[#F7F9FB]'>{title || ''}</div>
         
          </div>
        
          <div className='mt-[20px] w-full flex gap-7'>
         <div className='w-[40%]'>
         <label htmlFor='manager' className='font-[Inter] text-[9px] font-[500]'>PROJECT ENGINEER</label>
         <div className='w-full min-h-[46px] outline-none border border-[#58595B] p-2 bg-[#F7F9FB]'>{engineer || ''}</div>
         </div>
         <div className='w-[60%] flex'>
         <div className='w-[70%]'>
         <label htmlFor='preparedBy' className='font-[Inter] text-[9px] font-[500]'>Prepared By</label>
         <div className='w-full min-h-[46px] outline-none border border-[#58595B] p-2 bg-[#F7F9FB]'>{preparedBy || ''}</div>
         </div>
         <div className='w-[30%]'>
         <label htmlFor='engineer' className='font-[Inter] text-[9px] font-[500]'>DATE PREPARED</label>
         <div className='w-full min-h-[46px] outline-none border border-[#58595B] p-2 bg-[#F7F9FB]'>{date || ''}</div>
         </div>
         
         </div>
          </div>
          <div className='mt-[20px]'>
          <label htmlFor='title' className='font-[Inter]  font-[500]'>PROJECT SUMMARY</label>
          <div className='w-full min-h-[90px] outline-none border border-[#58595B] p-2 bg-[#F7F9FB]'>{summary || ''}</div>
          </div>
          <h2 className='font-[500] text-[14px] font-[Inter] mt-[20px]'>CONTRACT DATA</h2>
          <div className=' flex gap-[20px] mt-2'>
         
            <div className='w-full'>
              
              <div className='w-full border border-[#58595B] '>
                <div className='h-[23px]  border-[#58595B] bg-[#D5DCE4] flex items-center px-3'><h2 className='font-[Inter] text-[9px] font-[500]'>CONSULTANT CONTRACT INFO</h2></div>
                <div className='min-h-[40px] border-t border-[#58595B] '>{info  || ''}</div>

               <div className='flex w-full'>
                    <div className='w-full border-r border-[#58595B]'>
                           <div className='h-[23px] border-t border-[#58595B] bg-[#D5DCE4] flex items-center justify-center px-3 w-full '><h2 className='font-[Inter] text-[9px] font-[500]'>INITIAL COST</h2></div>
                           <div className='min-h-[40px] border-t border-[#58595B] '>{cost || ''}</div>
                    </div>
                    <div className='w-full border-r border-[#58595B]'>
                           <div className='h-[23px] border-t border-[#58595B] bg-[#D5DCE4] flex items-center justify-center px-3 w-full '><h2 className='font-[Inter] text-[9px] font-[500] text-nowrap'>TOTAL CHANGES</h2></div>
                           <div className='min-h-[40px] border-t border-[#58595B] '>{changes || ''}</div>
                    </div>
                    <div className='w-full '>
                           <div className='h-[23px] border-t border-[#58595B] bg-[#D5DCE4] flex items-center justify-center px-3 w-full '><h2 className='font-[Inter] text-[9px] font-[500] text-center'>FINAL COST</h2></div>
                           <div className='min-h-[40px] border-t border-[#58595B] '>{finalCost || ''}</div>
                    </div>
               </div>
              </div>
            </div>

            <div className='w-full'>
            <div className='w-full border border-[#58595B] '>
                <div className='h-[23px] bg-[#F2F2F2] flex items-center px-3'><h2 className='font-[Inter] text-[9px] font-[500]'>CONSTRUCTION CONTRACT INFO</h2></div>
                <div className='min-h-[40px] border-t border-[#58595B] '>{info2 || ''}</div>
               <div className='flex w-full'>
                    <div className='w-full border-r border-[#58595B]'>
                           <div className='h-[23px] border-t border-[#58595B] bg-[#F2F2F2] flex items-center justify-center px-3 w-full '><h2 className='font-[Inter] text-[9px] font-[500]'>INITIAL COST</h2></div>
                           <div className='min-h-[40px] border-t border-[#58595B] '>{cost2 || ''}</div>
                    </div>
                    <div className='w-full border-r border-[#58595B]'>
                           <div className='h-[23px] border-t border-[#58595B] bg-[#F2F2F2] flex items-center justify-center px-3 w-full '><h2 className='font-[Inter] text-[9px] font-[500] text-nowrap'>TOTAL CHANGES</h2></div>
                           <div className='min-h-[40px] border-t border-[#58595B] '>{changes2 || ''}</div>
                    </div>
                    <div className='w-full '>
                           <div className='h-[23px] border-t border-[#58595B] bg-[#F2F2F2] flex items-center justify-center px-3 w-full '><h2 className='font-[Inter] text-[9px] font-[500] text-center'>FINAL COST</h2></div>
                           <div className='min-h-[40px] border-t border-[#58595B] '>{finalCost2 || ''}</div>
                    </div>
               </div>
              </div>
            </div>
          </div>

          <h2 className=' mt-[20px] font-[500] text-[14px] font-[Inter]'>PROJECT SCHEDULE</h2>

          <table className='w-full mt-2'>
             <thead>
              <tr>
                <th className='border border-[#58595B] bg-[#D5DCE4] text-[12px] py-2 font-[Inter] font-[500] w-[20%]'>INITIAL DEADLINE</th>
                <th className='border border-[#58595B] bg-[#D5DCE4] text-[12px] font-[Inter] font-[500] w-[20%]'>ACTUAL COMPLETION</th>
                <th className='border border-[#58595B] bg-[#D5DCE4] text-[12px] font-[Inter] font-[500] w-[60%] pl-2 text-start'>EVENT DESCRIPTION</th>
              </tr>
             </thead>
             <tbody>
               <tr>
                 <td className='h-[37px] border-l border-b border-r border-[#58595B] text-[12px] font-[Inter]'>{deadline || ''}</td>
                 <td className='h-[37px] border-b border-r border-[#58595B] text-[12px] font-[Inter]'>{completion || ''}</td>
                 <td className='h-[37px] border-b border-r border-[#58595B] text-[12px] font-[Inter]'>{ eventdesc || ''}</td>
               </tr>
               <tr>
                 <td className='h-[37px] border-l border-b border-r border-[#58595B] text-[12px] font-[Inter]'>{deadline2 || ''}</td>
                 <td className='h-[37px] border-b border-r border-[#58595B] text-[12px] font-[Inter]'>{completion2 || ''}</td>
                 <td className='h-[37px] border-b border-r border-[#58595B] text-[12px] font-[Inter]'>{eventdesc2  || ''}</td>
               </tr>
               <tr>
                 <td className='h-[37px] border-l border-b border-r border-[#58595B] text-[12px] font-[Inter]'>{deadline3 || ''}</td>
                 <td className='h-[37px] border-b border-r border-[#58595B] text-[12px] font-[Inter]'>{completion3 || ''}</td>
                 <td className='h-[37px] border-b border-r border-[#58595B] text-[12px] font-[Inter]'>{eventdesc3  || ''}</td>
               </tr>
             </tbody>
          </table>

          <h2 className=' mt-[20px] font-[500] text-[14px] font-[Inter]'>FINAL PROJECT COSTS</h2>
          <table className='w-full mt-2'>
            <thead>
              <tr>
                
                <th className='border border-[#58595B] bg-[#D5DCE4] text-[12px] font-[Inter] font-[500] w-[70%] '></th>
                <th className='border border-[#58595B] bg-[#D5DCE4] text-[12px] font-[Inter] font-[500] w-[30%] '>Amount</th>
              </tr>
            </thead>
            <tbody>
               <tr>
                 <td className=' border-l border-b border-r border-[#58595B] text-[9px] font-[500] font-[Inter] p-[10px]'>Construction</td>
                 <td className=' border-l border-b border-r border-[#58595B] text-[12px] font-[Inter] pl-[20px]'>{construction || ''}</td>
               </tr>
               <tr>
                 <td className=' border-l border-b border-r border-[#58595B] text-[9px] font-[500] font-[Inter] p-[10px]'>Equipment</td>
                 <td className=' border-l border-b border-r border-[#58595B] text-[12px] font-[Inter] pl-[20px]'>{equipment || ''}</td>
               </tr>
               <tr>
                 <td className=' border-l border-b border-r border-[#58595B] text-[9px] font-[500] font-[Inter] p-[10px]'>Administrative</td>
                 <td className=' border-l border-b border-r border-[#58595B] text-[12px] font-[Inter] pl-[20px]'>{adminis || ''}</td>
               </tr>
               <tr>
                 <td className=' border-l border-b border-r border-[#58595B] text-[9px] font-[500] font-[Inter] p-[10px]'>Other</td>
                 <td className=' border-l border-b border-r border-[#58595B] text-[12px] font-[Inter] pl-[20px]'>{other || ''}</td>
               </tr>

               <tr>
                 <td className=' border-r border-[#58595B] text-[9px] font-[500] font-[Inter] p-[10px] text-end'>Total</td>
                 <td className=' border-l border-b border-r border-[#58595B] text-[12px] font-[Inter] pl-[20px]'>{TotalAmount || ''}</td>
               </tr>
            </tbody>
          </table>


        </div>
{/* line */}
 <div className='border-l border-black mt-[55px]'></div>
{/* left side */}
               <div className='mt-[27px] w-[50%] pl-[27px] mt-[60px]'>
               <h2 className='text-[14px] font-[Inter] font-[500]'>PROJECT FUNDING SOURCES</h2>
               <table className='w-full mt-2'>
            <thead>
              <tr>
                
                   <th className='border border-[#58595B] bg-[#D5DCE4] text-[12px] font-[Inter] font-[500] w-[70%] '></th>
                   <th className='border border-[#58595B] bg-[#D5DCE4] text-[12px] font-[Inter] font-[500] w-[30%] '>Amount</th>
              </tr>
            </thead>
             <tbody>
                    <tr>
                     <td className='h-[37px] border-l border-b border-r border-[#58595B] text-[9px] font-[500] font-[Inter] p-[10px]'>{source1  || ''}</td>

                     <td className=' border-l border-b border-r border-[#58595B] text-[12px] font-[Inter] pl-[20px]'>{amount1  || ''}</td>

                   </tr>
                   <tr>
                     <td className='h-[37px] border-l border-b border-r border-[#58595B] text-[9px] font-[500] font-[Inter] p-[10px]'>{source2 || ''}</td>
                     <td className=' border-l border-b border-r border-[#58595B] text-[12px] font-[Inter] pl-[20px]'>{amount2 || ''}</td>
                   </tr>
                   <tr>
                     <td className='h-[37px] border-l border-b border-r border-[#58595B] text-[9px] font-[500] font-[Inter] p-[10px]'>{source3 || ''}</td>
                     <td className=' border-l border-b border-r border-[#58595B] text-[12px] font-[Inter] pl-[20px]'>{amount3  || ''}</td>

                   </tr>
                   <tr>
                     <td className='h-[37px] border-l border-b border-r border-[#58595B] text-[9px] font-[500] font-[Inter] p-[10px]'>{source4 || ''}</td>
                     <td className=' border-l border-b border-r border-[#58595B] text-[12px] font-[Inter] pl-[20px]'>{amount4  || ''}</td>

                   </tr>
    
                   <tr>
                     <td className='h-[37px] border-r border-[#58595B] text-[9px] font-[500] font-[Inter] p-[10px] text-end'>Total</td>
                     <td className=' border-l border-b border-r border-[#58595B] text-[12px] font-[Inter] pl-[20px]'>{totalSourceAmount  || ''}</td>

                   </tr>
              </tbody>
               </table>
              
              <h2 className='text-[14px] font-[Inter] font-[500] mt-[20px]'>PROJECT DBE UTILIZATION</h2>
               <table className='w-full mt-2'>
             <thead>
              <tr>
                <th className='border border-[#58595B] bg-[#D5DCE4] text-[12px] py-2 font-[Inter] font-[500]'>INITIAL DEADLINE</th>
                <th className='border border-[#58595B] bg-[#D5DCE4] text-[12px] font-[Inter] font-[500] '>ACTUAL COMPLETION</th>
                <th className='border border-[#58595B] bg-[#D5DCE4] text-[12px] font-[Inter] font-[500] '>EVENT DESCRIPTION</th>
              </tr>
             </thead>
             <tbody>
               <tr>
                 <td className='h-[37px] border-l border-b border-r border-[#58595B] text-[12px] font-[Inter]'></td>
                 <td className='h-[37px] border-b border-r border-[#58595B] text-[12px] font-[Inter]'></td>
                 <td className='h-[37px] border-b border-r border-[#58595B] text-[12px] font-[Inter]'></td>
               </tr>
              
             </tbody>
          </table>

          <h2 className='text-[14px] font-[Inter] font-[500] mt-[20px]'>ATTACHED DOCUMENTS</h2>
               <table className='w-full mt-2'>
            
             <tbody>
               <tr>
                 <td className='h-[37px] bg-[#F7F9FB] border border-[#58595B] text-[12px] font-[Inter]'></td>

               </tr>
               <tr>
                 <td className='h-[37px] bg-[#F7F9FB] border border-[#58595B] text-[12px] font-[Inter]'></td>
                
               </tr>
               <tr>
                 <td className='h-[37px] bg-[#F7F9FB] border border-[#58595B] text-[12px] font-[Inter]'></td>
                 
               </tr>
               <tr>
                 <td className='h-[37px] bg-[#F7F9FB] border border-[#58595B] text-[12px] font-[Inter]'></td>
               
               </tr>
              
             </tbody>
          </table>
          
          <h2 className='text-[14px] font-[Inter] font-[500] mt-[20px]'>FINAL DELIVERABLES</h2>
               <table className='w-full mt-2'>
            
             <tbody>
               <tr>
                 <td className='h-[46px]  border border-[#58595B] text-[12px] font-[Inter]'></td>

               </tr>
               <tr>
                 <td className='h-[46px]  border border-[#58595B] text-[12px] font-[Inter]'></td>
                
               </tr>
               <tr>
                 <td className='h-[46px]  border border-[#58595B] text-[12px] font-[Inter]'></td>
                 
               </tr>
               <tr>
                 <td className='h-[46px]  border border-[#58595B] text-[12px] font-[Inter]'></td>
               
               </tr>
              
             </tbody>
          </table>

          <h2 className='text-[14px] font-[Inter] font-[500] mt-[20px]'>PROJECT ACCEPTANCE</h2>
               <table className='w-full mt-2'>
             <thead>
              <tr>
                <th className='border border-[#58595B] bg-[#D5DCE4] text-[12px] py-2 font-[Inter] font-[500] w-[22%]'>NAME</th>
                <th className='border border-[#58595B] bg-[#D5DCE4] text-[12px] font-[Inter] font-[500] w-[40%] '>TITLE</th>
                <th className='border border-[#58595B] bg-[#D5DCE4] text-[12px] font-[Inter] font-[500] w-[22%]'>SIGNATURE</th>
                <th className='border border-[#58595B] bg-[#D5DCE4] text-[12px] font-[Inter] font-[500] w-[16%]'>DATE</th>
              </tr>
             </thead>
             <tbody>
               <tr>
                 <td className='h-[43px] border-l border-b border-r border-[#58595B] text-[12px] font-[Inter]'></td>
                 <td className='h-[43px] border-b border-r border-[#58595B] text-[12px] font-[Inter]'></td>
                 <td className='h-[43px] border-b border-r border-[#58595B] text-[12px] font-[Inter]'></td>
                 <td className='h-[43px] border-b border-r border-[#58595B] text-[12px] font-[Inter]'></td>
               </tr>
              
             </tbody>
          </table>
          
               </div>


      </div>
    </>
  )
}

export default Template8;
