const status = document.querySelector("#status");
const message = document.querySelector("#message");
const enterBtn = document.querySelector("#enter");
const leaveBtn = document.querySelector("#leave");
const table = document.querySelector("#time-table");
const nameInput = document.querySelector("#name");

let startTime;
let intervalId;

enterBtn.addEventListener("click", function() {
  message.innerHTML = "Occupied";
  startTime = Date.now();
  intervalId = setInterval(updateTime, 1000);
});

leaveBtn.addEventListener("click", function() {
  clearInterval(intervalId);
  const endTime = Date.now();
  const duration = (endTime - startTime) / 1000;

  const row = document.createElement("tr");
  const startCell = document.createElement("td");
  startCell.innerHTML = formatDate(new Date(startTime));
  row.appendChild(startCell);

  const durationCell = document.createElement("td");
  durationCell.innerHTML = duration + " seconds";
  row.appendChild(durationCell);

  const userCell = document.createElement("td");
  userCell.innerHTML = nameInput.value;
  row.appendChild(userCell);

  table.appendChild(row);

  message.innerHTML = "Bathroom is free";
});

function updateTime() {
  const currentTime = Date.now();
  const duration = (currentTime - startTime) / 1000;
  message.innerHTML = `Occupied (${duration.toFixed(0)} seconds)`;
}

function formatDate(date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `${hours}:${minutes}:${seconds}`;
}