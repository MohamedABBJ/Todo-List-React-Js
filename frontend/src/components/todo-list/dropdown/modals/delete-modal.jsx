import Modal from "react-modal";
import "./modal-style.css";
Modal.setAppElement("#root");

export const DeleteWindow = (props) => {
    console.log("si")
    const handleYesButton = (e) =>{
        e.preventDefault()
        for (let index = 0; index < props.addCollectionArray.length; index++) {
            if (
              props.addCollectionArray[index].value === props.collectionButtonValue
            ) {
                props.addCollectionArray.splice(index,1)
                props.setcollectionButtonValue(undefined)
                props.settest(0)
            }
          }
          props.setIsDeleteModalActive(false)
    }
    return (
      <>
        <Modal className="modalStyle" isOpen={props.isDeleteModalActive}>
          <div className="modalElements">
            <p>Are you sure you want to delete this collection?</p>
            <button onClick={handleYesButton}>Yes</button>
            <button>No</button>
          </div>
        </Modal>
      </>
    );
   
};
