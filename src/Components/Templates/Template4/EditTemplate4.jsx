import { Pending } from '@mui/icons-material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

  return (
    <div className="flex items-center justify-center min-h-screen py-10 bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
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
            <input type='date'
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
            <input type='date'
             value={meeting2} 
             onChange={(e)=>setMeeting2(e.target.value)} 
             className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           </div>

           <div className='flex items-center gap-4'>
           <label htmlFor={meeting3}>Meeting 3</label>
            <input type='date'
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
            <input type='date'
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
      </div>
    </div>
  );
};

export default EditTemplate4;
