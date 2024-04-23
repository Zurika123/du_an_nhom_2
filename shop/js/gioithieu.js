var idvuanhap = "";
function contactme(id) {
  if (id !== idvuanhap) {
    idvuanhap = id;
    document.getElementById("hoang").style.left = "-150%";
    document.getElementById("kha").style.left = "-150%";
    document.getElementById("hai").style.left = "-150%";
    document.getElementById(id).style.animation = "bounce-in-left 1s both";
    setTimeout(function () {
      document.getElementById(id).style.left = 0;
    }, 100);
    setTimeout(function () {
      document.getElementById(id).style.animation = "none";
    }, 1000);
  }
}

// Giữ focus cho contactme
var allElements = document.querySelectorAll("*");
allElements.forEach(function (element) {
  element.addEventListener("mousedown", function (event) {
    if (!event.target.closest(".contactme")) {
      event.preventDefault();
    }
  });
});

//eff body
document.addEventListener("DOMContentLoaded", function () {
  var body = document.querySelector("body");
  body.classList.add("body-animation");
});
