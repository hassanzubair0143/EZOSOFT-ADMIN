import React from 'react'
import { useLocation } from 'react-router-dom';

const Body = () => {
  const location = useLocation();
  const { 
    clientName,clientPhone,clientEmail,clientAdress,
    client,brand,product,begindate,
    business,technical,service,security,solution,
    holderId1, holderName1, holderRole1,
    holderId2, holderName2, holderRole2,
    holderId3, holderName3, holderRole3,
    des1,des2,des3,des4,des5,cost1,cost2,cost3,cost4,cost5,
    dd1,dd2,dd3,dd4,task1,task2,task3,task4,owner1,owner2,owner3,owner4,
    owner, ownerSign, ownerdate,
    manager, managerSign, managerDate,
    sponser, sponserSign, sponserDate,
    stakeholder, stakeSign, stakeDate,
  } = location.state || {};



  return (
    <>
      <div className='w-full flex px-[30px] pb-[40px] gap-[30px]'>
      {/* left side div */}
       <div className='w-[50%]'>
         {/* organization */}
         <h2 className='text-lightOrange text-[40px] font-[700] mt-[30px] ml-[15px]'>Organization</h2>
         
        <div className='border border-[#58595B] mt-[20px]'>
        <div className='flex w-full border-b border-[#58595B]'>
            <p className='w-[50%] bg-creamy p-[24px] text-[26px] font-[Inter] font-[600]'>Client Name</p>
            <p className='w-[50%] border-l border-[#58595B] p-[30px] text-[26px] font-[Inter] font-[400]'><ul className='list-disc'>
              <li>{clientName || 'N/A'}</li>
            </ul></p>
            </div>

            <div className='flex w-full border-b border-[#58595B]'>
            <p className='w-[50%] bg-creamy p-[24px] text-[26px] font-[Inter] font-[600]'>Client Phone</p>
            <p className='w-[50%] border-l border-[#58595B] p-[30px] text-[26px] font-[Inter] font-[400]'><ul className='list-disc'>
              <li>{clientPhone}</li>
            </ul></p>
            </div>

            <div className='flex w-full border-b border-[#58595B]'>
            <p className='w-[50%] bg-creamy p-[24px] text-[26px] font-[Inter] font-[600]'>Client Email</p>
            <p className='w-[50%] border-l border-[#58595B] p-[30px] text-[26px] font-[Inter] font-[400]'><ul className='list-disc'>
              <li>{clientEmail}</li>

            </ul></p>
            </div>

            <div className='flex w-full border-b-4 border-[#AF8D63]'>
            <p className='w-[50%] bg-creamy p-[24px] text-[26px] font-[Inter] font-[600]'>Client Mailing Adress</p>
            <p className='w-[50%] border-l border-[#58595B] p-[30px] text-[26px] font-[Inter] font-[400]'><ul className='list-disc'>
              <li>{clientAdress}</li>
            </ul></p>
            </div>
        </div>
        
         {/* Projects */}
         <h2 className='text-lightOrange text-[40px] font-[700] mt-[16px] ml-[15px]'>Projects</h2>
         
        <div className='border border-[#58595B] mt-[20px]'>
        <div className='flex  border-b border-[#58595B]'>
            <p className='w-[30%] bg-creamy pl-[25px] py-[35px] text-[26px] font-[Inter] font-[600]'>project Manager</p>
            <p className='w-[70%]  bg-creamy border-l  border-[#58595B] text-nowrap p-[35px] text-[26px] font-[Inter] font-[600]'>Introduction of New Product Development</p>
            </div>

            <div className='flex w-full border-b border-[#58595B]'>
            <p className='w-[30%] pl-[24px] py-[10px] text-[25px] font-[Inter] font-[400]'>Client</p>
            <p className='w-[70%] border-l border-[#58595B] pl-[30px] py-[10px] text-[25px] font-[Inter] font-[400]'>{client ||  'N/A'}</p>

            </div>

            <div className='flex w-full border-b border-[#58595B]'>
            <p className='w-[30%] pl-[24px] py-[10px] text-[25px] font-[Inter] font-[400]'>Brand</p>
            <p className='w-[70%] border-l border-[#58595B] pl-[30px] py-[10px] text-[25px] font-[Inter] font-[400]'>{brand ||  'N/A'}</p>

            </div>

            <div className='flex w-full border-b border-[#58595B]'>
            <p className='w-[30%] pl-[24px] py-[10px] text-[25px] font-[Inter] font-[400]'>Product</p>
            <p className='w-[70%] border-l border-[#58595B] pl-[30px] py-[10px] text-[25px] font-[Inter] font-[400]'>{product || 'N/A'}</p>
            </div>

            <div className='flex w-full border-b-4 border-[#AF8D63]'>
            <p className='w-[30%] pl-[24px] py-[10px] text-[25px] font-[Inter] font-[400]'>Begin Date</p>
            <p className='w-[70%] border-l border-[#58595B] pl-[30px] py-[10px] text-[25px] font-[Inter] font-[400]'>{begindate || 'N/A'}</p>
            </div>
        </div>

         {/* Goal */}
         <h2 className='text-lightOrange text-[40px] font-[700] mt-[16px] ml-[15px]'>Goal</h2>
         
        <div className='border border-[#58595B] mt-[20px]'>
        <div className='flex w-full border-b border-[#58595B]'>
            <p className='w-[100%] bg-creamy p-[24px] text-[24px] leading-[29px] font-[Inter] font-[600]'>Introduction of New Product to attract and
            retain customers</p>
            </div>

            <div className='flex w-full border-b border-[#58595B]'>
            <p className='w-[50%]  pl-[24px] py-[10px] text-[26px] font-[Inter] font-[400]'>Service</p>
            <p className='w-[50%] border-l border-[#58595B] pl-[30px] py-[10px] text-[26px] font-[Inter] font-[400]'><ul className='list-disc'>
              <li>{service || 'N/A'}</li>
            </ul></p>
            </div>

            <div className='flex w-full border-b border-[#58595B]'>
            <p className='w-[50%]  pl-[24px] py-[10px] text-[26px] font-[Inter] font-[400]'>Business</p>
            <p className='w-[50%] border-l border-[#58595B] pl-[30px] py-[10px] text-[26px] font-[Inter] font-[400]'><ul className='list-disc'>
              <li>{business || 'N/A'}</li>
            </ul></p>
            </div>

            <div className='flex w-full border-b border-[#58595B]'>
            <p className='w-[50%]  pl-[24px] py-[10px] text-[26px] font-[Inter] font-[400]'>Solition</p>
            <p className='w-[50%] border-l border-[#58595B] pl-[30px] py-[10px] text-[26px] font-[Inter] font-[400]'><ul className='list-disc'>
              <li>{solution || 'N/A'}</li>
            </ul></p>
            </div>

            <div className='flex w-full border-b border-[#58595B]'>
            <p className='w-[50%]  pl-[24px] py-[10px] text-[26px] font-[Inter] font-[400]'>Technical</p>
            <p className='w-[50%] border-l border-[#58595B] pl-[30px] py-[10px] text-[26px] font-[Inter] font-[400]'><ul className='list-disc'>
              <li>{technical || 'N/A'}</li>
            </ul></p>
            </div>

            <div className='flex w-full border-b border-[#58595B]'>
            <p className='w-[50%]  pl-[24px] py-[10px] text-[26px] font-[Inter] font-[400]'>Service</p>
            <p className='w-[50%] border-l border-[#58595B] pl-[30px] py-[10px] text-[26px] font-[Inter] font-[400]'><ul className='list-disc'>
              <li>{service || 'N/A'}</li>
            </ul></p>
            </div>

            <div className='flex w-full border-b-4 border-[#AF8D63]'>
            <p className='w-[50%]  pl-[24px] py-[10px] text-[26px] font-[Inter] font-[400]'>Security</p>
            <p className='w-[50%] border-l border-[#58595B] pl-[30px] py-[10px] text-[26px] font-[Inter] font-[400]'><ul className='list-disc'>
              <li>{security || 'N/A'}</li>
            </ul></p>
            </div>

        </div>


         {/* Stakeholders */}
         <h2 className='text-lightOrange text-[40px] font-[700] mt-[16px] ml-[15px]'>Stakeholders</h2>
         
        <div className='border border-[#58595B] mt-[20px]'>
        <div className='flex  border-b border-[#58595B]'>
            <p className='w-[30%] bg-creamy pl-[22px] py-[35px] text-[26px] font-[Inter] font-[600]'>ID</p>
            <p className='w-[30%]  bg-creamy border-l  border-[#58595B] text-nowrap p-[35px] text-[26px] font-[Inter] font-[600]'>Name & Title</p>    
            <div className='w-[40%]  bg-creamy border-l  border-[#58595B]  text-[26px] p-[35px] font-[Inter] font-[600]'>Role/Responsibilities</div>    
        </div>

            <div className='flex w-full border-b border-[#58595B]'>
            <p className='w-[30%] pl-[44px] py-[15px] text-[25px] font-[Inter] font-[400]'><ul className='list-disc'> <li>{holderId1 ||"N/A"}</li></ul></p>
            <p className='w-[30%] border-l border-[#58595B] pl-[50px]  py-[15px]  text-[25px] font-[Inter] font-[400]'><ul className='list-disc'><li>{holderName1 || 'N/A'}</li></ul></p>
            <p className='w-[40%] border-l border-[#58595B] pl-[50px]  py-[15px] text-[25px] font-[Inter] font-[400]'><ul className='list-disc'> <li> {holderRole1 || 'N/A'} </li></ul></p>
            </div>

            <div className='flex w-full border-b border-[#58595B]'>
            <p className='w-[30%] pl-[44px]  py-[15px]  text-[25px] font-[Inter] font-[400]'><ul className='list-disc'> <li>{holderId2 || 'N/A'}</li></ul></p>
            <p className='w-[30%] border-l border-[#58595B] pl-[50px]  py-[15px]  text-[25px] font-[Inter] font-[400]'><ul className='list-disc'><li>{holderName2 || 'N/A'}</li></ul></p>
            <p className='w-[40%] border-l border-[#58595B] pl-[50px]   py-[15px] text-[25px] font-[Inter] font-[400]'><ul className='list-disc'> <li>{holderRole2 || 'N/A'} </li></ul></p>
            </div>

            <div className='flex w-full border-b-4 border-[#AF8D63]'> 
            <p className='w-[30%] pl-[44px]  py-[15px]  text-[25px] font-[Inter] font-[400]'><ul className='list-disc'> <li>{holderId3 || 'N/A'}</li></ul></p>
            <p className='w-[30%] border-l border-[#58595B] pl-[50px]  py-[15px]  text-[25px] font-[Inter] font-[400]'><ul className='list-disc'><li>{holderName3 || 'N/A'}</li></ul></p>
            <p className='w-[40%] border-l border-[#58595B] pl-[50px]  py-[15px]  text-[25px] font-[Inter] font-[400]'><ul className='list-disc'> <li>{holderRole3 || 'N/A'}</li></ul></p>
            </div>
        </div>

       </div>

     {/* right side div */}
     <div className='w-[50%]'>
         
         {/* estimated cost */}
         <h2 className='text-lightOrange text-[40px] font-[700] mt-[29px] ml-[15px]'>Estimated Cost</h2>
         
        <div className='border border-[#58595B] mt-[20px]'>
        <div className='flex  border-b border-[#58595B]'>
            <p className='w-[40%] bg-creamy pl-[22px] py-[13px] text-[26px] font-[Inter] font-[600]'>Expenses</p>
            <p className='w-[40%]  bg-creamy border-l  border-[#58595B] text-nowrap pl-[22px] py-[13px] text-[26px] font-[Inter] font-[600]'>Description</p>    
            <div className='w-[20%]  bg-creamy border-l  border-[#58595B]  text-[26px] pl-[22px] py-[13px] font-[Inter] font-[600]'>Cost</div>    
        </div>

            <div className='flex w-full border-b border-[#58595B]'>
            <p className='w-[40%] pl-[44px] py-[12px] text-[26px] font-[Inter] font-[400]'><ul className='list-disc'> <li>Internal Labour</li></ul></p>
            <p className='w-[40%] border-l border-[#58595B] pl-[50px] py-[12px]  text-[26px] font-[Inter] font-[400]'><ul className='list-disc'><li>{des1 || 'N/A'}</li></ul></p>
            <p className='w-[20%] border-l border-[#58595B] pl-[24px] py-[12px]   text-[26px] font-[Inter] font-[400]'> {cost1 || 'N/A'} </p>
            </div>

            <div className='flex w-full border-b border-[#58595B]'>
            <p className='w-[40%] pl-[44px] py-[12px] text-[26px] font-[Inter] font-[400]'><ul className='list-disc'> <li>External Labour</li></ul></p>
            <p className='w-[40%] border-l border-[#58595B] pl-[50px] py-[12px]  text-[26px] font-[Inter] font-[400]'><ul className='list-disc'><li>{des2 || 'N/A'}</li></ul></p>
            <p className='w-[20%] border-l border-[#58595B] pl-[24px] py-[12px]   text-[26px] font-[Inter] font-[400]'> {cost2 || 'N/A'}  </p>
            </div>

            <div className='flex w-full border-b border-[#58595B]'>
            <p className='w-[40%] pl-[44px] py-[12px] text-[26px] font-[Inter] font-[400]'><ul className='list-disc'> <li>Materials</li></ul></p>
            <p className='w-[40%] border-l border-[#58595B] pl-[50px] py-[12px]  text-[26px] font-[Inter] font-[400]'><ul className='list-disc'><li>{des3 || 'N/A'}</li></ul></p>
            <p className='w-[20%] border-l border-[#58595B] pl-[24px] py-[12px]   text-[26px] font-[Inter] font-[400]'> {cost3 || 'N/A'}  </p>
            </div>

            <div className='flex w-full border-b border-[#58595B]'>
            <p className='w-[40%] pl-[44px] py-[12px] text-[26px] font-[Inter] font-[400]'><ul className='list-disc'> <li>Resourses</li></ul></p>
            <p className='w-[40%] border-l border-[#58595B] pl-[50px] py-[12px]  text-[26px] font-[Inter] font-[400]'><ul className='list-disc'><li>{des4 || 'N/A'}</li></ul></p>
            <p className='w-[20%] border-l border-[#58595B] pl-[24px] py-[12px]   text-[26px] font-[Inter] font-[400]'> {cost4 || 'N/A'}  </p>
            </div>

            <div className='flex w-full border-b-4 border-[#AF8D63]'>
            <p className='w-[40%] pl-[44px] py-[12px] text-[26px] font-[Inter] font-[400]'><ul className='list-disc'> <li>Others</li></ul></p>
            <p className='w-[40%] border-l border-[#58595B] pl-[50px] py-[12px]  text-[26px] font-[Inter] font-[400]'><ul className='list-disc'><li>{des5 || 'N/A'}</li></ul></p>
            <p className='w-[20%] border-l border-[#58595B] pl-[24px] py-[12px]   text-[26px] font-[Inter] font-[400]'> {cost5 || 'N/A'}  </p>
            </div>
        </div>
        
         {/* Milestones */}
         <h2 className='text-lightOrange text-[40px] font-[700] mt-[30px] ml-[15px]'>Milestone</h2>
         
         <div className='border border-[#58595B] mt-[20px]'>
        <div className='flex  border-b border-[#58595B]'>
            <p className='w-[25%] bg-creamy pl-[22px] py-[13px] text-[21px] font-[Inter] font-[600]'>Delivery Date</p>
            <p className='w-[50%]  bg-creamy border-l  border-[#58595B] text-nowrap pl-[22px] py-[13px] text-[21px] font-[Inter] font-[600]'>Task</p>    
            <div className='w-[25%]  bg-creamy border-l  border-[#58595B]  text-[21px] pl-[22px] py-[13px] font-[Inter] font-[600]'>Project Owner</div>    
        </div>

            <div className='flex w-full border-b border-[#58595B]'>
            <p className='w-[25%] pl-[44px] py-[12px] text-[21px] font-[Inter] font-[400]'>{dd1  || 'N/A'}</p>

            <p className='w-[50%] border-l border-[#58595B] pl-[50px] py-[12px]  text-[21px] font-[Inter] font-[400]'><ul className='list-disc'><li>{task1  || 'N/A'}</li></ul></p>

            <p className='w-[25%] border-l border-[#58595B] pl-[24px] py-[12px]   text-[21px] font-[Inter] font-[400]'>{owner1 || 'N/A'} </p>
            </div>

            <div className='flex w-full border-b border-[#58595B]'>
            <p className='w-[25%] pl-[44px] py-[12px] text-[21px] font-[Inter] font-[400]'>{dd2  || 'N/A'}</p>
            <p className='w-[50%] border-l border-[#58595B] pl-[50px] py-[12px]  text-[21px] font-[Inter] font-[400]'><ul className='list-disc'><li>{task2  || 'N/A'}</li></ul></p>
            <p className='w-[25%] border-l border-[#58595B] pl-[24px] py-[12px]   text-[21px] font-[Inter] font-[400]'>{owner2 || 'N/A'}  </p>
            </div>

            <div className='flex w-full border-b border-[#58595B]'>
            <p className='w-[25%] pl-[44px] py-[12px] text-[21px] font-[Inter] font-[400]'>{dd3  || 'N/A'}</p>
            <p className='w-[50%] border-l border-[#58595B] pl-[50px] py-[12px]  text-[21px] font-[Inter] font-[400]'><ul className='list-disc'><li>{task3  || 'N/A'}</li></ul></p>
            <p className='w-[25%] border-l border-[#58595B] pl-[24px] py-[12px]   text-[21px] font-[Inter] font-[400]'>{owner3 || 'N/A'}  </p>
            </div>

            <div className='flex w-full border-b-4 border-[#AF8D63]'>
            <p className='w-[25%] pl-[44px] py-[12px] text-[21px] font-[Inter] font-[400]'>{dd4  || 'N/A'}</p>
            <p className='w-[50%] border-l border-[#58595B] pl-[50px] py-[12px]  text-[21px] font-[Inter] font-[400]'><ul className='list-disc'><li>{task4  || 'N/A'}</li></ul></p>
            <p className='w-[25%] border-l border-[#58595B] pl-[24px] py-[12px]   text-[21px] font-[Inter] font-[400]'>{owner4 || 'N/A'}  </p>
            </div>

           
        </div>

         {/* Approval & Commments */}
         <h2 className='text-lightOrange text-[40px] font-[700] mt-[80px] ml-[15px]'>Approval & Commments</h2>

         <div className='border border-[#58595B] mt-[20px]'>
        <div className='flex w-full border-b border-[#58595B]'>
            <p className='w-[50%] bg-creamy pl-[28px] py-[15px] text-[26px] font-[Inter] font-[600]'>Project Owner</p>
            <p className='w-[50%] border-l border-[#58595B] pl-[28px] py-[15px] text-[26px] font-[Inter] font-[400]'>{owner  || 'N/A'}  </p>

            </div>

            <div className='flex w-full border-b border-[#58595B]'>
            <p className='w-[50%] bg-creamy pl-[28px] py-[15px] text-[26px] font-[Inter] font-[600]'>Signature</p>
            <p className='w-[50%] border-l border-[#58595B] pl-[28px] py-[15px] text-[26px] font-[Inter] font-[400]'>{ownerSign   || 'N/A'}  </p>

            </div>

            <div className='flex w-full border-b border-[#58595B]'>
            <p className='w-[50%] bg-creamy pl-[28px] py-[15px] text-[26px] font-[Inter] font-[600]'>Date</p>
            <p className='w-[50%] border-l border-[#58595B] pl-[28px] py-[15px] text-[26px] font-[Inter] font-[400]'>{ownerdate   || 'N/A'}  </p>

            </div>

            <div className='flex w-full border-b border-[#58595B]'>
            <p className='w-[50%] bg-creamy pl-[28px] py-[15px] text-[26px] font-[Inter] font-[600]'>Project Manager</p>
            <p className='w-[50%] border-l border-[#58595B] pl-[28px] py-[15px] text-[26px] font-[Inter] font-[400]'>{manager   || 'N/A'}  </p>

            </div>

            <div className='flex w-full border-b border-[#58595B]'>
            <p className='w-[50%] bg-creamy pl-[28px] py-[15px] text-[26px] font-[Inter] font-[600]'>Signature</p>
            <p className='w-[50%] border-l border-[#58595B] pl-[28px] py-[15px] text-[26px] font-[Inter] font-[400]'>{managerSign    || 'N/A'}  </p>

            </div>

            <div className='flex w-full border-b border-[#58595B]'>
            <p className='w-[50%] bg-creamy pl-[28px] py-[15px] text-[26px] font-[Inter] font-[600]'>Date</p>
            <p className='w-[50%] border-l border-[#58595B] pl-[28px] py-[15px] text-[26px] font-[Inter] font-[400]'>{managerDate    || 'N/A'}  </p>

            </div>

            <div className='flex w-full border-b border-[#58595B]'>
            <p className='w-[50%] bg-creamy pl-[28px] py-[15px] text-[26px] font-[Inter] font-[600]'>Project Sponsor</p>
            <p className='w-[50%] border-l border-[#58595B] pl-[28px] py-[15px] text-[26px] font-[Inter] font-[400]'>{sponser    || 'N/A'}  </p>

            </div>

            <div className='flex w-full border-b border-[#58595B]'>
            <p className='w-[50%] bg-creamy pl-[28px] py-[15px] text-[26px] font-[Inter] font-[600]'>Signature</p>
            <p className='w-[50%] border-l border-[#58595B] pl-[28px] py-[15px] text-[26px] font-[Inter] font-[400]'>{sponserSign || 'N/A'}</p>
            </div>

            <div className='flex w-full border-b border-[#58595B]'>
            <p className='w-[50%] bg-creamy pl-[28px] py-[15px] text-[26px] font-[Inter] font-[600]'>Date</p>
            <p className='w-[50%] border-l border-[#58595B] pl-[28px] py-[15px] text-[26px] font-[Inter] font-[400]'>{sponserDate || 'N/A'}</p>
            </div>

            <div className='flex w-full border-b border-[#58595B]'>
            <p className='w-[50%] bg-creamy pl-[28px] py-[15px] text-[26px] font-[Inter] font-[600]'>Project stakeholder</p>
            <p className='w-[50%] border-l border-[#58595B] pl-[28px] py-[15px] text-[26px] font-[Inter] font-[400]'>{stakeholder ||  'N/A'}</p>

            </div>

            <div className='flex w-full border-b border-[#58595B]'>
            <p className='w-[50%] bg-creamy pl-[28px] py-[15px] text-[26px] font-[Inter] font-[600]'>Signature</p>
            <p className='w-[50%] border-l border-[#58595B] pl-[28px] py-[15px] text-[26px] font-[Inter] font-[400]'>{stakeSign || 'N/A'}</p>
            </div>

            <div className='flex w-full border-b-4 border-[#AF8D63]'>
            <p className='w-[50%] bg-creamy pl-[28px] py-[15px] text-[26px] font-[Inter] font-[600]'>Date</p>
            <p className='w-[50%] border-l border-[#58595B] pl-[28px] py-[15px] text-[26px] font-[Inter] font-[400]'>{stakeDate || 'N/A'}</p>
            </div>

            

           
        </div>
         
        

       </div>

       
     
      </div>
    </>
  )
}

export default Body
