import { useEffect, useState } from "react";
import "./todolist.css";

export const TodoList = (props) => {
  const [addTaskValue, setaddTaskValue] = useState('')
  const [taskValueArray, settaskValueArray] = useState([])
  const [todoListState, settodoListState] = useState("TodoListStyle-Expand");
  const [handleAddTask, sethandleAddTask] = useState(false)

  useEffect(() => {
    if (props.handleMenuBtn) {
      settodoListState("TodoListStyle-Collapse");
    } else {
      settodoListState("TodoListStyle-Expand");
    }
  }, [props.handleMenuBtn]);

  const handleAddTaskBtn = (e) => {
    e.preventDefault();
    sethandleAddTask(true)
  };

  const handleAddTaskSubmit = (e) => {
    e.preventDefault();
    settaskValueArray(oldValue => [...oldValue, addTaskValue])
    props.setcollectionTaskArray( [...props.collectionTaskArray, addTaskValue])
    props.setcollectionTaskArray2( [...props.collectionTaskArray2, addTaskValue])
    setaddTaskValue('')
    sethandleAddTask(false)
  }; 
  
  if (props.collectionButtonValue==="") {
    return(
      <SelectACollection todoListState={todoListState}/>
    )
  }else{
    return (
      <div className={todoListState}>
        <div className="TodoListElements">
          <h1>{props.collectionButtonValue}</h1>
        <AddATaskBtnState isBtnPressed={handleAddTask} setaddTaskValue={setaddTaskValue} addTaskValue={addTaskValue} handleAddTaskSubmit={handleAddTaskSubmit} handleAddTaskBtn={handleAddTaskBtn}/>
        {taskValueArray.map((taskValueArray,i) => <TaskValueArray taskValueArray={taskValueArray} key={i}/>)}
        </div>
      </div>
    );
  }
};

const TaskValueArray = (props) =>{
  return(
    <div>
      <p>{props.taskValueArray}</p>
    </div>
  )
}

const SelectACollection = (props) =>{
  return(
    <div className={props.todoListState}>
      <div className="TodoListElements">
      <h1>please select a collection</h1>
      </div>
    </div>
  )
}

const AddATaskBtnState = (props) =>{
  const isBtnPressed = props.isBtnPressed
  const handleAddTaskSubmit = props.handleAddTaskSubmit
  const addTaskValue = props.addTaskValue
  const setaddTaskValue = props.setaddTaskValue

  if (isBtnPressed) {
    return(<AddTaskInput setaddTaskValue={setaddTaskValue} addTaskValue={addTaskValue} handleAddTaskSubmit={handleAddTaskSubmit} />)
  }
  else{
    return(<button onClick={props.handleAddTaskBtn}>+ Add a task</button>)
  }
}

const AddTaskInput = (props) =>{
  return(
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
  )
}