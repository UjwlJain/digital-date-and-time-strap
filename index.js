const monthEl = document.querySelector("#date h1");
const fullDateEl = document.querySelector("#date h3");
const monthInx = new Date().getMonth();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

  monthEl.innerText = months[monthInx];
  fullDateEl.innerText = new Date().toDateString();

const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");

function updatetime() {
    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();

    h = (h < 10 ? "0" : "") + h;
    m = (m < 10 ? "0" : "") + m;

hourEl.innerText = h;
minuteEl.innerText = m;

setTimeout(() => {
    updatetime();
  }, 60000); // update every minute
}

updatetime();