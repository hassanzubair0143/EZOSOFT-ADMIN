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
   
    </>
  )
}

export default EditTemplate7
