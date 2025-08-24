let countries = document.querySelector(".countries");
let country = document.querySelector(".country");
let place = document.querySelector(".place");
let day = document.querySelector(".day");
let time = document.querySelector(".time");
let day1 = document.querySelector(".day1");
let time1 = document.querySelector(".time1");
function watch() {
  let zone = moment().tz("America/Los Angeles").format("MMMM Do, YYYY");
  day.innerHTML = zone;
  let zonee = moment().tz("America/Los Angeles").format("HH:mm:ss A");
  time.innerHTML = zonee;
  let zone1 = moment().tz("Australia/Sydney").format("MMMM Do, YYYY");
  day1.innerHTML = zone1;
  let zonee1 = moment().tz("Australia/Sydney").format("HH:mm:ss A");
  time1.innerHTML = zonee1;
}
setInterval(watch, 1000);

function change(event) {
  let countryy = event.target.value;
  place.innerHTML = countryy;
  let daily = moment().tz(countryy).format("MMMM Do, YYYY");
  let timely = moment().tz(countryy).format("HH:mm:ss A");
  day.innerHTML = daily;
  time.innerHTML = timely;
}
countries.addEventListener("change", change);
