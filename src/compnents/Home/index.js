import React from "react";
import layout from "./layout";
import TaskHome from "./TaskHome";

function index() {
  return (
    <div style={{ width: "50%", margin: "4em auto" }}>
      <h3>ToDo List</h3>
      <TaskHome />
    </div>
  );
}

export default layout(index);
