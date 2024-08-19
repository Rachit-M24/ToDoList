import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTrash } from "@fortawesome/free-solid-svg-icons";

const Card = ({ task, completedtask, deleteTask, indexes }) => {
  return (
    <>
      <div className="task-card flex justify-between items-center cursor-pointer h-fit md:40 lg:max-w-fit text-clip p-2 rounded-md bg-white bg-opacity-40 shadow-black shadow-md hover:shadow-none">
        <div className="task-description text-xl flex flex-wrap">{task}</div>
        <div className="flex gap-2 px-2 text-white">
          <FontAwesomeIcon
            onClick={() => completedtask(indexes)}
            icon={faCheckCircle}
            className="hover:text-green-600"
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            onClick={deleteTask}
            icon={faTrash}
            className="hover:text-red-600"
          ></FontAwesomeIcon>
        </div>
      </div>
    </>
  );
};

export default Card;
