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
    const [DBEProjected, setDBEProjected] = useState('');
    const [DBEActual, setDBEActual] = useState(''); 
    const [DBEFinal, setDBEFinal] = useState('');
    const [doc1, setDoc1] = useState('');
    const [doc2, setDoc2] = useState('');
    const [doc3, setDoc3] = useState('');
    const [doc4, setDoc4] = useState('');


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
            DBEProjected,DBEActual,DBEFinal,
            doc1,doc2,doc3,doc4,
        }})
    }


  return (
   <>
  
   </>
  )
}

export default EditTemplate8
