import { useState } from "react";
import { LeftBar } from "../components/leftbar/leftbar";
import { NavBar } from "../components/navbar/navbar";
import { TodoList } from "../components/todo-list/todolist";

export const Menu = () => {
  const [handleMenuBtn, sethandleMenuBtn] = useState(false);
  const [addCollection, setaddCollection] = useState("");
  const [addCollectionArray, setaddCollectionArray] = useState([]);
  const [collectionButtonValue, setcollectionButtonValue] = useState('')
  const [handleCollectionBtn, sethandleCollectionBtn] = useState("");
  
  const handleSubmit = (e) => {
      e.preventDefault();
      setaddCollectionArray((prevState) => [...prevState, addCollection]);
    };
    
  const handleCollectionBtnState = (e) => {
        e.preventDefault();
        setcollectionButtonValue(e.target.value)
      };

  const handleBtnState = (e) => {
    e.preventDefault();
    sethandleMenuBtn(!handleMenuBtn);
  };

  return (
    <>
      <NavBar handleBtnState={handleBtnState} />
      <LeftBar
        setaddCollection={setaddCollection}
        handleSubmit={handleSubmit}
        addCollection={addCollection}
        addCollectionArray={addCollectionArray}
        handleMenuBtn={handleMenuBtn}
        handleCollectionBtnState={handleCollectionBtnState}
      />
      <TodoList collectionButtonValue={collectionButtonValue} handleMenuBtn={handleMenuBtn} />
    </>
  );
};
