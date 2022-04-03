import { useState } from "react";
import { EditWindow } from "./windows/edit-window";
import "./windows/windows.css";

export const DropDownMenu = (props) => {
    return (
      <>
        <button onClick={props.handleEditBtn}>Edit</button>
        <button>Delete</button>
      </>
    );
  };


