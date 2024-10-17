import React from 'react';

const GanttChart = () => {
  const tasks = [
    { name: "Task 1", start: 1, end:  5, color: "bg-[#58595B]" },
    { name: "Task 2", start: 4, end:  7, color: "bg-red-400" },
    { name: "Task 3", start: 3, end:  9, color: "bg-red-500" },
    { name: "Task 4", start: 6, end: 12, color: "bg-grey" },
  ]; 

  return (
    <div className="w-full p-6">
      {/* Gantt Chart Grid */}
      <div className="grid grid-cols-12 gap-4">
        {/* Timeline Row */}
        <div className="grid grid-cols-12 col-span-12 mb-2">
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="font-semibold text-center border">{i + 1}</div>
          ))}
        </div>

        {/* Task Rows */}
        {tasks.map((task, index) => (
          <div key={index} className="relative grid h-5 grid-cols-12 col-span-12 ">
            <div
              className={`${task.color} h-full rounded-md`}
              style={{
                gridColumnStart: task.start,
                gridColumnEnd: task.end + 1,
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GanttChart;
