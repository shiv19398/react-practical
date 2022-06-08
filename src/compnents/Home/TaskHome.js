import React, { useState } from "react";
import Task from "./Task";
import TaskList from "./TaskList";

const TaskHome = () => {
  const [tasks, setTasks] = useState(["first"]);
  const [edit, setEdit] = useState(false);
  const [inputText, setInputText] = useState("");
  const [checked, setChecked] = useState(new Array(tasks.length).fill(false));

  const addNewTask = (task) => {
    if (task !== "") {
      setTasks([...tasks, task]);
    }
  };

  const handleUpdateClick = (index) => {
    setEdit(true);
    setInputText(tasks[index]);
  };
  const updateTask = (index, newValue) => {
    const newArray = [];

    for (let i = 0; i < tasks.length; i++) {
      if (i === index) newArray[i] = newValue;
      else newArray[i] = tasks[i];
    }

    setTasks(newArray);
    setEdit(false);
    setInputText("");
  };

  const handleOnChangeCheckBox = (position) => {
    const updatedCheckedState = checked.map((item, index) =>
      index === position ? !item : item
    );

    setChecked(updatedCheckedState);
  };
  const deleteTask = (task) => {
    const newArray = tasks.filter((t) => {
      return t !== task;
    });

    setTasks(newArray);
  };

  const deleteManyTasks = (checked) => {
    for (let i = 0; i < checked.length; i++) {
      if (checked[i]) {
        tasks.splice(i, 1);
      }
    }
  };
  return (
    <>
      <Task
        addNewTask={addNewTask}
        tasks={tasks}
        deleteManyTasks={deleteManyTasks}
      />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        handleUpdateClick={handleUpdateClick}
        edit={edit}
        inputText={inputText}
        updateTask={updateTask}
        checked={checked}
        handleOnChangeCheckBox={handleOnChangeCheckBox}
      />
    </>
  );
};

export default TaskHome;
