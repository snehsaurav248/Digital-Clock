
const clockElement = document.getElementById('clock');
const dateElement = document.getElementById('date');


const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');


let clockInterval;


function updateClock() {
  const currentDate = new Date();
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  const seconds = String(currentDate.getSeconds()).padStart(2, '0');
  const time = `${hours}:${minutes}:${seconds}`;
  clockElement.textContent = time;

  const month = currentDate.toLocaleString('default', { month: 'long' });
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  const date = `${month} ${day}, ${year}`;
  dateElement.textContent = date;
}


function startClock() {
  updateClock(); 
  clockInterval = setInterval(updateClock, 1000); 
}


function stopClock() {
  clearInterval(clockInterval);
}


startBtn.addEventListener('click', startClock);
stopBtn.addEventListener('click', stopClock);
