let time = document.querySelector('.time');
let startbutton = document.querySelector("#startbtn");
let stopbutton = document.querySelector("#stopbtn");
let resetbutton = document.querySelector("#resetbtn")
let hrs = 0;
let min = 0;
let sec = 0;
let ID;


startbutton.addEventListener('click', (event) => {
  ID = setInterval(start, 1000)
  startbutton.disabled = true;
})

stopbutton.addEventListener('click', (event) => {
  clearInterval(ID)
  startbutton.disabled=false;
})

resetbutton.addEventListener('click', (event) => {
  clearInterval(ID);
  time.innerHTML = "00:00:00"
  hrs = 0;
  min = 0;
  sec = 0;
  startbutton.disabled=false;
})

function start() {
  sec++;
  if (sec == 60) {
    sec = 0;
    min++;
    if (min == 60) {
      min = 0;
      hrs++
    }
  }
  document.querySelector('.time').innerHTML = `${hrs} : ${min}: ${sec}`

}