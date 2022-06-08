import React from "react";

const layout =
  (Component) =>
  ({ ...props }) => {
    return (
      <div
        style={{
          border: "2px solid black",
          width: "90%",
          margin: "1em auto",
          height: "90vh",
          backgroundColor: "white",
          color: "black",
          borderRadius: "5px",
          boxShadow: "4px 4px 2px 2px black",
        }}
      >
        <h3
          style={{
            backgroundColor: "rgb(56 55 55",
            color: "#b1afaf",
            padding: "0.25em 1.75em",
          }}
        >
          ToDo List
        </h3>
        <Component {...props} />
      </div>
    );
  };

export default layout;
