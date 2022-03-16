import React, { useEffect, useState } from "react";
import "./leftbar.css";

export const LeftBar = (props) => {
  const [leftBarState, setleftBarState] = useState("LeftBarStyle-Hide");
  const handleCollectionBtnState = props.handleCollectionBtnState;

  useEffect(() => {
    if (props.handleMenuBtn) {
      setleftBarState("LeftBarStyle-Show");
    } else {
      setleftBarState("LeftBarStyle-Hide");
    }
  }, [props.handleMenuBtn]);

  return (
    <>
      <div className={leftBarState}>
        <h1>Collections</h1>
        <AddACollectionBtnState
          setaddCollection={props.setaddCollection}
          addCollection={props.addCollection}
          handleSubmit={props.handleSubmit}
          isBtnPressed={props.handleAddCollection}
          handleNewCollectionBtn={props.handleNewCollectionBtn}
        />
        {props.addCollectionArray.map((addCollectionArray, i) => (
          <CollectionElements
            handleCollectionBtnState={handleCollectionBtnState}
            addCollectionArray={addCollectionArray}
            key={i}
          />
        ))}
      </div>
    </>
  );
};

const CollectionElements = (props) => {
  return (
    <button
      value={props.addCollectionArray}
      onClick={props.handleCollectionBtnState}
    >
      {props.addCollectionArray}
    </button>
  );
};

const AddACollectionBtnState = (props) => {
  const isBtnPressed = props.isBtnPressed;

  if (isBtnPressed) {
    return (
      <AddTaskInput
        setaddCollection={props.setaddCollection}
        handleSubmit={props.handleSubmit}
        addCollection={props.addCollection}
      />
    );
  } else {
    return (
      <button onClick={props.handleNewCollectionBtn}>
        + Add a new Collection
      </button>
    );
  }
};

const AddTaskInput = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          value={props.addCollection}
          onChange={(e) => props.setaddCollection(e.target.value)}
        />
        <input type="submit" value="add" />
      </form>
    </>
  );
};
