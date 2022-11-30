const eventsData = [
  {
    id: "event-1",
    stime: "1",
    etime: "2",
  },
  {
    id: "event-2",
    stime: "4",
    etime: "7",
  },
  {
    id: "event-3",
    stime: "3",
    etime: "6",
  },
  {
    id: "event-4",
    stime: "11",
    etime: "14",
  },
];

let events = [];
let fullTime = [];
let createdEvents = [];

// Loop to select all the cells store them inside an array.
for (let i = 0; i < 24; i++) {
  events[i] = document.querySelector(`#event-${i + 1}`);
}

console.log("events ------", events);

let fullTimeList = document.querySelectorAll(".full");
console.log("Full Time ", fullTimeList.textContent);

function createEvent(startTime, endTime) {
  const newEvent = events[startTime].appendChild(eventContent(startTime));
  console.log("event", newEvent);

  newEvent.classList.add("event");
  newEvent.style.height = (endTime - startTime) * 100 + "px";

  createdEvents.push(newEvent);
}

function fillEvents(startTime, endTime) {
  for (let i = 0; i < 12; i++) {
    events[i] = document.querySelector(`#event-${i + 1}`);
    events[i].textContent = `${eventsData[i].time} - ${eventsData[i].id}`;
  }
  // for (let i = 0; i < eventsData.length; i++) {
  //     const event = eventsData[i];
  //     const eventTime = new Date(event.time);
  //     if (eventTime >= startTime && eventTime <= endTime) {
  // for (let i = 0; i < eventsData.length; i++) {
  //     events[i].textContent = eventsData[i].time;
  // }
}

// function setEvent(startTime, endTime) {
//   const newEvent = hourSelector[startTime].appendChild(content(startTime));
//   console.log("event", newEvent);

//   newEvent.classList.add("event");
//   newEvent.style.height = (endTime - startTime) * 100 + "px";
// }

// createEvent(2, 4);
// createEvent(2,4);
// setEvent(3, 5);
// setEvent(11, 19);

console.log("Created Events ", createdEvents[0]);

function elementsOverlap(el1, el2) {
    const domRect1 = el1.getBoundingClientRect();
    const domRect2 = el2.getBoundingClientRect();
  
    return !(
      domRect1.top > domRect2.bottom ||
      domRect1.right < domRect2.left ||
      domRect1.bottom < domRect2.top ||
      domRect1.left > domRect2.right
    );
  }
  
  const el1 = document.getElementById('cont-1');
  const el2 = document.getElementById('cont-2');
//   const el3 = document.getElementById('box3');
  
if(elementsOverlap(el1, el2)) {
    el1.appendChild(el2);
        console.log("hello", el2.id);
        el2.style.marginLeft = `${
          (3 - 2) * 120

        //   (objArr[i].start - objArr[j].start) * 120
        }px`;
      }
// }
  console.log(elementsOverlap(el1, el2)); // 👉️ true



// for(let i = 0; i < events.length; i++) {
//   if(events[i].id === eventsData[i].id ) {
//     console.log("Events ", events[i].id, ": ", eventsData[i].id);
//   }
// }
console.log("Events ", document.querySelector(".am-inner-half").innerHTML);

function eventContent(startTime) {
  const eventDiv = document.createElement("div");
  eventDiv.classList.add("event-content");

  eventTime = document.createElement("span");
  eventTime.classList.add("all-day");
  if (startTime < 12) {
    eventTime.textContent = `${startTime}:00 AM`;
  } else {
    eventTime.textContent = `${startTime}:00 PM`;
  }

  // eventTime.textContent = "9:00AM - ";

  eventName = document.createElement("b");
  eventName.classList.add("sample-item");
  eventName.textContent = "Sample Item";

  eventLocation = document.createElement("span");
  eventLocation.classList.add("sample-location");
  eventLocation.textContent = "Sample Location";
  eventLocation.style.marginLeft = "0px";
  // document.querySelector(".sample-location").style.marginLeft = "0px";

  const eventFlex = document.querySelector(".event");
  const eventDivData = eventFlex.appendChild(eventDiv);
  eventDivData.appendChild(eventTime);
  eventDivData.appendChild(eventName);
  eventDivData.appendChild(eventLocation);

  return eventDiv;
}

// let testing = eventContent(12);
// console.log("Testing ", testing);
