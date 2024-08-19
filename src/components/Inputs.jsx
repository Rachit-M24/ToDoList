import React, { useEffect, useState } from "react";
import Card from "./Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const getTheTasks = () => {
  const task = localStorage.getItem("tasks");
  return task ? JSON.parse(task) : [];
};

const Inputs = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState(getTheTasks());

  const inputHandleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    newTask.trim() == ""
      ? alert("add a task")
      : setTasks((prevTasks) => [...prevTasks, newTask]);
    setNewTask("");
  };

  const completeTask = (index) => {
    const newTasks = tasks.filter((_, i) => {
      return i !== index;
    });
    toast.success("✨Task Completed!");
    setTasks(newTasks);
  };
  const deleteTask = (index) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      const newTasks = [...tasks];
      newTasks.splice(index, 1);
      setTasks(newTasks);
      toast.error("Task Deleted!");
    }
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <>
      <div className="title text-white text-3xl m-1 font-bold">ToDo List</div>
      <hr />
      <div className="input-field p-2 flex flex-wrap gap-6 text-2xl">
        <div className="task-box">
          <label className="text-white p-2" htmlFor="task">
            Task
          </label>
          <input
            type="text"
            name="task"
            value={newTask}
            onChange={inputHandleChange}
            placeholder="Enter your task"
            className="task h-6 w-5/5 p-4 rounded-md outline-none"
          />
        </div>
        <div className="submit">
          <button
            onClick={addTask}
            // onKeyDown={"Enter"}
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
          {tasks.map((task, index) => {
            return (
              <Card
                key={index}
                task={task}
                indexes={index}
                completedtask={completeTask}
                deleteTask={() => {
                  tasks ? deleteTask(index) : " ";
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
