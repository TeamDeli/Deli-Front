import React,{useState} from "react";
import Modal from "react-modal"
function RemoveEventModal( {isOpen,onClose,onRemove} ){
//  const [renumber,resetNumber]=useState(0);
  const onCancel=()=>{
//    resetNumber(1);
    onClose();
    }

  const onSubmit=(e)=>{
    e.preventDefault();
//    resetNumber(2);
    onRemove();
    }

    return(
      <Modal isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false}>
        <form onSubmit={onCancel}>
          <label>삭제하시겠습니까?</label>
          <button onClick={()=>onCancel()}>close</button>
        </form>
        <form onSubmit={onSubmit}>
          <button>삭제</button>
        </form>
      </Modal>
  );
}
export { RemoveEventModal }
