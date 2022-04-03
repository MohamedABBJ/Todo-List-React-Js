import { useState } from "react";

export const EditWindow = (props) => {

    const [isEditWindowActive, setisEditWindowActive] = useState(true)

  const handleEditTaskSubmit = (e) => {
    e.preventDefault();
    for (let index = 0; index < props.addCollectionArray.length; index++) {
        if (
          props.addCollectionArray[index].value === props.collectionButtonValue
        ) {
          props.addCollectionArray[index].value = props.editTaskCollectionValue
          props.setcollectionButtonValue(props.editTaskCollectionValue)
          setisEditWindowActive(!isEditWindowActive)
        }
      }

};

console.log(isEditWindowActive)
if(isEditWindowActive){
    return (
      <>
        <div className="editWindowStyle">
          <p>Please rename the collection to the new one</p>
          <form onSubmit={handleEditTaskSubmit}>
            <input
              type="text"
              value={props.editTaskCollectionValue}
              onChange={(e) => props.seteditTaskCollectionValue(e.target.value)}
            />
            <input type="submit" value="edit" />
          </form>
        </div>
      </>
    );}
    else{
        return(null)
    }
}

