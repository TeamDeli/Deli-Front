import '../../Calendar.css';
import React,{useState} from "react";
import Modal from "react-modal"
import Datetime from 'react-datetime'
import styled from 'styled-components';
import "react-datetime/css/react-datetime.css"
import {AiOutlineClose} from "react-icons/ai"
import {FcCheckmark}from "react-icons/fc"

const CancelBtn=styled.button`
color: black;
  background: white;
  border: white;
  font-size: xx-large;
`;

const AddBtn=styled.button`
  color: white;
  background:#ff922b;
  border: white;
  font-size: 25px;
  border-radius: 15px 40px / 80px 10px;
  font-family: 'Noto Sans KR';
`;

const ModalBox=styled.div`
  hight:10rem;
  width:60rem;
  background:#fff;
  display:absolute;
  alignItem:"center";
`;

/*const Label=styled.div`
font-size:1rem;
font-family:"nato-sans";
`;
*/
const BtnWrapper=styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-content: flex-start;
  justify-content: center;
`;

const CancelBtnWrapper=styled.div`
  display:flex;
  justify-content:flex-end;
`;

const Title=styled.div`
  text-align-last: center;
  padding: 30px;
  font-size: x-large;
  font-weight: bolder;
  font-family: 'Noto Sans KR';
`;

const InputLabel=styled.input`
  width:95%;
  border:1px solid gray;
  outline:none;
  border-radius:0px;
  line-height:2.5rem
  font-size:1.2rem
  padding-left:0.5rem
  padding-right:0.5rem
  position:relative;
  padding: 10px 10px 10px;
`;

const ModalWrapper=styled.div`
  display:flex
  align-items: "center",
  justify-content: "center",
`;

const DateWrapper=styled.div`
  display:flex;
  padding:30px;
  justify-content: space-around;
`;

const ModalStyles=
{
  content:{
    margin:"auto",
    background:"#fff",
    width:"35rem",
    height:"35rem",
    alignItems:"center",
    border:"white",
    },
};

function AddEventModal({isOpen,onClose,onEventAdded,oncancle} ){
  const [title,setTitle]=useState("");
  const [start,setStart]=useState(new Date());
  const [end,setEnd]=useState(new Date());
  const onSubmit=(event)=>{
    event.preventDefault();
    onEventAdded({
      title,
      start,
      end
      })
      onClose();
    }
    const onCancle=()=>{
      onClose();
    }

    return(
      <ModalBox>
        <ModalWrapper>
          <Modal isOpen={isOpen} onRequestClose={onClose} style={ModalStyles}>
            <CancelBtnWrapper><CancelBtn onClick={()=>onCancle()}><AiOutlineClose /></CancelBtn></CancelBtnWrapper>
          <form onSubmit={onSubmit}>
            <Title>이벤트 추가 <FcCheckmark/></Title>
            <InputLabel placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
            <DateWrapper>            
              <Datetime ClassName="datetime" value={start} onChange={date=>setStart(date._d)} />
              <Datetime value={end} onChange={date=>setEnd(date._d)} />
            </ DateWrapper>
            <BtnWrapper><AddBtn>추가하기</AddBtn></BtnWrapper>
            </form>     
          </Modal>
        </ModalWrapper>
      </ModalBox>
    )
}
export {AddEventModal}