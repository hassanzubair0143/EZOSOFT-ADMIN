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
  const [image, setImage] = useState('upload image');
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
  const [pdtext3,setDtext3] = useState('');
  const [meeting1, setMeeting1] = useState('');
  const [meeting2, setMeeting2] = useState('');
  const [meeting3, setMeeting3] = useState('');
  const [meeting4, setMeeting4] = useState('');
  const [meeting5, setMeeting5] = useState('')
  const [purpose1, setPurpose1] = useState('');
  const [purpose2, setPurpose2] = useState('');
  const [purpose3, setPurpose3] = useState('');
  const [purpose4, setPurpose4] = useState('');
  const [purpose5, setPurpose5] = useState('');
  const [medium1, setMedium1] = useState('');
  const [medium2, setMedium2] = useState('');
  const [medium3, setMedium3] = useState('');
  const [medium4, setMedium4] = useState('');
  const [medium5, setMedium5] = useState('');
  const [freq1, setFreq1] = useState('');
  const [freq2, setFreq2] = useState('');
  const [freq3, setFreq3] = useState('');
  const [freq4, setFreq4] = useState('');
  const [freq5, setFreq5] = useState('');
  const [aud1, setAud1] = useState('');
  const [aud2, setAud2] = useState('');
  const [aud3, setAud3] = useState('');
  const [aud4, setAud4] = useState('');
  const [aud5, setAud5] = useState('');
  const [milestone1, setMilestone1] = useState('');
  const [milestone2, setMilestone2] = useState('');
  const [milestone3, setMilestone3] = useState('');
  const [milestone4, setMilestone4] = useState('');
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

  const [fileName, setFileName] = useState(null);
  const [fields, setFields] = useState([{
    meeting1: '',
    purpose1: '',
    medium1: '',
    freq1: '',
    aud1: ''
  }]);

  const [clickCount, setClickCount] = useState(0);

  const handleAddMore = () => {
    if (clickCount < 5) {
      setFields([
        ...fields,
        {
          meeting: '',
          purpose: '',
          medium: '',
          freq: '',
          aud: ''
        }
      ]);
      setClickCount(clickCount + 1);
    }
  };

  const handleChange = (e, index, field) => {
    const updatedFields = [...fields];
    updatedFields[index][field] = e.target.value;
    setFields(updatedFields);
  };
  
  
  

  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
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
   
      <div className="w-full lg:py-[126px] lg:px-[167px] md:p-[50px] ">
        <form onSubmit={handleSubmit} className="w-full border border-[#D9D9D9] rounded-lg">
          <div className='bg-[#FFFFFF] border border-[#D9D9D9] rounded-lg m-[30px] md:mx-[60px] p-[35px] '>
           <div className='flex flex-col md:flex-row w-full gap-[35px]'>
           <div className='flex md:w-[50%] gap-[55px] items-center justify-center'>
           <label htmlFor="title" className="w-[10%]">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-[#F9F9F9] px-4 py-2 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Title"
            />
           </div>

           <div className="flex items-center justify-center sm:gap-[20px]">
  <label htmlFor="image">Logo:</label>
  <div
    className="bg-[#F9F9F9] h-[40px] w-[140px] border border-dashed border-[#293950] flex items-center justify-center cursor-pointer rounded-lg"
    onClick={() => document.getElementById('image').click()} // This triggers the file input click
  >
    <input
      type="file"
      id="image"
      accept="image/*"
      onChange={handleImageUpload}
      className="hidden" // Hide the actual input element
    />
   {/* Text or icon inside the div */}
  </div>
  <span>{fileName}</span> 

</div>

           </div>
            
         
          <div className=' mt-[25px] flex items-center justify-center gap-[20px]'>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-[#F9F9F9] px-4 py-2 border border-[#D9D9D9] resize-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Description"
            ></textarea>
          </div>
          </div>

           {/* project information */}
           <h2 className='font-semibold ml-[60px] text-[20px] leading-[30px] font-[Poppins]'>Project Information</h2>
           <div className='grid md:grid-cols-3 bg-[#FFFFFF] border border-[#D9D9D9] rounded-lg mx-[60px] p-[35px] gap-6 '>
            
           <div className='flex flex-col'>
           <label htmlFor={pName}>Project Name</label>
            <input type='text'
             value={pName} 
             onChange={(e)=>setPname(e.target.value)} 
             className='bg-[#F9F9F9] px-4 py-2 border border-[#D9D9D9]  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           </div>

           <div className='flex flex-col'>
           <label htmlFor={pName}>Project Start date</label>
            <input type='date'
             value={pStartDate} 
             onChange={(e)=>setStartdate(e.target.value)} 
             className='bg-[#F9F9F9] px-4 py-2 border  border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           </div>

           <div className='flex flex-col'>
           <label htmlFor={pEndDate}>Project Estimated Completion</label>
            <input type='date'
             value={pEndDate} 
             onChange={(e)=>setEnddate(e.target.value)} 
             className='bg-[#F9F9F9] px-4 py-2 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           </div>

           <div className='flex flex-col'>
           <label htmlFor={pBudget}>Project Budget</label>
            <input type='text'
             value={pBudget} 
             onChange={(e)=>setPbudget(e.target.value)} 
             className='bg-[#F9F9F9] px-4 py-2 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           </div>

           <div className='flex flex-col'>
           <label htmlFor={pDesc}>Project Description</label>
            <input type='text'
             value={pDesc} 
             onChange={(e)=>setPdesc (e.target.value)} 
             className='bg-[#F9F9F9] px-4 py-2 border border-[#D9D9D9]  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           </div>
          </div>



           {/* project deliverable */}
           <h2 className='font-semibold ml-[60px] mt-[30px] text-[20px] leading-[30px] font-[Poppins]'>Project Deliverables</h2>
           <div className='grid md:grid-cols-3 bg-[#FFFFFF] border border-[#D9D9D9] rounded-lg mx-[60px] p-[35px] gap-6'>
            
           
            <input type='text'
             value={pdtext1} 
             onChange={(e)=>setDtext1(e.target.value)} 
             placeholder='type here'
             className='bg-[#F9F9F9] px-4 py-2 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
          

           
          
            <input type='text'
             value={pdtext2} 
             placeholder='type here'
             onChange={(e)=>setDtext2(e.target.value)} 
             className='bg-[#F9F9F9] px-4 py-2 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
          

           <input type='text'
             value={pdtext3} 
             placeholder='type here'
             onChange={(e)=>setDtext3(e.target.value)} 
             className='bg-[#F9F9F9] px-4 py-2 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           </div>
         
          
       

            {/* Meeting Information */}
            <h2 className="font-semibold ml-[60px] mt-[30px] text-[20px] leading-[30px] font-[Poppins]">Project Information</h2>
            <div className="grid md:grid-cols-3 bg-[#FFFFFF] border border-[#D9D9D9] rounded-lg mx-[60px] p-[35px] gap-6">
            
            {[info1, info2, info3].map((info, index) => (
              

                <input
                key={index}
                  type="text"
                  id={`info${index + 1}`}
                  placeholder='type here'
                  value={info}
                  onChange={(e) => {
                    if (index === 0) setInfo1(e.target.value);
                    if (index === 1) setInfo2(e.target.value);
                    if (index === 2) setInfo3(e.target.value);
                  }}
                  className="bg-[#F9F9F9] px-4 py-2 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              
            ))}
          </div>

          {/* Meeting Goals */}
          <h2 className="font-semibold ml-[60px] mt-[30px] text-[20px] leading-[30px] font-[Poppins]">Meeting Goals</h2>
          <div className="grid md:grid-cols-3 bg-[#FFFFFF] border border-[#D9D9D9] rounded-lg mx-[60px] p-[35px] gap-6">
            
            

              <input
                type="text"
                id="meetinggoals"
                value={meetinggoals}
                placeholder='type here'
                onChange={(e) => setGoals(e.target.value)}
                className="bg-[#F9F9F9] px-4 py-2 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            
            
              
              <input
                type="text"
                id="meetinggoals2"
                placeholder='type here'
                value={meetinggoals2}
                onChange={(e) => setGoals2(e.target.value)}
                className="bg-[#F9F9F9] px-4 py-2 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            
          </div>

        

          {/* Meeting Objectives */}
          <h2 className="font-semibold ml-[60px] mt-[30px] text-[20px] leading-[30px] font-[Poppins]">Meeting Objectives</h2>
          <div className="grid md:grid-cols-3 bg-[#FFFFFF] border border-[#D9D9D9] rounded-lg mx-[60px] p-[35px] gap-6">
           
            {[obj1, obj2, obj3, obj4].map((obj, index) => (
            
                
                <input
                key={index}
                  type="text"
                  placeholder='type here'
                  id={`obj${index + 1}`}
                  value={obj}
                  onChange={(e) => {
                    if (index === 0) setObj1(e.target.value);
                    if (index === 1) setObj2(e.target.value);
                    if (index === 2) setObj3(e.target.value);
                    if (index === 3) setObj4(e.target.value);
                  }}
                  className="bg-[#F9F9F9] px-4 py-2 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              
            ))}
          </div>



          <div className='flex w-full'>
          {/* Constraints */}
          <div className='flex flex-col w-[50%]'>
          <h2 className="font-semibold ml-[60px] mt-[30px] text-[20px] leading-[30px] font-[Poppins]">Constraints</h2>
          <div className="grid md:grid-rows-3  bg-[#FFFFFF] border border-[#D9D9D9] rounded-lg mx-[60px] p-[35px] gap-6 ">
            
            {[cons1, cons2, cons3].map((cons, index) => (
             
                <input
                  type="text"
                  key={index}
                  placeholder='type here'
                  id={`cons${index + 1}`}
                  value={cons}
                  onChange={(e) => {
                    if (index === 0) setCons1(e.target.value);
                    if (index === 1) setCons2(e.target.value);
                    if (index === 2) setCons3(e.target.value);
                  }}
                  className="w-[80%] bg-[#F9F9F9] px-4 py-2 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              
            ))}
          </div>
          </div>

          {/* Assumptions */}
          <div className='flex flex-col w-[50%]'>
          <h2 className="font-semibold ml-[60px] mt-[30px] text-[20px] leading-[30px] font-[Poppins]">Assumptions</h2>
          <div className="grid md:grid-rows-3  bg-[#FFFFFF] border border-[#D9D9D9] rounded-lg mx-[60px] p-[35px] gap-6">
            
            {[asumption1, asumption2, asumption3].map((asm, index) => (
            
    
                <input
                key={index}
                  type="text"
                  placeholder='type here'
                  id={`asm${index + 1}`}
                  value={asm}
                  onChange={(e) => {
                    if (index === 0) setAsm1(e.target.value);
                    if (index === 1) setAsm2(e.target.value);
                    if (index === 2) setAsm3(e.target.value);
                  }}
                  className="w-[80%] bg-[#F9F9F9] px-4 py-2 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              
            ))}
          </div>
          </div>

          </div>

          
         

          


 {/* Meeting Agenda */}

          {/* meeting agenda */}
          <h2 className='font-semibold ml-[60px] mt-[30px] text-[20px] leading-[30px] font-[Poppins]'>Meeting Agenda</h2>
           
           <div className='  bg-[#FFFFFF] border border-[#D9D9D9] rounded-lg mx-[60px] p-[35px] gap-6'>
            
          <div className='grid w-full gap-6 md:grid-cols-3'>
          <div className='flex flex-col'>
           <label htmlFor={meeting1}>Meetings</label>
            <input type='text'
            placeholder='type here'
             value={meeting1} 
             onChange={(e)=>setMeeting1(e.target.value)} 
             className='bg-[#F9F9F9] px-4 py-2 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           </div>

           <div className='flex flex-col'>
           <label htmlFor={purpose1}>Purpose</label>
            <input type='text'
            placeholder='type here'
             value={purpose1} 
             onChange={(e)=>setPurpose1(e.target.value)} 
             className='bg-[#F9F9F9] px-4 py-2 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           </div>

           <div className='flex flex-col'>
           <label htmlFor={medium1}>Medium</label>
            <input type='text'
            placeholder='type here'
             value={medium1} 
             onChange={(e)=>setMedium1(e.target.value)} 
             className='bg-[#F9F9F9] px-4 py-2 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           </div>

           <div className='flex flex-col'>
           <label htmlFor={freq1}>Frequency</label>
            <input type='text'
            placeholder='type here'
             value={freq1} 
             onChange={(e)=>setFreq1(e.target.value)} 
             className='bg-[#F9F9F9] px-4 py-2 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           </div>

           <div className='flex flex-col'>
           <label htmlFor={aud1}>Audience</label>
            <input type='text'
            placeholder='type here'
             value={aud1} 
             onChange={(e)=>setAud1(e.target.value)} 
             className='bg-[#F9F9F9] px-4 py-2 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           </div>
          </div>

          <div className='grid w-full gap-6 md:grid-cols-3 mt-[30px]'>
          <div className='flex flex-col'>
           <label htmlFor={meeting2}>Meetings</label>
            <input type='text'
            placeholder='type here'
             value={meeting2} 
             onChange={(e)=>setMeeting2(e.target.value)} 
             className='bg-[#F9F9F9] px-4 py-2 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           </div>

           <div className='flex flex-col'>
           <label htmlFor={purpose2}>Purpose</label>
            <input type='text'
            placeholder='type here'
             value={purpose2} 
             onChange={(e)=>setPurpose2(e.target.value)} 
             className='bg-[#F9F9F9] px-4 py-2 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           </div>

           <div className='flex flex-col'>
           <label htmlFor={medium2}>Medium</label>
            <input type='text'
            placeholder='type here'
             value={medium2} 
             onChange={(e)=>setMedium2(e.target.value)} 
             className='bg-[#F9F9F9] px-4 py-2 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           </div>

           <div className='flex flex-col'>
           <label htmlFor={freq2}>Frequency</label>
            <input type='text'
            placeholder='type here'
             value={freq2} 
             onChange={(e)=>setFreq2(e.target.value)} 
             className='bg-[#F9F9F9] px-4 py-2 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           </div>

           <div className='flex flex-col'>
           <label htmlFor={aud2}>Audience</label>
            <input type='text'
            placeholder='type here'
             value={aud2} 
             onChange={(e)=>setAud2(e.target.value)} 
             className='bg-[#F9F9F9] px-4 py-2 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           </div>
           <div className='flex items-center justify-center mt-[25px] '>
            <button type='button' onClick={handleAddMore} className='w-[150px] bg-[#F9F9F9] px-4 py-2 border border-dashed border-[#293950] rounded-lg'>Add more</button>
            </div>
          
          </div>

          
          </div>
         
          

          {/*
            <label htmlFor={`purpose${index+1}`}></label>
            <input type='text'
              value={purpose}
              onChange={(e)=>{
                if(index === 0) setPurpose1(e.target.value);
                if(index === 1) setPurpose2(e.target.value);
                if(index === 2) setPurpose3(e.target.value);
                if(index === 3) setPurpose4(e.target.value); */}
      
          {/* project status */}
          
          <h2 className='font-semibold ml-[60px] mt-[30px] text-[20px] leading-[30px] font-[Poppins]'>Project Status</h2>
           
           <div className='  bg-[#FFFFFF] border border-[#D9D9D9] rounded-lg mx-[60px] p-[35px] gap-6'>
            
          <div className='grid w-full gap-6 md:grid-cols-3'>
          <div className='flex flex-col'>
           <label htmlFor={milestone1}>Milestones</label>
            <input type='text'
            placeholder='type here'
             value={milestone1} 
             onChange={(e)=>setMilestone1(e.target.value)} 
             className='bg-[#F9F9F9] px-4 py-2 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           </div>

           <div className='flex flex-col'>
           <label htmlFor={pStatus1}>Status</label>
            <select
             value={pStatus1} 
             onChange={(e)=>setpStatus1(e.target.value)} 
             className='bg-[#F9F9F9] px-4 py-2 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'>
               <option value= "">select status </option>
                 <option value="Not Started">Not Started</option>
                 <option value="Completed">Completed</option>
                 <option value="Pending">Pending</option>
                 <option value="In Progress">In Progress</option>
             </select>
           </div>

           <div className='flex flex-col'>
           <label htmlFor={due1}>Due</label>
            <input type='text'
            placeholder='type here'
             value={due1} 
             onChange={(e)=>setDue1(e.target.value)} 
             className='bg-[#F9F9F9] px-4 py-2 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           </div>

           <div className='flex flex-col'>
           <label htmlFor={done1}>Done</label>
            <input type='text'
            placeholder='type here'
             value={done1} 
             onChange={(e)=>setDone1(e.target.value)} 
             className='bg-[#F9F9F9] px-4 py-2 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           </div>
           <div className='flex items-center justify-center mt-[25px]'>
            <button type='button' onClick={handleAddMore} className=' w-[150px] bg-[#F9F9F9] px-4 py-2 border border-dashed border-[#293950] rounded-lg'>Add more</button>
            </div>

          </div>       
          </div>
       



{/* previews */}
<br/>
<br/>
<h1 className="mb-6 text-2xl font-bold text-center">Live preview(template 4)</h1>
<br/>

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
                <td className='border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{meeting1 || "Kick off meeting"}</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{purpose1 || 'Project introduction: Review project goals & objectives'}</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{medium1 ||'In Person'}</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{freq1 || 'once'}</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{aud1 ||"project team sponser stakeholders"}</td>
                </tr>
  
                <tr>
                <td className='border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{meeting2 ||  'N/A'}</td>
  
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{purpose2 || 'N/A'}</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{medium2||'N/A'}</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{freq2 || 'N/A'}</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{aud2 ||  'N/A'}</td>
  
                </tr>
  
                <tr>
                <td className='border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{meeting3 || 'N/A'}</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{purpose3 ||  'N/A'}</td>
  
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{medium3  || 'N/A'}</td>
  
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{freq3 || 'N/A'}</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{aud3 ||  'N/A'}</td>
                </tr>
  
  
                <tr>
                <td className='border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{meeting4 || 'N/A'}</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{purpose4 ||   'N/A'}</td>
  
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{medium4  || 'N/A'}</td>
  
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{freq4 || 'N/A'}</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{aud4 ||  'N/A'}</td>
                </tr>
  
                <tr>
                <td className='border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{meeting5 || 'N/A'}</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{purpose5  || 'N/A'}</td>
  
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{medium5  || 'N/A'}</td>
  
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{freq5 || 'N/A'}</td>
                <td className='text-center border-b border-r  border-lightClay p-[10px] text-[20px] font-[Inter] font-[400]'>{aud5 ||  'N/A'}</td>
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
               
          <button
            type="submit"
            className="w-full py-2 text-white transition duration-300 bg-blue-600 rounded bg-blue hover:bg-blue-700"
          >
            Get Template
          </button>
        </form>

      
      </div>


      
   



  // preview
    
  );
};

export default EditTemplate4;
