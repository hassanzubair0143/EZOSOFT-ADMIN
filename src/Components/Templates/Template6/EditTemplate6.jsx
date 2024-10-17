import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const EditTemplate6 = () => {
    const [title,setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState(null);
    const [projectTitle, setProjectTitle] = useState('');
    const [projectStartDate, setProjectStartDate] = useState('');
    const [projectEndDate, setProjectEndDate] = useState('');
    const [projectManager, setProjectManager] = useState('');
    const [projectSponser, setProjectSponser] = useState('');
    const [need1, setNeed1] = useState('');
    const [need2, setNeed2] = useState('');
    const [scop1, setScop1] = useState('');
    const [scop2, setScop2] = useState('');
    const [deliver1, setDeliver1] = useState('');
    const [deliver2, setDeliver2] = useState('');
    const [risk, setRisk] = useState('');
    const [asmp1, setAsmp1] = useState('');
    const [asm2, setAsmp2] = useState('');
    const [budget, setBudget] = useState('');
    const [mileStone1, setMileStone1] = useState('');
    const [mileStone2, setMileStone2] = useState('');
    const [target1, setTarget1] = useState('');
    const [target2, setTarget2] = useState('');
    const [actualDate1, setActualDate1] = useState('');
    const [actualDate2, setActualDate2] = useState('');
    const [manager1, setManager1] = useState('');
    const [manager2, setManager2] = useState('');
    const [teamMember, setTeamMember] = useState('');
    const [sponser, setSponser] = useState('');
    const [BDH, setBDH] = useState('');
    const [BUH, setBUH] = useState('');
    const [financeManager, setFinanceManager] = useState('');
    const [achevTitle1, setAchevTitle1] = useState('');
    const [achevDesc1, setAchevDesc1] = useState('');
    const [achevTitle2, setAchevTitle2] = useState('');
    const [achevDesc2, setAchevDesc2] = useState('');
    const [action1, setAction1] = useState('');
    const [action2, setAction2] = useState('');
    const [action3, setAction3] = useState('');
    const [action4, setAction4] = useState('');
    const [issue1, setIssue1] = useState('');
    const [issue2, setIssue2] = useState('');
    const [issue3, setIssue3] = useState('');
    const [issue4, setIssue4] = useState('');
    const [riskAchie1, setRiskAchie1] = useState('');
    const [riskAchie2, setRiskAchie2] = useState('');
    const [selectedColor1, setSelectedColor1] = useState('');
    const [selectedColor2, setSelectedColor2] = useState('');
    const [selectedColor3, setSelectedColor3] = useState('');
  
    
    const navigate = useNavigate();

    const handleSumit = (e) => {
         e.preventDefault();
         navigate('/template6',{
            state: {
                title,desc,image,
                projectTitle,projectStartDate,projectEndDate,projectManager,projectSponser,
                need1,need2,
                scop1,scop2,
                deliver1,deliver2,
                risk,
                asmp1,asm2,
                budget,
                mileStone1,mileStone2,
                target1,target2,
                actualDate1,actualDate2,
                manager1,manager2,teamMember,sponser,BDH,BUH,financeManager,
                achevTitle1,achevDesc1 ,achevTitle2,achevDesc2,
                action1,action2,action3,action4,issue1,issue2,issue3,issue4,
                riskAchie1,riskAchie2,selectedColor1,selectedColor2,selectedColor3
                
            }
         }),[]
        
    }

    const handleUpload =(e) =>{
      const file = e.target.files[0];
      if(file){
        const reader = new FileReader();
        reader.onloadend = () =>{
          setImage(reader.result); // Save base64 image data
          };
          reader.readAsDataURL(file);
      }
    }
  return (
    <>
      <form onSubmit={handleSumit} className='flex flex-col items-center justify-center'>
      <div className='flex flex-col w-[50%] gap-4'>
      <label htmlFor='title'  >Title</label>
      <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} className='border-2 border-black'/>
      <label htmlFor='desc'  >Description</label>
      <input type='text' value={desc} onChange={(e) => setDesc(e.target.value)} className='border-2 border-black'/>
      <label htmlFor='image'> upload image</label>
      <input type='file'  
      accept='image/*'
      onChange={handleUpload} />
      </div>

     
     
      <div className='flex flex-col w-[50%] gap-4 mt-[20px]'>
        <div className='flex flex-col'>
            <label htmlFor='projectTitle'  >Project Title</label>
            <input type='text' value={projectTitle} onChange={(e) => setProjectTitle(e.target.value)} className='border-2 border-black'/>
        </div>
        <div className='flex flex-col'>
            <label htmlFor='projectStartDate'  >Project Start Date</label>
            <input type='date' value={projectStartDate} onChange={(e) => setProjectStartDate(e.target.value)} className='border-2 border-black'/>
        </div>
        <div className='flex flex-col'>
            <label htmlFor='projectEndDate'  >Project End Date</label>
            <input type='date' value={projectEndDate} onChange={(e) => setProjectEndDate(e.target.value)} className='border-2 border-black'/>
        </div>
        <div className='flex flex-col'>
            <label htmlFor='projectManager'  >Project Manager</label>
            <input type='text' value={projectManager} onChange={(e) => setProjectManager(e.target.value)} className='border-2 border-black'/>
        </div>
        <div className='flex flex-col'>
            <label htmlFor='projectSponser'  >Project Sponsor</label>
            <input type='text' value={projectSponser} onChange={(e) => setProjectSponser(e.target.value)} className='border-2 border-black'/>
        </div>

     </div>

     <div className='flex flex-col w-[50%] mt-[20px]'>
     <h1 className='font-bold'>Business Needs</h1>
       <label htmlFor='need1'  >Need 1</label>
       <input type='text' value={need1} onChange={(e) => setNeed1(e.target.value)} className='border-2 border-black'/>
       <label htmlFor='need2'  >Need 2</label>
       <input type='text' value={need2} onChange={(e) => setNeed2(e.target.value)} className='border-2 border-black'/>
     </div>
     <div  className='flex flex-col w-[50%] mt-[20px]'>
       <h1 className='font-bold'>Project Scope</h1>
       <label htmlFor='scop1'  >First Scope</label>
       <input type='text' value={scop1} onChange={(e) => setScop1(e.target.value)} className='border-2 border-black'/>
       <label htmlFor='scop2'  >Second Scope</label>
       <input type='text' value={scop2} onChange={(e) => setScop2(e.target.value)} className='border-2 border-black'/>
     </div>
     <div   className='flex flex-col w-[50%] mt-[20px]'>
       <h1 className='font-bold'>Deliverables</h1>
       <label htmlFor='deliver1'  >First Deliverable</label>
       <input type='text' value={deliver1} onChange={(e) => setDeliver1(e.target.value)} className='border-2 border-black'/>
       <label htmlFor='deliver2'  >Second Deliverable</label>
       <input type='text' value={deliver2} onChange={(e) => setDeliver2(e.target.value)} className='border-2 border-black'/>
      </div>

      <div className='flex flex-col w-[50%] mt-[20px]'>
        <label htmlFor='risk'  >Risk and Issues</label>
        <textarea type='text' value={risk} onChange={(e) => setRisk(e.target.value)} className='border-2 border-black'/>
      </div>
      <div  className='flex flex-col w-[50%] mt-[20px]'>

      <h2 className='font-bold'>Assumptions and  Dependencies</h2>

        <label htmlFor='asmp1'  >First Assumption</label>
        <input type='text' value={asmp1} onChange={(e) => setAsmp1(e.target.value)} className='border-2 border-black'/>
        <label htmlFor='asm2'  >Second Assumption</label>
        <input type='text' value={asm2} onChange={(e) => setAsmp2(e.target.value)} className='border-2 border-black'/>
      </div>
      <h1 className='font-bold mt-[30px]'>Financials Entities</h1>
      <div className='flex flex-col w-[50%] mt-[20px]'>
        <label htmlFor='budget'  >Budget</label>
        <input type='text' value={budget} onChange={(e) => setBudget(e.target.value)} className='border-2 border-black'/>
      </div>

      
      <div   className='flex flex-col gap-2 w-[50%] mt-[20px]'>

        <h2 className='font-bold'>Milestones and Targets</h2>
       <div className='flex gap-5 w-[100%]'>
       <div className='flex items-center justify-center w-full'><h2 className='font-[500] text-nowrap'>Milestone 1</h2></div>
        
         
         <div className='flex flex-col w-full'>
         <label htmlFor='mileStone1'  >Milestone</label>
         <input type='text' value={mileStone1} onChange={(e) => setMileStone1(e.target.value)} className='border-2 border-black'/>
        <label htmlFor='target1'  >Target</label>
        <input type='text' value={target1} onChange={(e) => setTarget1(e.target.value)} className='border-2 border-black'/>
        <label htmlFor='actualDate1'  > Actual Date</label>
        <input type='date' value={actualDate1} onChange={(e) => setActualDate1(e.target.value)} className='border-2 border-black'/>
         </div>
       </div>

        </div>
        <div className='flex gap-[20px] w-[50%] mt-[30px]'>
          <div className='flex items-center justify-center w-full'>
          <h2 className='font-[500]'> Milestones 2</h2></div>
          <div className='flex flex-col w-full'>
          <label htmlFor='mileStone2'  > Milestone</label>
          <input type='text' value={mileStone2} onChange={(e) => setMileStone2(e.target.value)} className='border-2 border-black'/>
          <label htmlFor='target2'  > Target</label>
          <input type='text' value={target2} onChange={(e) => setTarget2(e.target.value)} className='border-2 border-black'/>
          <label htmlFor='actualDate2'  > Actual Date</label>
          <input type='date' value={actualDate2} onChange={(e) => setActualDate2(e.target.value)} className='border-2 border-black'/>
        </div>

        </div>
        
        <div className='mt-[20px] flex flex-col w-[50%] gap-2'>
          <h2 className='font-bold'>Team Members</h2>
          <label htmlFor='manager1'  >First Manager</label>
          <input type='text' value={manager1} onChange={(e) => setManager1(e.target.value)} className='border-2 border-black'/>
          <label htmlFor='manager2'  >Second Manager</label>
          <input type='text' value={manager2} onChange={(e) => setManager2(e.target.value)} className='border-2 border-black'/>
          <label htmlFor='teamMember'  >Team Member</label>
          <input type='text' value={teamMember} onChange={(e) => setTeamMember(e.target.value)} className='border-2 border-black'/>
          <label htmlFor='sponser'  >Sponsor</label>
          <input type='text' value={sponser} onChange={(e) => setSponser(e.target.value)} className='border-2 border-black'/>
          <label htmlFor='BDH'  >Business Division Head</label>
          <input type='text' value={BDH} onChange={(e) => setBDH(e.target.value)} className='border-2 border-black'/>
          <label htmlFor='BUH'  >Business Unit Head</label>
          <input type='text' value={BUH} onChange={(e) => setBUH(e.target.value)} className='border-2 border-black'/>
          <label htmlFor='finance manager'  >Finance Manager</label>
          <input type='text' value={financeManager} onChange={(e) => setFinanceManager(e.target.value)} className='border-2 border-black'/>
          
        </div>

        <div className='w-[50%] mt-[20px]'>
          <h2 className='font-bold'>acheivements of the week</h2>
         
         <div className='flex mt-[10px] gap-[30px] '>
         <div className='flex items-center justify-center w-full'>
            <h2 className='font-[500]'>acheivement 1</h2>
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='acheivementTitle'  >Title</label>
              <input type='text' value={achevTitle1} onChange={(e) => setAchevTitle1(e.target.value)} className='border border-black'/>
              <label htmlFor='achevDesc'  >Description</label>
              <input type='text' value={achevDesc1} onChange={(e) => setAchevDesc1(e.target.value)} className='border border-black'/>
            </div>
         </div>
          
          <div className='flex mt-[30px] gap-[30px] '>
          <div className='flex items-center justify-center w-full'>
            <h2 className='font-[500]'>acheivement 2</h2>
            </div>
            <div className='flex flex-col gap-2' >
              <label htmlFor='acheivementTitle'  >Title</label>
              <input type='text' value={achevTitle2} onChange={(e) => setAchevTitle2(e.target.value)} className='border border-black'/>
              <label htmlFor='achevDesc'  >Description</label>
              <input type='text' value={achevDesc2} onChange={(e) => setAchevDesc2(e.target.value)} className='border border-black'/>
            </div>
          </div>
         

        </div>

        <div className='mt-[20px] w-[50%] flex flex-col'>
          <h2 className='font-bold'>Key Action of next week</h2>
          <div className='mt-[10px]'>
            <h2 className='font-[500]'>Action 1</h2>
            <div className='flex flex-col w-full'>
              <label htmlFor='action1'>Action</label>
              <input type='text' value={action1} onChange={(e) => setAction1(e.target.value)} className='border border-black'/>
              <label htmlFor='issue1'>Issue</label>
              <input type='text' value={issue1} onChange={(e) => setIssue1(e.target.value)} className='border border-black'/>
            </div>
          </div>
         
          <div className='mt-[20px]'>
            <h2 className='font-[500]'>Action 2</h2>
            <div className='flex flex-col w-full'>
              <label htmlFor='action2'>Action</label>
              <input type='text' value={action2} onChange={(e) => setAction2(e.target.value)} className='border border-black'/>
              <label htmlFor='issue2'>Issue</label>
              <input type='text' value={issue2} onChange={(e) => setIssue2(e.target.value)} className='border border-black'/>
            </div>
          </div>

          <div className='mt-[20px]'>
            <h2 className='font-[500]'>Action 3</h2>
            <div className='flex flex-col w-full'>
              <label htmlFor='action3'>Action</label>
              <input type='text' value={action3} onChange={(e) => setAction3(e.target.value)} className='border border-black'/>
              <label htmlFor='issue3'>Issue</label>
              <input type='text' value={issue3} onChange={(e) => setIssue3(e.target.value)} className='border border-black'/>
            </div>
          </div>

          <div className='mt-[20px]'>
            <h2 className='font-[500]'>Action 4</h2>
            <div className='flex flex-col w-full'>
              <label htmlFor='action4'>Action</label>
              <input type='text' value={action4} onChange={(e) => setAction4(e.target.value)} className='border border-black'/>
              <label htmlFor='issue4'>Issue</label>
              <input type='text' value={issue4} onChange={(e) => setIssue4(e.target.value)} className='border border-black'/>
            </div>
          </div>
                 
        </div>

        <div className='mt-[20px] w-[50%]'>
          <h2 className='font-bold'>Risk acheivement to be Highlighted</h2>
         <div className='flex gap-[30px] w-full'>
         <div className='flex items-center justify-center w-full'>
            <h2 className='font-[500] text-nowrap'>Risk Achievment 1</h2>
            </div>
            <div className='flex flex-col w-full'>
              <label htmlFor='riskAchie1'>Action</label>
              <input type='text' value={riskAchie1} onChange={(e) => setRiskAchie1(e.target.value)} className='border border-black'/>
              <label htmlFor='selectcolor1'>Set color</label>
              <select value={selectedColor1} onChange={(e)=>selectedColor1(e.target.value)} className='border border-black'>
                <option value= "">select Color </option>
                <option value="significant">Significant</option>
                <option value="mild">Mild</option>
                <option value="minor">Minor</option>
              </select>
           
              
            </div>
         </div>
            </div>
           

           <div className='mt-[20px] flex w-[50%] gap-[30px]'>
           <div className='flex items-center justify-center w-full'>
            <h2 className='font-[500]'>Risk Achievment 2</h2>
            </div>
            <div className='flex flex-col w-full'>
              <label htmlFor='riskAchie2'>Action</label>
              <input type='text' value={riskAchie2} onChange={(e) => setRiskAchie2(e.target.value)} className='border border-black'/>
             
             <label htmlFor='selectcolor2'>Set color</label>
             <select value={selectedColor2} onChange={(e)=>setSelectedColor2(e.target.value)} className='border border-black'>
               <option value= "">select Color </option>
                <option value="significant">Significatnt</option>
                <option value="mild">Mild</option>
                <option value="minor">Minor</option>
 
             </select>
             
              
            </div>
           </div>
          

          
        
        
    
    
    
    
     <button type='submit' className='mt-[30px] px-5 py-3 text-white bg-black'>submit</button>
     
      </form>
    </>
  )
}

export default EditTemplate6
