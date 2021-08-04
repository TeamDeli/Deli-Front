import React,{useState} from "react";
import Modal from "react-modal"
function RemoveEventModal({isOpen,onClose,onRemove} ){
  const [renumber,resetNumber]=useState(0);
  const onSubmit=()=>{
    resetNumber(1);
    onClose();
    }

  const onSubbmit=()=>{
    resetNumber(2);
    onRemove();
    }

    return(
      <Modal isOpen={isOpen} onRequestClose={onClose}> renumber={renumber}
        <form onSubmit={onSubmit}>
          <label>삭제하시겠습니까?</label>
          <button onClick={()=>onClose()}>close</button>
        </form>
        <form onSubbmit={onSubbmit}> <button onClick={()=>onSubbmit()}>삭제</button></form>
        </Modal>
  );
}
export {RemoveEventModal}
