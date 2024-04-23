//gọi header
function loadHeader() {
  var xhttpHeader = new XMLHttpRequest();
  xhttpHeader.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("header").innerHTML = this.responseText;
    }
  };
  xhttpHeader.open("GET", "header.html", true);
  xhttpHeader.send();
}
//gọi footer
function loadFooter() {
  var xhttpFooter = new XMLHttpRequest();
  xhttpFooter.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("footer").innerHTML = this.responseText;
    }
  };
  xhttpFooter.open("GET", "footer.html", true);
  xhttpFooter.send();
}
setTimeout(function () {
  loadFooter();
  loadHeader();
}, 50);

//Bật tắt ảnh logo
function toggleImageLogo() {
  var imagelogo = document.querySelector(".imagelogo");
  if (imagelogo) {
    imagelogo.style.display =
      imagelogo.style.display === "none" ? "block" : "none";
  } else {
    console.error("ko tìm thấy ảnh.");
  }
  var navtt1 = document.querySelector(".navthogtin1");
  var navtt2 = document.querySelector(".navthogtin2");
  navtt1.style.display = "none";
  navtt2.style.display = "block";
}
