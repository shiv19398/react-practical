import React, { useState } from "react";
import { StyledInput, StyledButton, StyledDiv } from "../../styles/styles";

const Task = ({ addNewTask, deleteManyTasks }) => {
  const [task, setTask] = useState("");

  const handleClick = () => {
    addNewTask(task);
    setTask("");
  };

  return (
    <StyledDiv>
      <StyledInput
        type="text"
        placeholder="New Task"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <StyledButton onClick={handleClick}>Add</StyledButton>
      <StyledButton onClick={deleteManyTasks}>Delete All</StyledButton>
    </StyledDiv>
  );
};

export default Task;
