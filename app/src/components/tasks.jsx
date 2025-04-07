import { CiEdit } from "react-icons/ci";
import React from "react";

const Tasks = ({ tasks }) => {
  return (
    <div>
      <ul className="flex flex-col gap-4">
        {tasks.map((task, index) => (
          <div className="flex justify-between ">
            <li key={index}>
              {task} <br />
            </li>
            <li className="cursor-pointer">
              <CiEdit />
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
