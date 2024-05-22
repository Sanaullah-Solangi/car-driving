// GETTING ELEMENTS FROM HTML
var car = document.querySelector(".car");
var redLight = document.querySelector(".redLight");
var greenLight = document.querySelector(".greenLight");
var yellowLight = document.querySelector(".yellowLight");
var count = 5;
var refId = "";
function moveCar(event) {
  var ref = setInterval(() => {
    car.style.left = count + "px";
    redLight.style.backgroundColor = "rgb(255, 255, 255, 0.3)";
    if (count <= 1100) {
      count += 10;
    } else if (count > 1120) {
      stopCar();
    }
    console.log(count);
  }, 50);
  event.target.style.backgroundColor = "green";
  refId = ref;
}

function stopCar() {
  redLight.style.backgroundColor = "red";
  greenLight.style.backgroundColor = "rgb(255, 255, 255, 0.3)";
  clearInterval(refId);
}
