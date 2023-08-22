import { DateTime } from './luxon.min.js';

const dateTime = document.querySelector('.date');
const setInitialTime = () => {
  const c = DateTime.now();
  const getCurrentTime = () => `${c.hour}:${c.minute}:${c.second}:${c.millisecond}`;
  const dayMonthYear = {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric',
  };
  dateTime.innerHTML = `${c.setLocale('en-US').toLocaleString(dayMonthYear)}, <span>${getCurrentTime()}</span>`;
};

export default setInitialTime;
