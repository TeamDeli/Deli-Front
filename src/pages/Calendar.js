import "../Calendar.css";
import FullCalendar, { CalendarContent, elementClosest, EventApi, EventSourceApi, getRelevantEvents } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import InteractionPlugin from "@fullcalendar/interaction";
import { useState, useRef, useEffect } from "react";
import { AddEventModal } from "../components/calendar/AddEventModal";
import styled from "styled-components";
import { FaRegCalendarPlus } from "react-icons/fa";
import { removeElement } from '@fullcalendar/core';

const CalendarWrapper=styled.div`
  display:flex;
  justify-content: center;
  padding: 30px 0px 0px 0px;
  align-items: self-start;
`;

const AddBtn = styled.button`
  color: black;
  background: white;
  border: white;
  font-size: 2.5rem;
  padding: 0 0 0 10px;
  cursor: pointer;
`;

function Calendar() {
  const [modalOpen, setModalOpen] = useState(false);
  const calendarRef = useRef(null);
  const [events,setEvents]=useState([]);
  const onEventAdded = (event) => {
    let calendarApi = calendarRef.current.getApi();
    console.log(calendarApi);
    calendarApi.addEvent(event);
  };

  useEffect(()=>{
    fetch("http://localhost:8000/deli/calendar/get").then((res)=>res.json()).then((res)=>{
      setEvents(res); console.log(res);
    })
  },[])

  const handleEventAdd=(e)=>{
    var data={
      id:e.event.id,
      title:e.event.title,
      start:e.event.start,
      end:e.event.end,
      color:e.event.color
    }
    console.log(e);
    fetch("http://localhost:8000/deli/calendar/post",{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data),
    }).then((res)=>res.json()).then((res)=>{
      console.log(res);
    })

  }
  const deleteEvent=(e)=>{
    fetch("http://localhost:8000/deli/calendar/delete/"+e,{
      method:"DELETE",
    })
    .then((res)=>res.text()).then((res)=>{console.log(res)})

  }

  return (
    <div style={{position:"relative",zIndex:0}}>
      <CalendarWrapper>
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, InteractionPlugin]}
          initialView="dayGridMonth"
          height={590}
          events={events}
          eventAdd={(e)=>handleEventAdd(e)}
          eventClick={(e) => {
            if(window.confirm(`${e.event.title}를 삭제하시겠습니까?`)){
              e.event.remove();
              //console.log(e.evnet);
              deleteEvent(e.event.id);
            }
          }}
        />
        <AddBtn onClick={() => setModalOpen(true)}>
          <FaRegCalendarPlus />
        </AddBtn>
      </CalendarWrapper>
        <AddEventModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onEventAdded={(event) => onEventAdded(event)}
        ></AddEventModal>
    </div>
  );
}
export default Calendar;