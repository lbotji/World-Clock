function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if(losAngelesElement) {
let losAngelesDatesElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");
losAngelesDatesElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");


}


let sydneyElement = document.querySelector("#sydney");
if(sydneyElement) {
let sydneyDateElement = sydneyElement.querySelector(".date");
let sydneyTimeElement = sydneyElement.querySelector(".time");
let sydneyTime = moment().tz("Australia/Sydney");
sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
sydneyTimeElement.innerHTML = sydneyTime.format("h:mm:ss [<small>]A[</small>]");
}
}



function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/") [1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = 
  `<div class="city">
  <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("MMMM Do YYYY")}
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small>
    </div>
   </div>`;
}


let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);

updateTime();
setInterval(updateTime, 1000);