//effNav aside
function btnNav() {
  var btnNav = document.getElementById("btnNav").innerHTML;
  if (btnNav === "&lt;" || btnNav === "<") {
    // Sử dụng "||" để kiểm tra nếu nút có nội dung là "<" hoặc "&lt;"
    document.getElementById("quickView").style.left = "-200px";
    document.getElementById("btnNav").innerHTML = "&gt;";
  } else {
    document.getElementById("quickView").style.left = "10px";
    document.getElementById("btnNav").innerHTML = "<";
  }
}
window.addEventListener("scroll", function () {
  var isScrolling = false;

  function updateNavEff() {
    const scrollPosition = window.scrollY;

    const nicklq = document.getElementById("nicklq");
    const thuvanmay = document.getElementById("thuvanmay");

    const nicklqTop = nicklq.offsetTop;
    const nicklqBottom = nicklqTop + nicklq.clientHeight;

    const thuvanmayTop = thuvanmay.offsetTop;
    const thuvanmayBottom = thuvanmayTop + thuvanmay.clientHeight;

    if (scrollPosition < 520) {
      document
        .querySelector('nav ul li a[href="#nicklq"]')
        .classList.remove("nav-active");
    }
    if (scrollPosition >= nicklqTop && scrollPosition < nicklqBottom) {
      document
        .querySelector("nav ul li a.nav-active")
        ?.classList.remove("nav-active");
      document
        .querySelector('nav ul li a[href="#nicklq"]')
        .classList.add("nav-active");
    } else if (
      scrollPosition >= thuvanmayTop &&
      scrollPosition < thuvanmayBottom
    ) {
      document
        .querySelector("nav ul li a.nav-active")
        ?.classList.remove("nav-active");
      document
        .querySelector('nav ul li a[href="#thuvanmay"]')
        .classList.add("nav-active");
    }
  }

  window.addEventListener("scroll", function () {
    if (!isScrolling) {
      isScrolling = true;
      requestAnimationFrame(updateNavEff);
    }
  });
});

window.addEventListener("scroll", function () {
  var currentScroll = window.scrollY; // Sử dụng window.scrollY thay vì document.documentElement.scrollTop hoặc document.body.scrollTop
  const leftaside = document.getElementById("leftaside");
  const rightaside = document.getElementById("rightaside");
  var Elements = document.getElementById("nicklq");
  var Top = Elements.offsetTop;
  if (currentScroll >= Top - 62) {
    leftaside.classList.add("effNavleft");
    rightaside.classList.add("effNavright");
  } else {
    leftaside.classList.remove("effNavleft");
    rightaside.classList.remove("effNavright");
  }
});
window.addEventListener("DOMContentLoaded", function () {
  var buttonTop = document.getElementById("btnNav");
  var fixedElement = document.getElementById("quickView");
  var isScrolling = false;

  // Function để cập nhật vị trí của phần tử cố định
  function updateFixedElementPosition() {
    var buttonTopHeight = buttonTop.offsetHeight; // Độ cao của button top
    var buttonTopPosition = buttonTop.getBoundingClientRect().top; // Vị trí của button top từ đỉnh trang
    // Cập nhật vị trí của phần tử cố định
    fixedElement.style.top = buttonTopPosition + buttonTopHeight + "px";
    isScrolling = false;
  }
  // Thực hiện throttling cho sự kiện scroll
  window.addEventListener("scroll", function () {
    if (!isScrolling) {
      isScrolling = true;
      requestAnimationFrame(updateFixedElementPosition);
    }
  });
});
