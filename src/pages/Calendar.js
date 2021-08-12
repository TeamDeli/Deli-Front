import "../Calendar.css";
import FullCalendar, { CalendarContent, elementClosest, EventApi, EventSourceApi, getRelevantEvents } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import InteractionPlugin from "@fullcalendar/interaction";
import { useState, useRef } from "react";
import { AddEventModal } from "../components/calendar/AddEventModal";
import styled from "styled-components";
import { FaRegCalendarPlus } from "react-icons/fa";
import { removeElement } from '@fullcalendar/core';

const events1 = [
  {
    id: 1,
    title: "광복절",
    start: "2021-08-15",
    color: "#fd6f22"
  },
];

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
  const onEventAdded = (event) => {
    let calendarApi = calendarRef.current.getApi();
    console.log(calendarApi);
    calendarApi.addEvent(event);
  };

  return (
    <div style={{position:"relative",zIndex:0}}>
      <CalendarWrapper>
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, InteractionPlugin]}
          initialView="dayGridMonth"
          height={590}
          events={events1}
          eventClick={(e) => {
            if(window.confirm(`${e.event.title}를 삭제하시겠습니까?`)){
              e.event.remove();
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