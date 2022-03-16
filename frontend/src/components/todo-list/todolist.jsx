import { useEffect, useState } from "react";
import "./todolist.css";

export const TodoList = (props) => {
  const [addTaskValue, setaddTaskValue] = useState('')
  const [taskValueArray, settaskValueArray] = useState([])
  const [todoListState, settodoListState] = useState("TodoListStyle-Expand");

  useEffect(() => {
    if (props.handleMenuBtn) {
      settodoListState("TodoListStyle-Collapse");
    } else {
      settodoListState("TodoListStyle-Expand");
    }
  }, [props.handleMenuBtn]);

  const handleAddTaskBtn = (e) => {
    e.preventDefault();
  };

  const handleAddTaskSubmit = (e) => {
    e.preventDefault();
    settaskValueArray(oldValue => [...oldValue, addTaskValue])
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
          <button onClick={handleAddTaskBtn}>+ Add a task</button>
          <form onSubmit={handleAddTaskSubmit}>
            <input
              type="text"
              value={addTaskValue}
              onChange={(e) => setaddTaskValue(e.target.value)}
            />
            <input type="submit" value="add" />
          </form>
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
