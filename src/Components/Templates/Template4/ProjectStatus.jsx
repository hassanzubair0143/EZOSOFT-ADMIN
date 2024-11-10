import React from 'react';
import { useLocation } from 'react-router-dom';
import ProjectStatusIcon from '/src/assets/images/project-status.svg';

const ProjectStatus = () => {
  const getStatus = (status) => {
    switch (status) {
      case 'In Progress':
        return 'bg-[#FFFF00]';
      case 'Completed':
        return 'bg-blue text-white';
      case 'Not Started':
        return 'bg-[#FB0200] text-white';
      case 'Pending':
        return 'bg-[#FFA500]';
      default:
        return '';
    }
  };

  const location = useLocation();
  const { milestones = [], pStatus1, pStatus2, pStatus3, pStatus4, due1, due2, due3, due4, done1, done2, done3, done4 } = location.state || {};

  // Prepare milestone data with statuses
  const milestoneData = [
    { name: milestones[0]?.name || 'Project Initiation', status: pStatus1, due: due1, done: done1 },
    { name: milestones[1]?.name || 'Current Business Process Analysis', status: pStatus2, due: due2, done: done2 },
    { name: milestones[2]?.name || 'Project Presentation', status: pStatus3, due: due3, done: done3 },
    { name: milestones[3]?.name || 'Add text Here', status: pStatus4, due: due4, done: done4 },
  ];

  return (
    <>
       <div className="w-full lg:px-[65px] px-[20px] pb-[50px] overflow-x-auto">
        <div className="mt-[20px] flex gap-2">
          <div className="-ml-[20px] w-[44px] h-[44px] flex items-center justify-center border border-green bg-white rounded-full">
            <img src={ProjectStatusIcon} alt="project information" />
          </div>
          <h2 className="font-[Inter] font-[700] text-[30px] leading-[36px] text-green">Project Status</h2>
        </div>
        <div className="border-t border-green max-w-[393px] -translate-y-[1px] rounded-l"></div>

        <table className="mt-[16px] w-full border border-lightClay">
          <thead className="bg-clay">
            <tr>
              <th className="border-b border-r p-[10px] text-[25px] font-[Inter] font-[600]">Milestones</th>
              <th className="border-b border-r p-[10px] text-[25px] font-[Inter] font-[600]">Status</th>
              <th className="border-b border-r p-[10px] text-[25px] font-[Inter] font-[600]">Due</th>
              <th className="border-b border-r p-[10px] text-[25px] font-[Inter] font-[600]">Done</th>
            </tr>
          </thead>
          <tbody>
            {milestoneData.map((milestone, index) => (
              <tr key={index}>
                <td className="border-b border-r p-[10px] text-[20px] font-[Inter] font-[400]">{milestone.name}</td>
                <td className={`${getStatus(milestone.status)} text-center border-b border-r p-[10px] text-[20px] font-[Inter] font-[400]`}>
                  {milestone.status || 'N/A'}
                </td>
                <td className="text-center border-b border-r p-[10px] text-[20px] font-[Inter] font-[400]">{milestone.due || 'N/A'}</td>
                <td className="text-center border-b border-r p-[10px] text-[20px] font-[Inter] font-[400]">{milestone.done || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProjectStatus;
