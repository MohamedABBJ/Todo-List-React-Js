import { useEffect, useState } from "react";
import { LeftBar } from "../components/leftbar/leftbar";
import { NavBar } from "../components/navbar/navbar";
import { TodoList } from "../components/todo-list/todolist";

export const Menu = () => {
  const [editTaskCollectionValue, seteditTaskCollectionValue] = useState("")
  const [handleMenuBtn, sethandleMenuBtn] = useState(false);
  const [addCollection, setaddCollection] = useState("");
  const [addCollectionArray, setaddCollectionArray] = useState([]);
  const [collectionTaskArray, setcollectionTaskArray] = useState([]);
  const [collectionButtonValue, setcollectionButtonValue] = useState("");
  const [handleAddCollection, sethandleAddCollection] = useState(false);
  
  const [test, settest] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();
    setaddCollectionArray([...addCollectionArray,{
      id:addCollectionArray.length,
      value:addCollection,
      taskValues:[]
    }]);
    sethandleAddCollection(false);
    setaddCollection("");
  };

  const handleCollectionBtnState = (e) => {
    e.preventDefault();
    setcollectionButtonValue(e.target.value);
    console.log(addCollectionArray)
  };
  
  
  useEffect(() => {
    for (let index = 0; index < addCollectionArray.length; index++) {
      if(addCollectionArray[index].value === collectionButtonValue){
        settest(addCollectionArray[index].id)
      }
     }
  }, [collectionButtonValue, addCollectionArray])
  
  const handleNewCollectionBtn = (e) => {
    e.preventDefault();
    sethandleAddCollection(true);
  };

  const handleBtnState = (e) => {
    e.preventDefault();
    sethandleMenuBtn(!handleMenuBtn);
  };
  
  
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
      setcollectionButtonValue={setcollectionButtonValue}
      editTaskCollectionValue={editTaskCollectionValue}
      seteditTaskCollectionValue={seteditTaskCollectionValue}
        test={test}
        addCollectionArray={addCollectionArray}
        collectionTaskArray={collectionTaskArray}
        setcollectionTaskArray={setcollectionTaskArray}
        collectionButtonValue={collectionButtonValue}
        handleMenuBtn={handleMenuBtn}
      />
    </>
  );
};
