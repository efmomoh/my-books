// datetime.js
export default function updateDateTime() {
  const dateElement = document.querySelector('.date');
  const timeElement = document.querySelector('.time');

  const currentDate = new Date();

  const formattedDate = currentDate.toDateString();
  const formattedTime = currentDate.toLocaleTimeString();

  dateElement.textContent = formattedDate;
  timeElement.textContent = formattedTime;
}
