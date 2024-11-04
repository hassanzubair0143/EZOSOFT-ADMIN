import React from 'react'
import { useLocation } from 'react-router-dom'

const ProjectStatus = () => {
    const location = useLocation();
    const{
        cost1,cost2,cost3,cost4,
        stake1,stake2,stake3,stake4,stake5,stake6,
    } = location.state || {};
  return (
    <>
      
    </>
  )
}

export default ProjectStatus
