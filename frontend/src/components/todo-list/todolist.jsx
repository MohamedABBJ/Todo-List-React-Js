import { useEffect, useRef, useState } from "react";
import { DropDownMenu } from "./dropdown/dropdown";
import { DeleteWindow } from "./dropdown/modals/delete-modal";
import { EditWindow } from "./dropdown/modals/edit-modal";
import "./todolist.css";

export const TodoList = (props) => {
  const [todoListState, settodoListState] = useState("TodoListStyle-Expand");
  const [handleAddTask, sethandleAddTask] = useState(false);
  const [addTaskValue, setaddTaskValue] = useState("");
  const [checkBoxState, setCheckBoxState] = useState(false);
  const [checkBoxValue, setCheckBoxValue] = useState([]);
  const addCollectionArray = props.addCollectionArray;

  useEffect(() => {
    if (props.handleMenuBtn) {
      settodoListState("TodoListStyle-Collapse");
    } else {
      settodoListState("TodoListStyle-Expand");
    }
  }, [props.handleMenuBtn]);

  const handleAddTaskBtn = (e) => {
    e.preventDefault();
    sethandleAddTask(true);
  };
  const handleAddTaskSubmit = (e) => {
    e.preventDefault();
    for (let index = 0; index < props.addCollectionArray.length; index++) {
      if (
        props.addCollectionArray[index].value === props.collectionButtonValue
      ) {
        props.addCollectionArray[index].taskValues.push(addTaskValue);
      }
    }
    setaddTaskValue("");
    sethandleAddTask(false);
  };
  console.log(checkBoxValue);
  if (
    props.collectionButtonValue === "" ||
    props.collectionButtonValue === undefined
  ) {
    return <SelectACollection todoListState={todoListState} />;
  } else {
    return (
      <div className={todoListState}>
        <div className="TodoListElements">
          <h1>{props.collectionButtonValue}</h1>
          <AddATaskBtnState
            isBtnPressed={handleAddTask}
            setaddTaskValue={setaddTaskValue}
            addTaskValue={addTaskValue}
            handleAddTaskSubmit={handleAddTaskSubmit}
            handleAddTaskBtn={handleAddTaskBtn}
            addCollectionArray={addCollectionArray}
            collectionButtonValue={props.collectionButtonValue}
            editTaskCollectionValue={props.editTaskCollectionValue}
            seteditTaskCollectionValue={props.seteditTaskCollectionValue}
            setcollectionButtonValue={props.setcollectionButtonValue}
            settest={props.settest}
          />
          <h2>Tasks</h2>
          {props.addCollectionArray[props.test].taskValues?.map(
            (taskValueArray, i) => (
              <TaskValueArray
                checkBoxState={checkBoxState}
                setCheckBoxValue={setCheckBoxValue}
                setCheckBoxState={setCheckBoxState}
                taskValueArray={taskValueArray}
                key={i}
              />
            )
          )}
          {checkBoxState ? (
            <TaskValueArrayCompleted
              taskValueArray={props.taskValueArray}
              checkBoxState={checkBoxState}
              checkBoxValue={checkBoxValue}
              addCollectionArray={props.addCollectionArray}
            />
          ) : null}
        </div>
      </div>
    );
  }
};
//Theres an error in the key value, when the use deletes a collection and adds it again the key value duplicates and says it in the console, fixing this later
const TaskValueArray = (props) => {

  return (
    <div className="taskValues">
      <input
        type="checkbox"
        name={props.taskValueArray}
        value={props.taskValueArray}
        onChange={(e) =>{
        props.setCheckBoxValue(props.taskValueArray)
        props.setCheckBoxState(!props.checkBoxState)
      }}
      />
      <p>{props.taskValueArray}</p>
    </div>
  );
};

const TaskValueArrayCompleted = (props) => {
  return <h2>Completed</h2>;
};

const SelectACollection = (props) => {
  return (
    <div className={props.todoListState}>
      <div className="TodoListElements">
        <h1>please select a collection</h1>
      </div>
    </div>
  );
};

const AddATaskBtnState = (props) => {
  const [isEditModalActive, setIsEditModalActive] = useState(false);
  const [isDeleteModalActive, setIsDeleteModalActive] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isEditActive, setisEditActive] = useState(false);
  const dropdownRef = useRef(null);
  const isBtnPressed = props.isBtnPressed;
  const handleAddTaskSubmit = props.handleAddTaskSubmit;
  const addTaskValue = props.addTaskValue;
  const setaddTaskValue = props.setaddTaskValue;
  const addCollectionArray = props.addCollectionArray;

  const handleIsActive = () => setIsActive(!isActive);

  const handleEditBtn = () => {
    setisEditActive(!isEditActive);
  };

  useEffect(() => {
    const handlePageClicked = (e) => {
      if (dropdownRef.current !== null) {
        setIsActive(!isActive);
      }
    };
    if (isActive) {
      window.addEventListener("click", handlePageClicked);
    }
    return () => {
      window.removeEventListener("click", handlePageClicked);
    };
  }, [isActive]);

  if (isBtnPressed) {
    return (
      <AddTaskInput
        setaddTaskValue={setaddTaskValue}
        addTaskValue={addTaskValue}
        handleAddTaskSubmit={handleAddTaskSubmit}
      />
    );
  } else {
    return (
      <>
        <button onClick={props.handleAddTaskBtn}>+ Add a task</button>
        <div className="dropDownContainer">
          <button onClick={handleIsActive}>...</button>
          <div
            ref={dropdownRef}
            className={`menu ${isActive ? "show" : "hide"}`}
          >
            <DropDownMenu
              setIsDeleteModalActive={setIsDeleteModalActive}
              setIsEditModalActive={setIsEditModalActive}
              isEditModalActive={isEditModalActive}
              handleEditBtn={handleEditBtn}
              isEditActive={isEditActive}
            />
          </div>
        </div>

        {isEditModalActive ? (
          <div>
            <EditWindow
              setIsEditModalActive={setIsEditModalActive}
              isEditModalActive={isEditModalActive}
              setcollectionButtonValue={props.setcollectionButtonValue}
              collectionButtonValue={props.collectionButtonValue}
              addCollectionArray={addCollectionArray}
              editTaskCollectionValue={props.editTaskCollectionValue}
              seteditTaskCollectionValue={props.seteditTaskCollectionValue}
            />
          </div>
        ) : (
          ""
        )}

        {isDeleteModalActive ? (
          <div>
            <DeleteWindow
              settest={props.settest}
              isDeleteModalActive={isDeleteModalActive}
              setIsDeleteModalActive={setIsDeleteModalActive}
              setcollectionButtonValue={props.setcollectionButtonValue}
              collectionButtonValue={props.collectionButtonValue}
              addCollectionArray={addCollectionArray}
              editTaskCollectionValue={props.editTaskCollectionValue}
              seteditTaskCollectionValue={props.seteditTaskCollectionValue}
            />
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
};

const AddTaskInput = (props) => {
  return (
    <>
      <form onSubmit={props.handleAddTaskSubmit}>
        <input
          type="text"
          value={props.addTaskValue}
          onChange={(e) => props.setaddTaskValue(e.target.value)}
        />
        <input type="submit" value="add" />
      </form>
    </>
  );
};
