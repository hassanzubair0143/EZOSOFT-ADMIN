import React from 'react'
import { useLocation } from 'react-router-dom'

const Hero = () => {

    const location = useLocation();
    const {
        title,description,image,
        obj1,obj2,obj3,acc1,accomp2,acc3,
        ben1,ben2,risk1,risk2,

     } = location.state || {};

  return (
    <>
       
    </>
  )
}

export default Hero
