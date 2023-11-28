const days = document.querySelector("#days");
const hrs = document.querySelector("#hrs");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

function updateTime() {
  const currentYear = new Date().getFullYear();
  const newYear = new Date(`January 1 ${currentYear + 1} 00:00:00`);

  const currentDate = new Date();

  const diff = newYear - currentDate;
  const currentDay = Math.floor(diff / 1000 / 60 / 60 / 24);
  const currentHour = Math.floor(diff / 1000 / 60 / 60) % 24;
  const currentMin = Math.floor(diff / 1000 / 60) % 60;
  const currentSec = Math.floor(diff / 1000) % 60;

  days.innerHTML = currentDay < 10 ? "0" + currentDay : currentDay;
  hrs.innerHTML = currentHour < 10 ? "0" + currentHour : currentHour;
  min.innerHTML = currentMin < 10 ? "0" + currentMin : currentMin;
  sec.innerHTML = currentSec < 10 ? "0" + currentSec : currentSec;
}
updateTime();

setInterval(updateTime, 1000);
