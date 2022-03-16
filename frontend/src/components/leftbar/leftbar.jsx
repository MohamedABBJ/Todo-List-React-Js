import React, { useEffect, useState } from "react";
import "./leftbar.css";

export const LeftBar = (props) => {
  const [leftBarState, setleftBarState] = useState("LeftBarStyle-Hide");
  const handleCollectionBtnState = props.handleCollectionBtnState

  useEffect(() => {
    if (props.handleMenuBtn) {
      setleftBarState("LeftBarStyle-Show");
    } else {
      setleftBarState("LeftBarStyle-Hide");
    }
  }, [props.handleMenuBtn]);

  const handleNewCollectionBtn = (e) => {
    e.preventDefault();
    console.log(e.target.value)
  };

  return (
    <>
      <div className={leftBarState}>
        <h1>Collections</h1>
        <button onClick={handleNewCollectionBtn}>+ Add a new Collection</button>
        <form onSubmit={props.handleSubmit}>
          <input
            type="text"
            value={props.addCollection}
            onChange={(e) => props.setaddCollection(e.target.value)}
            />
          <input type="submit" value="add" />
        </form>
        {props.addCollectionArray.map((addCollectionArray,i) => <CollectionElements handleCollectionBtnState={handleCollectionBtnState} addCollectionArray={addCollectionArray} key={i}/>)}
      </div>
    </>
  );
};

const CollectionElements = (props) =>{
        return(
            <button value={props.addCollectionArray} onClick={props.handleCollectionBtnState}>{props.addCollectionArray}</button>
        )
    }
