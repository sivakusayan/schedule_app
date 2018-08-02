import { DOMobjects } from './base';

export const renderEvent = (event, index) => {
  const markup = `
  <div id="event_${index}" class="eventContainer ${event.notes ? 'hasNote' : ''}">
    <div class="event">
      <div>
        <div class="event__time">
          <span class="event__start">${event.timeSlot.startTime}</span>
          <span class="event__end">${event.timeSlot.endTime}</span>
        </div>
      </div>
      <div>
        <div class="event__name">
          <p>${event.name}</p>
        </div>
      </div>
      <div>
        <div class="event__buttons">
          <button class="event__config">
            <i class="fas fa-cog"></i>
          </button>
          ${event.notes ? `
          <button class="event__toggleNote">
            <i class="fas fa-sticky-note"></i>
          </button>
          ` : ''}
          <button class="event__delete">
            <i class="fas fa-times-circle"></i>
          </button>
        </div>
      </div>
      <div>
        <div class="event__note">
          <p>${event.notes}</p>
        </div>
      </div>
    </div>
  </div>
  `;

  DOMobjects.routineContainer.insertAdjacentHTML('beforeend', markup);
};

export const deleteEvent = (index) => {
  const eventDOM = document.getElementById(`event_${index}`);
  eventDOM.firstChild.style.opacity = 0;
  eventDOM.firstChild.style.height = 0;
  eventDOM.style.margin = 0;
  setTimeout(() => {
    eventDOM.parentNode.removeChild(eventDOM);
  }, 300);
};

export const toggleNote = (eventIndex) => {
  const event = document.getElementById(`event_${eventIndex}`);
  event.classList.toggle('openNote');
};
