import { useState } from "react";

export const DropDownMenu = (props) => {
    return (
      <>
        <button onClick={() => props.setIsEditModalActive(true)}>Edit</button>
        <button>Delete</button>
      </>
    );
  };


