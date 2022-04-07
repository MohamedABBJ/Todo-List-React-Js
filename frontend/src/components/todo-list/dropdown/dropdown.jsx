import { useState } from "react";
import "./modals/dropdown.css";

export const DropDownMenu = (props) => {
    return (
      <>
        <button onClick={props.handleEditBtn}>Edit</button>
        <button>Delete</button>
      </>
    );
  };


