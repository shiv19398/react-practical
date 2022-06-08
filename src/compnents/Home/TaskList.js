import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { StyledDiv } from "../../styles/styles";

const TaskList = (props) => {
  const [editTask, setEditTask] = useState("");

  const taskList = props.tasks.map((task, index) => (
    <>
      <StyledDiv
        key={index}
        style={{
          border: "1px solid rgb(167,164,164)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <input
          type="checkbox"
          name={task}
          value={task}
          checked={props.checked[index]}
          onChange={() => {
            props.handleOnChangeCheckBox(index);
          }}
        />
        <p>{task}</p>
        <div className="icons-container">
          <button
            style={{ border: "none", background: "white" }}
            onClick={() => {
              props.handleUpdateClick(index);
            }}
          >
            <BiEdit color="blue" size={25} />
          </button>
          <button
            style={{ border: "none", background: "white" }}
            onClick={() => {
              props.deleteTask(task);
            }}
          >
            <MdDelete color="red" size={25} />
          </button>
        </div>
      </StyledDiv>
    </>
  ));
  return (
    <div>
      {props.edit ? (
        <div>
          <input
            type="text"
            placeholder={props.inputText}
            value={editTask}
            onChange={(e) => {
              setEditTask(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const index = props.tasks.indexOf(props.inputText);
              props.updateTask(index, editTask);
            }}
          >
            Update
          </button>
        </div>
      ) : (
        taskList
      )}
    </div>
  );
};

export default TaskList;
