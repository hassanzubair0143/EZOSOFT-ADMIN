import { Construction } from '@mui/icons-material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const EditTemplate8 = () => {
    const navigate = useNavigate()
    const [title,setTitle] = useState('');
    const [engineer,setEngineer] = useState('');
    const [preparedBy,setPreparedBy] = useState('');
    const [date, setDate] = useState('');
    const [summary,setSummary] = useState('');
    const [info, setInfo] = useState('');
    const [cost, setCost] = useState('');
    const [changes, setChanges] = useState('');
    const [finalCost, setFinalCost] = useState('');
    const [info2, setInfo2] = useState('');
    const [cost2, setCost2] = useState('');
    const [changes2, setChanges2] = useState('');
    const [finalCost2, setFinalCost2] = useState('');
    const [deadline, setDeadline] = useState('');
    const [completion, setCompletion] = useState('');
    const [eventdesc, setEventdesc] = useState('');
    const [eventdesc2, setEventdesc2] = useState('');
    const [deadline2, setDeadline2] = useState('');
    const [completion2, setCompletion2] = useState('');
    const [deadline3, setDeadline3] = useState('');
    const [completion3, setCompletion3] = useState('');
    const [eventdesc3, setEventdesc3] = useState('');
    const [construction, setConstruction] = useState('');
    const [equipment, setEquipment] = useState('');
    const [adminis, setAdminis] = useState('');
    const [other, setOther] = useState('');
    const [TotalAmount, setTotalAmount] = useState('');
    const [source1, setSource1] = useState('');
    const [amount1, setAmount1] = useState('');
    const [source2, setSource2] = useState('');
    const [amount2, setAmount2] = useState('');
    const [source3, setSource3] = useState('');
    const [amount3, setAmount3] = useState('');
    const [source4, setSource4] = useState('');
    const [amount4, setAmount4] = useState('');
    const [totalSourceAmount, setTotamSourceAmount] = useState('');


    const submithandler = (e) => {
        e.preventDefault();
        navigate('/template8', {state:{
            title,engineer,preparedBy,date,summary,
            info,cost,changes,finalCost,
            info2,cost2,changes2,finalCost2,
            deadline,completion,eventdesc,
            deadline2,completion2,eventdesc2,
            deadline3,completion3,eventdesc3,
            construction,equipment,adminis,other,TotalAmount,
            source1,amount1,source2,amount2,source3,amount3,source4,amount4,totalSourceAmount,
        }})
    }


  return (
   <>
   <form onSubmit={submithandler}>
   <div className='full p-[50px]'>
     
     <div className='flex flex-col gap-4'>
     <h2 className='font-bold'>Project Information</h2>
     <div>
        <label htmlFor='title'>Project Title</label>
        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} id='title' placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none' />
 
     </div>
     <div>
        <label htmlFor='engineer'>Project engineer</label>
        <input type='text' value={engineer} onChange={(e) => setEngineer(e.target.value)}  placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none' />
 
     </div>
     <div className='flex gap-[20px]'>
        <div className='w-full'>
        <label htmlFor='prepared'>Prepared By</label>
        <input type='text' value={preparedBy} onChange={(e) => setPreparedBy(e.target.value)}  placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none' />
        </div>
        <div className='w-full'>
        <label htmlFor='date'>Prepared Date</label>
        <input type='date' value={date} onChange={(e) => setDate(e.target.value)}  placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none' />
        </div>
 
     </div>
     <div>
        <label htmlFor='summary'>Project Summary</label>
        <input type='text' value={summary} onChange={(e) => setSummary(e.target.value)}  placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none' />
 
     </div>

     </div>
     <h2 className='mt-[20px] font-bold'>Contract Data</h2>
     <div className='flex gap-[20px]'>
     <div className='flex flex-col w-full gap-[10px]'>
        <h2 className='font-[500] mt-[10px]'>CONTRACT 1</h2>
        <div className='w-full'>
            <label  htmlFor='info'>Consultant Contract Info</label>
            <input value={info} onChange={(e)=> setInfo(e.target.value)} placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none'/>
        </div>
        <div className='w-full'>
            <label  htmlFor='initialCost'>Initial Cost</label>
            <input value={cost} onChange={(e)=> setCost(e.target.value)} placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none'/>
        </div>
        <div className='w-full'>
            <label  htmlFor='changes'>Total Changes</label>
            <input value={changes} onChange={(e)=> setChanges(e.target.value)} placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none'/>
        </div>
        <div className='w-full'>
            <label  htmlFor='fcost'>Final Cost</label>
            <input value={finalCost} onChange={(e)=> setFinalCost(e.target.value)} placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none'/>
        </div>
     </div>
     <div className='flex flex-col w-full gap-[10px]'>
        <h2 className='font-[500] mt-[10px]'>CONTRACT 2</h2>
        <div className='w-full'>
            <label  htmlFor='info2'>Consultant Contract Info</label>
            <input value={info2} onChange={(e)=> setInfo2(e.target.value)} placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none'/>
        </div>
        <div className='w-full'>
            <label  htmlFor='initialCost2'>Initial Cost</label>
            <input value={cost2} onChange={(e)=> setCost2(e.target.value)} placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none'/>
        </div>
        <div className='w-full'>
            <label  htmlFor='changes2'>Total Changes</label>
            <input value={changes2} onChange={(e)=> setChanges2(e.target.value)} placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none'/>
        </div>
        <div className='w-full'>
            <label  htmlFor='fcost2'>Final Cost</label>
            <input value={finalCost2} onChange={(e)=> setFinalCost2(e.target.value)} placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none'/>
        </div>
     </div>

     </div>

     <h2 className='mt-[20px] font-bold'>Project Schedule</h2>
     <div className='flex gap-[20px]'>
     <div className='flex flex-col w-full gap-[10px]'>
        <h2 className='font-[500] mt-[10px]'>Schedule 1</h2>
        <div className='w-full'>
            <label  htmlFor='deadline'>Initial deadline</label>
            <input value={deadline} onChange={(e)=> setDeadline(e.target.value)} placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none'/>
        </div>
        <div className='w-full'>
            <label  htmlFor='completion'>Actual Completion</label>
            <input value={completion} onChange={(e)=> setCompletion(e.target.value)} placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none'/>
        </div>
        <div className='w-full'>
            <label  htmlFor='eventDesc'>Event Description</label>
            <input value={eventdesc} onChange={(e)=> setEventdesc(e.target.value)} placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none'/>
        </div>
       
     </div>

     <div className='flex flex-col w-full gap-[10px]'>
        <h2 className='font-[500] mt-[10px]'>Schedule 2</h2>
        <div className='w-full'>
            <label  htmlFor='deadline2'>Initial deadline</label>
            <input value={deadline2} onChange={(e)=> setDeadline2(e.target.value)} placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none'/>
        </div>
        <div className='w-full'>
            <label  htmlFor='completion2'>Actual Completion</label>
            <input value={completion2} onChange={(e)=> setCompletion2(e.target.value)} placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none'/>
        </div>
        <div className='w-full'>
            <label  htmlFor='eventDesc2'>Event Description</label>
            <input value={eventdesc2} onChange={(e)=> setEventdesc2(e.target.value)} placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none'/>
        </div>
       
     </div>
     <div className='flex flex-col w-full gap-[10px]'>
        <h2 className='font-[500] mt-[10px]'>Schedule 3</h2>
        <div className='w-full'>
            <label  htmlFor='deadline3'>Initial deadline</label>
            <input value={deadline3} onChange={(e)=> setDeadline3(e.target.value)} placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none'/>
        </div>
        <div className='w-full'>
            <label  htmlFor='completion3'>Actual Completion</label>
            <input value={completion3} onChange={(e)=> setCompletion3(e.target.value)} placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none'/>
        </div>
        <div className='w-full'>
            <label  htmlFor='eventDesc3'>Event Description</label>
            <input value={eventdesc3} onChange={(e)=> setEventdesc3(e.target.value)} placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none'/>
        </div>
       
     </div>
     

     </div>
     <h2 className='font-bold mt-[20px]'>Final Project Costs</h2>
    <div className='flex gap-[20px] w-full'>
    <div className='w-full'>
        <label htmlFor='construction'>Construction</label>
        <input type='text' value={construction} onChange={(e) => setConstruction(e.target.value)} id='title' placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none' />
     </div>
     <div className='w-full'>
        <label htmlFor='equip'>Equipment</label>
        <input type='text' value={equipment} onChange={(e) => setEquipment(e.target.value)} id='title' placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none' />
     </div>
     <div className='w-full'>
        <label htmlFor='administrative'>Administrative</label>
        <input type='text' value={adminis} onChange={(e) => setAdminis(e.target.value)} id='title' placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none' />
     </div>
     <div className='w-full'>
        <label htmlFor='others'>Others</label>
        <input type='text' value={other} onChange={(e) => setOther(e.target.value)} id='title' placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none' />
     </div>
     
     <div className='w-full'>
        <label htmlFor='tAmount'>Total Amount</label>
        <input type='text' value={TotalAmount} onChange={(e) => setTotalAmount(e.target.value)} id='title' placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none' />
     </div>
    </div>

    <h2 className='mt-[20px] font-bold'>Project Funding Source</h2>
     <div className='flex gap-[20px]'>
     <div className='flex flex-col w-full gap-[10px]'>
        <h2 className='font-[500] mt-[10px]'>Source 1</h2>
        <div className='w-full'>
            <label  htmlFor='source1'>Source</label>
            <input value={source1} onChange={(e)=> setSource1(e.target.value)} placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none'/>
        </div> 
        <div className='w-full'>
            <label  htmlFor='amount1'>Amount</label>
            <input value={amount1} onChange={(e)=> setAmount1(e.target.value)} placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none'/>
        </div>
     </div>

     <div className='flex flex-col w-full gap-[10px]'>
        <h2 className='font-[500] mt-[10px]'>Source 2</h2>
        <div className='w-full'>
            <label  htmlFor='source2'>Source</label>
            <input value={source2} onChange={(e)=> setSource2(e.target.value)} placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none'/>
        </div>
        <div className='w-full'>
            <label  htmlFor='amount2'>Amount</label>
            <input value={amount2} onChange={(e)=> setAmount2(e.target.value)} placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none'/>
        </div> 
     </div>
     <div className='flex flex-col w-full gap-[10px]'>
        <h2 className='font-[500] mt-[10px]'>Source 3</h2>
        <div className='w-full'>
            <label  htmlFor='source3'>Source</label>
            <input value={source3} onChange={(e)=> setSource3(e.target.value)} placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none'/>
        </div> 
        <div className='w-full'>
            <label  htmlFor='amount3'>Amount</label>
            <input value={amount3} onChange={(e)=> setAmount3(e.target.value)} placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none'/>
        </div>
     </div>
     <div className='flex flex-col w-full gap-[10px]'>
        <h2 className='font-[500] mt-[10px]'>Source 4</h2>
        <div className='w-full'>
            <label  htmlFor='source4'>Source</label>
            <input value={source4} onChange={(e)=> setSource4(e.target.value)} placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none'/>
        </div> 
        <div className='w-full'>
            <label  htmlFor='amount4'>Amount</label>
            <input value={amount4} onChange={(e)=> setAmount4(e.target.value)} placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none'/>
        </div>
     </div>
     </div>
     <div className='w-full'>
            <label  htmlFor='totalSourceAmount'>Total Amount</label>
            <input value={totalSourceAmount} onChange={(e)=> setTotamSourceAmount(e.target.value)} placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none'/>
        </div>

    


  <button type='submit' className='text-white bg-black mt-[30px] py-[10px] px-3 rounded-lg'>submit</button>
    </div>
   </form>
   </>
  )
}

export default EditTemplate8
