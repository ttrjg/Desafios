const day = document.querySelector("#day1")
const hrs = document.querySelector("#hrs1")
const min = document.querySelector("#min1")
const sec = document.querySelector("#sec1")
const button = document.querySelector("#openModal")
const div = document.querySelector(".invisible")
const button2 = document.querySelector("#send")

const sdate = "20 nov 2022"    

function countDown () {

    let date = new Date(sdate)
    let currentDate = new Date();
    
    let secs = (date - currentDate) / 1000

    let days = Math.floor(secs / 3600 / 24)
    let hours = Math.floor(secs / 3600) % 24
    let minutes = Math.floor(secs / 60) % 60
    let seconds = Math.floor(secs) % 60

    day.innerHTML = formatDay(days);
    hrs.innerHTML = formatTime(hours);
    min.innerHTML = formatTime(minutes);
    sec.innerHTML = formatTime(seconds);

}

function formatTime(time) {
    return time < 10? `:0${time}` : `:${time}`;
}
function formatDay(time) {
    return time < 10? `0${time}` : `:${time}`;
}
setInterval(countDown, 1000);
countDown()

button.addEventListener("click", open)
button2.addEventListener("click", close)

function open() {
    div.classList.remove("invisible")    
    div.classList.add("active")
}

function close() {
    div.classList.remove("active")    
    div.classList.add("invisible")
}