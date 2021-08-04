import React, { useState } from "react"; //아직 구현을 못한 부분...
import Modal from "react-modal";
import Datetime from "react-datetime";
import moment from "moment";
function FriendEvnet({ isOpen, onClose, onEventAdded, oncancle }) {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const onSubmit = (event) => {
    event.preventDefault();
    onEventAdded({
      title,
      start,
      end,
    });
    onClose();
  };
  const onCancle = () => {
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div>
          <Datetime value={start} onChange={(date) => setStart(date._d)} />
        </div>
        <div>
          <label>End Date</label>
          <Datetime value={end} onChange={(date) => setEnd(date._d)} />
        </div>
        <button>Add event</button>
      </form>
      <div></div>
      <div>
        <button onClick={() => onCancle()}>close</button>
      </div>
    </Modal>
  );
}
export { FriendEvnet };
