import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const EditTemplate7 = () => {
    const [title,setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [obj1, setObj1] = useState('');
    const [obj2, setObj2] = useState('');
    const [obj3, setObj3] = useState('');
    const [acc1, setAcc1] = useState('');
    const [accomp2, setAcc2] = useState('');
    const [acc3, setAcc3] = useState('');
    const [ben1, setBen1] = useState('');
    const [ben2, setBen2] = useState('');
    const [risk1, setRisk1] = useState('');
    const [risk2, setRisk2] = useState('');
    const [cost1, setCost1] = useState('');
    const [cost2, setCost2] = useState('');
    const [cost3, setCost3] = useState('');
    const [cost4, setCost4] = useState('');
    const [stake1, setStake1] = useState('');
    const [stake2, setStake2] = useState('');
    const [stake3, setStake3] = useState('');
    const [stake4, setStake4] = useState('');
    const [stake5, setStake5] = useState('');
    const [stake6, setStake6] = useState('');
    
   
 const navigate = useNavigate()

 const submithandler = (e) =>{
    e.preventDefault();
    navigate('/template7',{state:{
        title,description,image,
        obj1,obj2,obj3,acc1,accomp2,acc3,
        ben1,ben2,risk1,risk2,
        cost1,cost2,cost3,cost4,
        stake1,stake2,stake3,stake4,stake5,stake6,
    }})
 }

 const uploadImage = (e) => {
    const file = e.target.files[0]
    if(file){
        const reader = new FileReader()
        reader.onloadend = () => {
            setImage(reader.result); // Save base64 image data
        };
        reader.readAsDataURL(file); // Read file as Data URL
    }
 }


  return (
    <>
    <form onSubmit={submithandler} className='flex items-center justify-center py-10 '>
    <div className=' lg:w-[50%] xl:w-[50%] md:w-[80%] w-[90%] shadow shadow-2xl px-[20px] py-[30px]'>
        <div className='flex flex-col gap-4 '>
          <h1 className='font-[Poppins] text-[28px] '>Edit Template 7</h1>

          <div>
            <label htmlFor='title'> Title:</label>
            <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} id='title' placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none' />

          </div>

          <div>
            <label htmlFor='title'> Discription:</label>
            <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} id='title' placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none' />

          </div>

          <div>
            <label htmlFor='title'> upload image:</label>
            <input type='file' onChange={uploadImage} accept='image/*' id='title' placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none' />

          </div>
         
        </div>
        <h2 className='font-bold mt-[30px]'>Objectives</h2>
        <div className='flex gap-4 mt-[20px] w-full lg:flex-nowrap xl:flex-nowrap md:flex-nowrap sm:flex-nowrap flex-wrap'>

        <div className='flex flex-col w-full'>
            <label htmlFor='title'>Objective 1:</label>
            <input type='text' value={obj1} onChange={(e) => setObj1(e.target.value)} id='title' placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none' />
        </div>
        <div className='flex flex-col w-full'>
            <label htmlFor='title'>Objective 2:</label>
            <input type='text' value={obj2} onChange={(e) => setObj2(e.target.value)} id='title' placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none' />
        </div>
        <div className='flex flex-col w-full'>
            <label htmlFor='title'>Objective 3:</label>
            <input type='text' value={obj3} onChange={(e) => setObj3(e.target.value)} id='title' placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none' />
        </div>

        </div>

        <h2 className='font-bold mt-[30px]'>Accumplishments</h2>
        <div className='flex gap-4 mt-[20px] w-full lg:flex-nowrap xl:flex-nowrap md:flex-nowrap sm:flex-nowrap flex-wrap'>

        <div className='flex flex-col w-full'>
            <label htmlFor='acc1'>Accumplishment 1:</label>
            <input type='text' value={acc1} onChange={(e) => setAcc1(e.target.value)} id='title' placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none' />
        </div>
        <div className='flex flex-col w-full'>
            <label htmlFor='accomp2'>Accomplishment 2:</label>
            <input type='text' value={accomp2} onChange={(e) => setAcc2(e.target.value)} id='title' placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none' />
        </div>
        <div className='flex flex-col w-full'>
            <label htmlFor='acc3'>Accomplishment 3:</label>
            <input type='text' value={acc3} onChange={(e) => setAcc3(e.target.value)} id='title' placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none' />
        </div>

        </div>

        <h2 className='font-bold mt-[30px]'>Benefits</h2>
        <div className='flex gap-4 mt-[20px] w-full lg:flex-nowrap xl:flex-nowrap md:flex-nowrap sm:flex-nowrap flex-wrap'>

        <div className='flex flex-col w-full'>
            <label htmlFor='ben'>Benefit 1:</label>
            <input type='text' value={ben1} onChange={(e) => setBen1(e.target.value)} id='title' placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none' />
        </div>
        <div className='flex flex-col w-full'>
            <label htmlFor='ben2'>Accomplishment 2:</label>
            <input type='text' value={ben2} onChange={(e) => setBen2(e.target.value)} id='title' placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none' />
        </div>

        </div>

        <h2 className='font-bold mt-[30px]'>Risk</h2>
        <div className='flex gap-4 mt-[20px] w-full lg:flex-nowrap xl:flex-nowrap md:flex-nowrap sm:flex-nowrap flex-wrap'>

        <div className='flex flex-col w-full'>
            <label htmlFor='risk1'>Risk 1:</label>
            <input type='text' value={risk1} onChange={(e) => setRisk1(e.target.value)} id='title' placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none' />
        </div>
        <div className='flex flex-col w-full'>
            <label htmlFor='risk2'>Risk 2:</label>
            <input type='text' value={risk2} onChange={(e) => setRisk2(e.target.value)} id='title' placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none' />
        </div>

        </div>

        <h2 className='font-bold mt-[30px]'>Cost</h2>
        <div className='flex gap-4 mt-[20px] w-full lg:flex-nowrap xl:flex-nowrap md:flex-nowrap sm:flex-nowrap flex-wrap'>

        <div className='flex flex-col w-full'>
            <label htmlFor='cost1'>Project Budget:</label>
            <input type='number' value={cost1} onChange={(e) => setCost1(e.target.value)} id='title' placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none' />
        </div>
        <div className='flex flex-col w-full'>
            <label htmlFor='cost2'>Labor Hours:</label>
            <input type='number' value={cost2} onChange={(e) => setCost2(e.target.value)} id='title' placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none' />
        </div>
        <div className='flex flex-col w-full'>
            <label htmlFor='cost3'>Planned wages:</label>
            <input type='number' value={cost3} onChange={(e) => setCost3(e.target.value)} id='title' placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none' />
        </div>
        <div className='flex flex-col w-full'>
            <label htmlFor='cost4'>Spent :</label>
            <input type='number' value={cost4} onChange={(e) => setCost4(e.target.value)} id='title' placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none' />
        </div>

        </div>

        <h2 className='font-bold mt-[30px]'>Key Stakeholders Invloved</h2>
        <div className='grid grid-cols-2 gap-4 mt-[20px] w-full '>

        <div className='flex flex-col w-full'>
            <label htmlFor='stake1'>Sponsor Organization:</label>
            <input type='text' value={stake1} onChange={(e) => setStake1(e.target.value)} id='title' placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none' />
        </div>
        <div className='flex flex-col w-full'>
            <label htmlFor='stake2'>Initiative Sponsor:</label>
            <input type='text' value={stake2} onChange={(e) => setStake2(e.target.value)} id='title' placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none' />
        </div>
        <div className='flex flex-col w-full'>
            <label htmlFor='stake3'>Initiative Owner:</label>
            <input type='text' value={stake3} onChange={(e) => setStake3(e.target.value)} id='title' placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none' />
        </div>
        <div className='flex flex-col w-full'>
            <label htmlFor='stake4'>initiative Manager:</label>
            <input type='text' value={stake4} onChange={(e) => setStake4(e.target.value)} id='title' placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none' />
        </div>
        <div className='flex flex-col w-full'>
            <label htmlFor='stake5'>IT Manager:</label>
            <input type='text' value={stake5} onChange={(e) => setStake5(e.target.value)} id='title' placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none' />
        </div>
        <div className='flex flex-col w-full'>
            <label htmlFor='stake6'>Project Office:</label>
            <input type='text' value={stake6} onChange={(e) => setStake6(e.target.value)} id='title' placeholder='Type here' className='w-[100%] py-[10px] px-[10px] border border-[#D9D9D9] rounded-md outline-none' />
        </div>

        </div>


    <div className='flex items-end justify-end'><button type='submit' className=' mt-[40px] px-5 py-3 text-white bg-black'>Submit and Continue</button></div>
      </div>
    </form>
    </>
  )
}

export default EditTemplate7
