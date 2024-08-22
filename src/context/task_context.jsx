import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const TaskContext = createContext(null);

export const TaskContextProvider = ({ children }) => {
  const getTheTasks = () => {
    const task = localStorage.getItem("tasks");
    return task ? JSON.parse(task) : [];
  };

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
    <TaskContext.Provider
      value={{
        newTask,
        setNewTask,
        tasks,
        setTasks,
        inputHandleChange,
        addTask,
        completeTask,
        deleteTask,
        getTheTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
