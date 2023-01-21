const countDownDate = new Date("Feb 19, 2023 00:00:00").getTime();
const countDownElement = document.getElementsByClassName("countdown");
const spanDays = document.querySelector(".days");
const spanHours = document.querySelector(".hours");
const spanMinutes = document.querySelector(".minutes");
const spanSeconds = document.querySelector(".seconds");

setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const outputCountdown = function () {
    return ``;
  };

  spanDays.innerHTML = days;
  spanHours.innerHTML = hours;
  spanMinutes.innerHTML = minutes;
  spanSeconds.innerHTML = seconds;
}, 1000);
