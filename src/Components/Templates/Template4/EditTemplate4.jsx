import { Pending } from '@mui/icons-material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectInfo from '/src/assets/images/project-information-logo.svg'
import MeetingGoal from '/src/assets/images/Meeting.svg'
import MeetingObjectives from '/src/assets/images/Meeting-objectives.svg'
import Constraints from '/src/assets/images/constraints.svg'
import Assumptions from '/src/assets/images/assumptions.svg'
import ProjectInformation from '/src/assets/images/project-information.svg'
import DeliverAble from '/src/assets/images/project-deliverable.svg'
import MeetingAgenda from '/src/assets/images/Meeting-agenda.svg'
import ProjectStatusIcon from '/src/assets/images/project-status.svg'

const EditTemplate4 = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [buttonText, setButtonText] = useState('');
  const [image, setImage] = useState(null);
  const [meetinggoals, setGoals] = useState('');
  const [meetinggoals2, setGoals2] = useState('');
  const [info1, setInfo1] = useState('');
  const [info2, setInfo2] = useState('');
  const [info3, setInfo3] = useState('');
  const [obj1, setObj1] = useState('');
  const [obj2, setObj2] = useState('');
  const [obj3, setObj3] = useState('');
  const [obj4, setObj4] = useState('');
  const [cons1, setCons1] = useState('');
  const [cons2, setCons2] = useState('');
  const [cons3, setCons3] = useState('');
  const [asumption1, setAsm1] = useState('');
  const [asumption2, setAsm2] = useState('');
  const [asumption3, setAsm3] = useState('');
  const [pName, setPname] = useState('');
  const [pStartDate,setStartdate]= useState('');
  const [pEndDate, setEnddate]= useState('');
  const [pBudget, setPbudget] = useState('');
  const [pDesc, setPdesc] = useState('');
  const [pdtext1,setDtext1] = useState('');
  const [pdtext2,setDtext2] = useState('');
  const [meeting1, setMeeting1] = useState('');
  const [meeting2, setMeeting2] = useState('');
  const [meeting3, setMeeting3] = useState('');
  const [meeting4, setMeeting4] = useState('');
  const [purpose1, setPurpose1] = useState('');
  const [purpose2, setPurpose2] = useState('');
  const [purpose3, setPurpose3] = useState('');
  const [purpose4, setPurpose4] = useState('');
  const [medium1, setMedium1] = useState('');
  const [medium2, setMedium2] = useState('');
  const [medium3, setMedium3] = useState('');
  const [medium4, setMedium4] = useState('');
  const [freq1, setFreq1] = useState('');
  const [freq2, setFreq2] = useState('');
  const [freq3, setFreq3] = useState('');
  const [freq4, setFreq4] = useState('');
  const [aud1, setAud1] = useState('');
  const [aud2, setAud2] = useState('');
  const [aud3, setAud3] = useState('');
  const [aud4, setAud4] = useState('');
  const [pStatus1, setpStatus1] = useState('');
  const [pStatus2, setpStatus2] = useState('');
  const [pStatus3, setpStatus3] = useState('');
  const [pStatus4, setpStatus4] = useState('');
  const [due1,setDue1] = useState('');
  const [due2,setDue2] = useState('');
  const [due3,setDue3] = useState('');
  const [due4,setDue4] = useState('');
  const [done1,setDone1] = useState('');
  const [done2,setDone2] = useState('');
  const [done3,setDone3] = useState('');
  const [done4,setDone4] = useState('');
  
  
  

  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Save base64 image data
      };
      reader.readAsDataURL(file); // Read file as Data URL
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass data to the next page, including image
    navigate('/template4', {
      state: {
        title, description, buttonText, image,
        meetinggoals, meetinggoals2,
        info1, info2, info3,
        obj1, obj2, obj3, obj4,
        cons1, cons2, cons3,
        asumption1, asumption2, asumption3,
        pName, pStartDate, pEndDate, pBudget,pDesc,
        pdtext1,pdtext2,
        meeting1,meeting2,meeting3,meeting4,
        purpose1,purpose2,purpose3,purpose4,
        medium1,medium2,medium3,medium4,
        freq1,freq2,freq3,freq4,
        aud1,aud2,aud3,aud4,
        pStatus1,pStatus2,pStatus3,pStatus4,
        due1,due2,due3,due4,
        done1,done2,done3,done4,
      },
    });
  };
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

  return (
    <div className="flex py-10 bg-gray-100 full ">
      <div className="w-full p-8 bg-white rounded-lg shadow-lg ">
        <h1 className="mb-6 text-2xl font-bold text-center">Meeting Input Form</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Title"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Description"
            ></textarea>
          </div>
          
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Upload Company Logo:</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageUpload}
              className="px-4 py-2 ml-1 border border-gray-300 rounded"
            />
          </div>

            {/* Meeting Information */}
            <div className="flex flex-col">
            <h2 className="mt-4 text-lg font-medium">Meeting Information</h2>
            {[info1, info2, info3].map((info, index) => (
              <div className="flex items-center gap-4 mt-2" key={index}>
                <label htmlFor={`info${index + 1}`} className="block text-sm font-medium text-gray-700">Information {index + 1}:</label>
                <input
                  type="text"
                  id={`info${index + 1}`}
                  value={info}
                  onChange={(e) => {
                    if (index === 0) setInfo1(e.target.value);
                    if (index === 1) setInfo2(e.target.value);
                    if (index === 2) setInfo3(e.target.value);
                  }}
                  className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
          </div>

          {/* Meeting Goals */}
          <div className="flex flex-col">
            <h2 className="mt-4 text-lg font-medium">Meeting Goals</h2>
            <div className="flex items-center gap-4 mt-2">
              <label htmlFor="meetinggoals" className="block text-sm font-medium text-gray-700">Goal 1:</label>
              <input
                type="text"
                id="meetinggoals"
                value={meetinggoals}
                onChange={(e) => setGoals(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center gap-4 mt-2">
              <label htmlFor="meetinggoals2" className="block text-sm font-medium text-gray-700">Goal 2:</label>
              <input
                type="text"
                id="meetinggoals2"
                value={meetinggoals2}
                onChange={(e) => setGoals2(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

        

          {/* Meeting Objectives */}
          <div className="flex flex-col">
            <h2 className="mt-4 text-lg font-medium">Meeting Objectives</h2>
            {[obj1, obj2, obj3, obj4].map((obj, index) => (
              <div className="flex items-center gap-4 mt-2" key={index}>
                <label htmlFor={`obj${index + 1}`} className="block text-sm font-medium text-gray-700">Objective {index + 1}:</label>
                <input
                  type="text"
                  id={`obj${index + 1}`}
                  value={obj}
                  onChange={(e) => {
                    if (index === 0) setObj1(e.target.value);
                    if (index === 1) setObj2(e.target.value);
                    if (index === 2) setObj3(e.target.value);
                    if (index === 3) setObj4(e.target.value);
                  }}
                  className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
          </div>

          {/* Constraints */}
          <div className="flex flex-col">
            <h2 className="mt-4 text-lg font-medium">Constraints</h2>
            {[cons1, cons2, cons3].map((cons, index) => (
              <div className="flex items-center gap-4 mt-2" key={index}>
                <label htmlFor={`cons${index + 1}`} className="block text-sm font-medium text-gray-700">Value {index + 1}:</label>
                <input
                  type="text"
                  id={`cons${index + 1}`}
                  value={cons}
                  onChange={(e) => {
                    if (index === 0) setCons1(e.target.value);
                    if (index === 1) setCons2(e.target.value);
                    if (index === 2) setCons3(e.target.value);
                  }}
                  className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
          </div>

          {/* Assumptions */}
          <div className="flex flex-col">
            <h2 className="mt-4 text-lg font-medium">Assumptions</h2>
            {[asumption1, asumption2, asumption3].map((asm, index) => (
              <div className="flex items-center gap-4 mt-2" key={index}>
                <label htmlFor={`asm${index + 1}`} className="block text-sm font-medium text-gray-700">Assumption {index + 1}:</label>
                <input
                  type="text"
                  id={`asm${index + 1}`}
                  value={asm}
                  onChange={(e) => {
                    if (index === 0) setAsm1(e.target.value);
                    if (index === 1) setAsm2(e.target.value);
                    if (index === 2) setAsm3(e.target.value);
                  }}
                  className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
          </div>

          
          {/* project information */}
          <div>
            <h2 className='font-bold'>Project Information</h2>
           <div className='flex items-center gap-4'>
           <label htmlFor={pName}>Project Name</label>
            <input type='text'
             value={pName} 
             onChange={(e)=>setPname(e.target.value)} 
             className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           </div>

           <div className='flex items-center gap-4'>
           <label htmlFor={pName}>Project Start date</label>
            <input type='date'
             value={pStartDate} 
             onChange={(e)=>setStartdate(e.target.value)} 
             className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           </div>

           <div className='flex items-center gap-4'>
           <label htmlFor={pEndDate}>Project Estimated Completion</label>
            <input type='date'
             value={pEndDate} 
             onChange={(e)=>setEnddate(e.target.value)} 
             className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           </div>

           <div className='flex items-center gap-4'>
           <label htmlFor={pBudget}>Project Budget</label>
            <input type='text'
             value={pBudget} 
             onChange={(e)=>setPbudget(e.target.value)} 
             className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           </div>

           <div className='flex items-center gap-4'>
           <label htmlFor={pDesc}>Project Description</label>
            <input type='text'
             value={pDesc} 
             onChange={(e)=>setPdesc (e.target.value)} 
             className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           </div>
          </div>

           {/* project deliverable */}
           <div>
            <h2 className='font-bold'>Project Deliverables</h2>
           <div className='flex items-center gap-4'>
           <label htmlFor={pdtext1}>Add text 1</label>
            <input type='text'
             value={pdtext1} 
             onChange={(e)=>setDtext1(e.target.value)} 
             className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           </div>

           <div className='flex items-center gap-4'>
           <label htmlFor={pdtext2}>Add text 2</label>
            <input type='text'
             value={pdtext2} 
             onChange={(e)=>setDtext2(e.target.value)} 
             className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           </div>
          </div>


 {/* Meeting Agenda */}

          {/* meetings */}
           <div>
            <h2 className='font-bold'>Meetings</h2>
           <div className='flex items-center gap-4'>
           <label htmlFor={meeting1}>Meeting 1</label>
            <input type='text'
             value={meeting1} 
             onChange={(e)=>setMeeting1(e.target.value)} 
             className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           </div>

           <div className='flex items-center gap-4'>
           <label htmlFor={meeting2}>Meeting 2</label>
            <input type='text'
             value={meeting2} 
             onChange={(e)=>setMeeting2(e.target.value)} 
             className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           </div>

           <div className='flex items-center gap-4'>
           <label htmlFor={meeting3}>Meeting 3</label>
            <input type='text'
             value={meeting3} 
             onChange={(e)=>setMeeting3(e.target.value)} 
             className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           </div>

           <div className='flex items-center gap-4'>
           <label htmlFor={meeting4}>Meeting 4</label>
            <input type='text'
             value={meeting4} 
             onChange={(e)=>setMeeting4(e.target.value)} 
             className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           </div>
           
          </div>

          {/* purpose */}
          <h2 className='font-bold'>Meeting Purpose</h2>
          {[purpose1,purpose2,purpose3,purpose4].map((purpose,index)=>(<div key={index} className='flex gap-4'>
            <h2>purpose {index +1}</h2>
            <label htmlFor={`purpose${index+1}`}></label>
            <input type='text'
              value={purpose}
              onChange={(e)=>{
                if(index === 0) setPurpose1(e.target.value);
                if(index === 1) setPurpose2(e.target.value);
                if(index === 2) setPurpose3(e.target.value);
                if(index === 3) setPurpose4(e.target.value);
              }}
              className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>))}

          {/* Medium */}
          <h2 className='font-bold'>Meeting Medium</h2>
          {[medium1,medium2,medium3,medium4].map((medium,index)=>(<div key={index} className='flex gap-4'>
            <h2>Medium {index +1}</h2>
            <label htmlFor={`medium${index+1}`}></label>
            <input type='text'
              value={medium}
              onChange={(e)=>{
                if(index === 0) setMedium1(e.target.value);
                if(index === 1) setMedium2(e.target.value);
                if(index === 2) setMedium3(e.target.value);
                if(index === 3) setMedium4(e.target.value);
              }}
              className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>))}

           {/* Frequency */}
           <h2 className='font-bold'>Meeting Frequency</h2>
          {[freq1,freq2,freq3,freq4].map((freq,index)=>(<div key={index} className='flex gap-4'>
            <h2>Frequency {index +1}</h2>
            <label htmlFor={`Frequency ${index+1}`}></label>
            <input type='text'
              value={freq}
              onChange={(e)=>{
                if(index === 0) setFreq1(e.target.value);
                if(index === 1) setFreq2(e.target.value);
                if(index === 2) setFreq3(e.target.value);
                if(index === 3) setFreq4(e.target.value);
              }}
              className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>))}

           {/* Aundience */}
           <h2 className='font-bold'>Meeting Audience</h2>
          {[aud1,aud2,aud3,aud4].map((aud,index)=>(
            <div key={index} className='flex gap-4'>
            <h2>Audience {index +1}</h2>
            <label htmlFor={`aud ${index+1}`}></label>
            <input type='text'
              value={aud}
              onChange={(e)=>{
                if(index === 0) setAud1(e.target.value);
                if(index === 1) setAud2(e.target.value);
                if(index === 2) setAud3(e.target.value);
                if(index === 3) setAud4(e.target.value);
              }}
              className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>))}

          {/* project status */}
          
          <div className='flex flex-col gap-4'>
          <h2 className='font-bold'>Project Status</h2>
          {[pStatus1,pStatus2,pStatus3,pStatus4].map((pStatus,index)=>(
            <div key={index} className='flex flex-col gap-4'>
               <label htmlFor={`pStatus-${index + 1}`} className='font-[500]'>{index +1 } Project Status</label>
               <select value={pStatus} onChange={(e)=>{
                if(index===0) return setpStatus1(e.target.value)
                if(index===1) return setpStatus2(e.target.value)
                if(index===2) return setpStatus3(e.target.value)
                if(index===3) return setpStatus4(e.target.value)
               }}
                className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
               >
                 <option value= "">select status </option>
                 <option value="Not Started">Not Started</option>
                 <option value="Completed">Completed</option>
                 <option value="Pending">Pending</option>
                 <option value="In Progress">In Progress</option>
             
               </select>
          </div>))}
          </div>
           

            {/* Due */}
            <h2 className='font-bold'>Due</h2>
          {[due1,due2,due3,due4].map((due,index)=>(
            <div key={index} className='flex gap-4'>
            <h2>Due {index +1}</h2>
            <label htmlFor={`due ${index+1}`}></label>
            <input type='date'
              value={due}
              onChange={(e)=>{
                if(index === 0) setDue1(e.target.value);
                if(index === 1) setDue2(e.target.value);
                if(index === 2) setDue3(e.target.value);
                if(index === 3) setDue4(e.target.value);
              }}
              className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>))}

          {/* done */}
          <h2 className='font-bold'>Done</h2>
          {[done1,done2, done3 , done4].map((done,index)=>(
            <div key={index} className='flex gap-4'>
            <h2> {index +1} Project Done</h2>
            <label htmlFor={`done ${index+1}`}></label>
            <input type='text'
              value={done}
              onChange={(e)=>{
                if(index === 0) setDone1(e.target.value);
                if(index === 1) setDone2(e.target.value);
                if(index === 2) setDone3(e.target.value);
                if(index === 3) setDone4(e.target.value);
              }}
              className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>))}






          <button
            type="submit"
            className="w-full py-2 text-white transition duration-300 bg-blue-600 rounded bg-blue hover:bg-blue-700"
          >
            Submit
          </button>
        </form>



{/* previews */}
   <div className='w-[100%] bg-green lg:max-h-[546px] xl:max-h-[546px] md:max-h-[646px] max-h-[900px] '>
      <div className='w-full lg:px-[60px] xl:px-[60px] md:px-[30px] px-[15px] flex lg:flex-row xl:flex-row flex-col'>
        <div className='mt-[40px] lg:w-[50%] xl:w-[50%] w-[100%]'>
         <h2 className='text-[67px] leading-[81px] font-[Inter] text-white'>{title || 'One Pager Team Meeting Charter'}</h2>
         <p className='mt-[33px] text-[22px] text-white'>{description || 'This one pager covers meeting charter summarizing project goals & objectives.It also includes elements such as project status, deliverables, constraints assumptions,team members, stakeholders and project milestones, etc'}</p>
         
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
        <div className='lg:ml-[65px] xl:ml-[65px] md:ml-[30px] ml-[10px]  mt-[18px] pl-[30px] border border-lightClay max-w-[80%] w-full'>
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
        <div className='lg:ml-[65px] xl:ml-[65px] md:ml-[30px] ml-[10px]  mt-[18px] pl-[30px] border border-lightClay max-w-[80%] w-full'>
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

        <div className='flex w-full border-b border-lightClay'>
            <p className='w-[50%] p-[24px] text-[22px] font-[Inter] font-[400]'>{cons1 || 'N/A'}</p>
            <p className='w-[50%] border-l border-lightClay p-[10px] text-[22px] font-[Inter] font-[400]'>{asumption1 || 'N/A'}</p>
            </div>

            <div className='flex w-full border-b border-lightClay'>
            <p className='w-[50%] p-[24px] text-[22px] font-[Inter] font-[400]'>{cons2 || 'N/A'}</p>
            <p className='w-[50%] border-l border-lightClay p-[10px] text-[22px] font-[Inter] font-[400]'>{asumption2 || 'N/A'}</p>
            </div>

            <div className='flex w-full border-b border-lightClay'>
            <p className='w-[50%] p-[24px] text-[22px] font-[Inter] font-[400]'>{cons3 || 'N/A'}</p>
            <p className='w-[50%] border-l border-lightClay flex p-[10px] text-[22px] font-[Inter] font-[400]'>{asumption3 || 'N/A'}</p>
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
            <p className='w-[50%] border-l border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{pName || 'N/A'}</p>
            </div>

            <div className='flex border-b border-lightClay'>
            <p className='w-[50%] p-[10px] text-[20px] font-[Inter] font-[400]'>Project Start Date</p>
            <p className='w-[50%] border-l border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{pStartDate||'N/A'}</p>
            </div>

            <div className='flex border-b border-lightClay'>
            <p className='w-[50%] p-[10px] text-[20px] font-[Inter] font-[400]'>Estimated Completion</p>
            <p className='w-[50%] border-l border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{pEndDate || 'N/A'}</p>
            </div>

            <div className='flex border-b border-lightClay'>
            <p className='w-[50%] p-[10px] text-[20px] font-[Inter] font-[400]'>Project Budget</p>
            <p className='w-[50%] border-l border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{pBudget || "N/A"}</p>
            </div>

            <div className='flex '>
            <p className='w-[50%] p-[10px] text-[20px] font-[Inter] font-[400]'>Add Text Here</p>
            <p className='w-[50%] border-l border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{pDesc  || 'N/A'}</p>

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
       
            <p className='border-b  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>Sponsor will provide required licenses & plugins</p> 
            <p className='border-b  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{pdtext1 || 'N/A'}</p> 
            <p className=' p-[10px] text-[20px] font-[Inter] font-[400]'>{pdtext2 || 'N/A'}</p> 
          
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
                <tr>
                <td className='border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>Kick off meeting</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>Project introduction: Review project goals & objectives</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>In Person</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>Once</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>project team sponser stakeholders</td>
                </tr>
  
                <tr>
                <td className='border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{meeting1 ||  'N/A'}</td>
  
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{purpose1 || 'N/A'}</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{medium1||'N/A'}</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{freq1 || 'N/A'}</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{aud1 ||  'N/A'}</td>
  
                </tr>
  
                <tr>
                <td className='border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{meeting2 || 'N/A'}</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{purpose2 ||  'N/A'}</td>
  
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{medium2  || 'N/A'}</td>
  
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{freq2 || 'N/A'}</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{aud2 ||  'N/A'}</td>
                </tr>
  
  
                <tr>
                <td className='border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{meeting3 || 'N/A'}</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{purpose3 ||   'N/A'}</td>
  
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{medium3  || 'N/A'}</td>
  
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{freq3 || 'N/A'}</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{aud3 ||  'N/A'}</td>
                </tr>
  
                <tr>
                <td className='border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{meeting4 || 'N/A'}</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{purpose4  || 'N/A'}</td>
  
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{medium4  || 'N/A'}</td>
  
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{freq4 || 'N/A'}</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{aud4 ||  'N/A'}</td>
                </tr>
  
  
              </tbody>
                
                  
            </table>
            </div>       
{/* project status */}

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

      
      </div>
    </div>



  // preview
    
  );
};

export default EditTemplate4;
