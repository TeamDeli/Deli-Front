import "../Calendar.css";
import FullCalendar, { CalendarContent, elementClosest, EventApi, EventSourceApi, getRelevantEvents } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import InteractionPlugin from "@fullcalendar/interaction";
import { useState, useRef } from "react";
import { AddEventModal } from "../components/calendar/AddEventModal";
import { RemoveEventModal } from "../components/calendar/RemoveEventModal";
import styled from "styled-components";
import { FiEdit } from "react-icons/fi";
import { removeElement } from '@fullcalendar/core';

const events1 = [
  {
    id: 123,
    title: "운동하기",
    start: "2021-08-03",
    end: "2021-08-03",
  },
];

const AddBtn = styled.button`
  color: black;
  background: white;
  border: white;
  font-size: 3rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function Calendar() {
  const [modalOpen, setModalOpen] = useState(false);
  const [removeModalOpen, removeSetModalOpen] = useState(false);
  const calendarRef = useRef(null);
  let newCalendar = new FullCalendar;
  const onEventAdded = (event) => {
    let calendarApi = calendarRef.current.getApi();
    console.log(calendarApi);
    calendarApi.addEvent(event);
  };

  /*  const onEventDelet = (event) => {
      return event;
    }; */
  return (

    <div>
      <div>
        <RemoveEventModal
          isOpen={removeModalOpen}
          onClose={() => {
            removeSetModalOpen(false);
          }
          }
          onRemove={() => {
            removeSetModalOpen(false);
          }
          }
        ></RemoveEventModal>
      </div>

      <div style={{ position: "relative", zIndex: 0 }}>
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, InteractionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            center: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          events={events1}
          contentHeight={600}
          dateClick={(e) => console.log(e.dateStr)}
          eventClick={(e) => {
            /* removeSetModalOpen(true); //삭제하겠습니까? 모달창 열고 삭제 버튼 누를 때 이벤트 삭제하는 부분
             onEventDelet(e);
             console.log(e);
             console.log(e.event);
             rrmove.EventApi=e;
             console.log(rrmove.EventApi)*/
            e.event.remove();
          }}
        />
      </div>
      <div>
        <AddEventModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onEventAdded={(event) => onEventAdded(event)}
        ></AddEventModal>
      </div>
      <Wrapper>
        <AddBtn onClick={() => setModalOpen(true)}>
          <FiEdit />
        </AddBtn>
      </Wrapper>
    </div>

  );
}
export default Calendar;