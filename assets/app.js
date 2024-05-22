// GETTING ELEMENTS FROM HTML
var car = document.querySelector(".car");
var redLight = document.querySelector(".redLight");
var signalTwoRed = document.querySelector(".signalTwoRed");
var greenLight = document.querySelector(".greenLight");
var signalTwoGreen = document.querySelector(".signalTwoGreen");
var yellowLight = document.querySelector(".yellowLight");
var startBtn = document.querySelector(".startBtn");
var stopBtn = document.querySelector(".stopBtn");
var count = 1;
var refId = "";
function moveCar(event) {
  var ref = setInterval(() => {
    car.style.left = count + "%";
    redLight.style.backgroundColor = "rgb(255, 255, 255, 0.3)";
    setTimeout(() => {
      if (count <= 75) {
        count += 1;
      }
      if (count >= 75) {
        stopCar();
      }
      if (count >= 65) {
        signalTwoRed.style.backgroundColor = "red";
        signalTwoGreen.style.backgroundColor = "rgb(255, 255, 255, 0.3)";
      }
    }, 1000);
    console.log(count);
  }, 100);
  greenLight.style.backgroundColor = "green";
  refId = ref;
}

function stopCar() {
  clearInterval(refId);
}
