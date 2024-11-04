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
    DBEProjected,DBEActual,DBEFinal,
  } = location.state || [];
  return (
    <>
     
    </>
  )
}

export default Template8;
