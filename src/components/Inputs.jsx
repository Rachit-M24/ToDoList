import React, { useContext } from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TaskContext } from "../context/task_context";

const Inputs = () => {
  const todos = useContext(TaskContext);

  return (
    <>
      <div className="title text-white text-3xl m-1 flex justify-between items-center font-bold">
        ToDo List
        <div>
          <button className="text-xl px-4">
            <FontAwesomeIcon color="gray" icon={faCloud}></FontAwesomeIcon>
          </button>
        </div>
      </div>
      <hr />
      <div className="input-field p-2 flex flex-wrap gap-6 text-2xl">
        <div className="task-box">
          <label className="text-white p-2" htmlFor="task">
            Task
          </label>
          <input
            type="text"
            name="task"
            value={todos.newTask}
            onKeyDown={(e) => {
              e.key == "Enter" ? `${todos.addTask()}`
              :"";
              ;
            }}
            onChange={todos.inputHandleChange}
            placeholder="Enter your task"
            className="task h-6 w-5/5 p-4 rounded-md outline-none"
          />
        </div>
        <div className="submit">
          <button
            onClick={todos.addTask}
            className="add-btn w-20 text-white font-bold rounded-md bg-teal-600"
          >
            Add
          </button>
        </div>
      </div>
      <div className="two min-h-fit p-2">
        <div className="title text-white text-3xl m-1 font-bold">Tasks</div>
        <hr />
        <div className="taskbox flex flex-wrap p-2 gap-2">
          {todos.tasks.map((task, index) => {
            return (
              <Card
                key={index}
                task={task}
                indexes={index}
                completedtask={todos.completeTask}
                deleteTask={(tasks) => {
                  tasks ? todos.deleteTask(index) : " ";
                }}
              />
            );
          })}
        </div>
        <ToastContainer position="bottom-right" />
      </div>
    </>
  );
};

export default Inputs;
