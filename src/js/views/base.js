export const DOMobjects = {
  week: document.querySelector('.week'),
  activeDayDisplay: document.querySelector('.menu__activeDay'),

  overlay: document.getElementById('overlay'),

  btnNew: document.getElementById('btnNew'),
  btnNewBack: document.getElementById('btnNewBack'),
  newEventUI: document.querySelector('.newEventUI'),
  newEventForm: document.getElementById('newEventForm'),
  nameInput: document.getElementById('nameInput'),
  startTimeInput: document.getElementById('startTimeInput'),
  endTimeInput: document.getElementById('endTimeInput'),
  notesInput: document.getElementById('notesInput'),
  newEventSubmit: document.querySelector('.newEventUI__submit'),

  btnClone: document.getElementById('btnClone'),
  btnCloneBack: document.getElementById('btnCloneBack'),
  cloneScheduleUI: document.querySelector('.cloneScheduleUI'),
  cloneScheduleForm: document.getElementById('cloneScheduleForm'),
  cloneScheduleDaysContainer: document.querySelector('.cloneScheduleUI__daysContainer'),
  cloneScheduleDays: document.querySelectorAll('.cloneScheduleUI__day'),
  cloneScheduleSelectedDays: document.querySelectorAll('.selected'),

  btnReset: document.getElementById('btnReset'),
  btnResetBack: document.getElementById('btnResetBack'),
  resetScheduleUI: document.querySelector('.resetScheduleUI'),
  resetScheduleYes: document.querySelector('.resetScheduleUI__YES'),
  resetScheduleNo: document.querySelector('.resetScheduleUI__NO'),

  btnDays: document.getElementById('btnDays'),
  btnDaysBack: document.getElementById('btnDaysBack'),

  weekContainer: document.querySelector('.weekContainer'),

  scheduleContainer: document.querySelector('.scheduleContainer'),

  btnConfigBack: document.getElementById('btnConfigBack'),
  configEventUI: document.querySelector('.configEventUI'),
  configEventForm: document.getElementById('configEventForm'),
  nameConfigInput: document.getElementById('nameConfigInput'),
  startTimeConfigInput: document.getElementById('startTimeConfigInput'),
  endTimeConfigInput: document.getElementById('endTimeConfigInput'),
  notesConfigInput: document.getElementById('notesConfigInput'),
  configEventSubmit: document.querySelector('.configEventUI__submit'),
};

export const toStandardTime = (militaryTime) => {
  let standardTime;
  const hours = Number(militaryTime.split(':')[0]);
  const minutes = militaryTime.split(':')[1];

  if (hours > 12) {
    standardTime = `${hours % 12}:${minutes} PM`;
  } else if (hours === 12) {
    standardTime = `${hours}:${minutes} PM`;
  } else if (hours === 0) {
    standardTime = `${hours + 12}:${minutes} AM`;
  } else if (hours <= 12) {
    standardTime = `${hours}:${minutes} AM`;
  }

  return standardTime;
};

export const darkenScreen = () => {
  DOMobjects.overlay.classList.remove('overlayOFF');
  DOMobjects.overlay.classList.add('overlayON');
};

export const lightenScreen = () => {
  DOMobjects.overlay.classList.remove('overlayON');
  DOMobjects.overlay.classList.add('overlayFADE');

  setTimeout(() => {
    DOMobjects.overlay.classList.remove('overlayFADE');
    DOMobjects.overlay.classList.add('overlayOFF');
  }, 300);
};

export const fadeIn = (domObj) => {
  darkenScreen();
  domObj.style.visibility = 'visible';
  domObj.style.opacity = 1;
};

export const fadeOut = (domObj) => {
  lightenScreen();
  domObj.style.opacity = 0;
  setTimeout(() => {
    domObj.style.visibility = 'hidden';
  }, 300);
};

// Returns window width in EM units
export const getWindowWidth = () => window.innerWidth / 16;
