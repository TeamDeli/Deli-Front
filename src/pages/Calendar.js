import "../Calendar.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import InteractionPlugin from "@fullcalendar/interaction";
import { useState, useRef } from "react";
import { AddEventModal } from "../components/calendar/AddEventModal";
import { RemoveEventModal } from "../components/calendar/RemoveEventModal";
import styled from "styled-components";
import { FiEdit } from "react-icons/fi";

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
  var [number, setNumber] = useState(new FullCalendar());
  const calendarRef = useRef(null);
  const onEventAdded = (event) => {
    let calendarApi = calendarRef.current.getApi();
    console.log(calendarApi);
    calendarApi.addEvent(event);
  };

  return (
    <cellWrapper>
      <calendarWrapper>
        <div>
          <RemoveEventModal
            isOpen={removeModalOpen}
            onClose={() => {
              removeSetModalOpen(false);
              number = 1;
            }}
            onRemove={() => {
              removeSetModalOpen(false);
            }}
          ></RemoveEventModal>
        </div>

        <div style={{ position: "relative", zIndex: 0 }}>
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, timeGridPlugin, InteractionPlugin]}
            initialView="dayGridMonth"
            hearToolbar={{
              center: "dayGridMonth,timeGridWeek,timeGridDay new",
            }}
            customButtons={{
              myCustomButton: {
                text: "nasd",
                click: () => console.log("new evnet"),
              },
            }}
            events={events1}
            contentHeight={600}
            button
            noewIndicator
            dateClick={(e) => console.log(e.dateStr)}
            eventClick={(e) => {
              /*removeSetModalOpen(true); //삭제하겠습니까? 모달창 열고 삭제 버튼 누를 때 이벤트 삭제하는 부분
               onEventremove(e.event);*/
              e.event.remove();
            }}
          />
        </div>
        <div>
          <AddEventModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            oncancel={() => setModalOpen(false)}
            onEventAdded={(event) => onEventAdded(event)}
          ></AddEventModal>
        </div>
        <Wrapper>
          <AddBtn onClick={() => setModalOpen(true)}>
            <FiEdit />
          </AddBtn>
        </Wrapper>
      </calendarWrapper>
    </cellWrapper>
  );
}
export default Calendar;