import { useState } from "react";
import Modal from "react-modal";
import "./modal-style.css"

Modal.setAppElement("#root")

export const EditWindow = (props) => {
  const handleEditTaskSubmit = (e) => {
    e.preventDefault();
    for (let index = 0; index < props.addCollectionArray.length; index++) {
        if (
          props.addCollectionArray[index].value === props.collectionButtonValue
        ) {
          props.addCollectionArray[index].value = props.editTaskCollectionValue
          props.setcollectionButtonValue(props.editTaskCollectionValue)
        }
      }
    props.setIsEditModalActive(false)
};

if(props.isEditModalActive){
    return (
      <>
        <Modal className="modalStyle" isOpen={props.isEditModalActive}>
          <div className="modalElements">
          <p>Please rename the collection to the new one</p>
          <form onSubmit={handleEditTaskSubmit}>
            <input
              type="text"
              value={props.editTaskCollectionValue}
              onChange={(e) => props.seteditTaskCollectionValue(e.target.value)}
            />
            <input type="submit" value="edit"/>
          </form>
          </div>
        </Modal>
      </>
    );}
    else{
        return(null)
    }
}

