import { useEffect, useState } from "react";
import { LeftBar } from "../components/leftbar/leftbar";
import { NavBar } from "../components/navbar/navbar";
import { TodoList } from "../components/todo-list/todolist";

export const Menu = () => {
  const [handleMenuBtn, sethandleMenuBtn] = useState(false);
  const [addCollection, setaddCollection] = useState("");
  const [addCollectionArray, setaddCollectionArray] = useState([]);
  const [collectionTaskArray, setcollectionTaskArray] = useState([]);
  const [collectionTaskArray2, setcollectionTaskArray2] = useState([]);
  const [collectionButtonValue, setcollectionButtonValue] = useState("");
  const [handleAddCollection, sethandleAddCollection] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setaddCollectionArray((prevState) => [...prevState, addCollection]);
    sethandleAddCollection(false);
    setaddCollection('');

    for (let index = 0; index < addCollectionArray.length; index++) {
      const collectionBtn = addCollectionArray[index];
    }
  };
  console.log(addCollectionArray.length)
  
  const handleCollectionBtnState = (e) => {
    e.preventDefault();
    setcollectionButtonValue(e.target.value);
  };

  const handleNewCollectionBtn = (e) => {
    e.preventDefault();
    sethandleAddCollection(true);
  };

  const handleBtnState = (e) => {
    e.preventDefault();
    sethandleMenuBtn(!handleMenuBtn);
  };

  useEffect(() => {
  }, [collectionButtonValue])
  

  return (
    <>
      <NavBar handleBtnState={handleBtnState} />
      <LeftBar
        handleAddCollection={handleAddCollection}
        handleNewCollectionBtn={handleNewCollectionBtn}
        setaddCollection={setaddCollection}
        handleSubmit={handleSubmit}
        addCollection={addCollection}
        addCollectionArray={addCollectionArray}
        handleMenuBtn={handleMenuBtn}
        handleCollectionBtnState={handleCollectionBtnState}
      />
      <TodoList
      collectionTaskArray2={collectionTaskArray2}
      setcollectionTaskArray2={setcollectionTaskArray2}
        collectionTaskArray={collectionTaskArray}
        setcollectionTaskArray={setcollectionTaskArray}
        collectionButtonValue={collectionButtonValue}
        handleMenuBtn={handleMenuBtn}
      />
    </>
  );
};
