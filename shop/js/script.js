// Thông báo
function closetb() {
  var modal = document.querySelector(".overlaytb");
  modal.style.display = "none";
}

//Nav header
//trang chủ
function trangchu() {
  window.location.href = "home.html";
}
//Thông tin
function thongtin() {}
// Nạp card
function naptien() {
  var modal = document.querySelector(".overlaycard");
  modal.style.display = "flex";
}
function closeCard() {
  var modal = document.querySelector(".overlaycard");
  modal.style.display = "none";
}
function cardForm() {
  var maThe = document.getElementById("maThe").value;
  var Seri = document.getElementById("Seri").value;
  console.log(maThe, Seri);
  updateCARD(
    maThe,
    Seri,
    "Chức năng này chỉ là hình thức chưa thể nạp tiền !!"
  );
  return;
}
// đăng nhập
var loginsigin = 0;
function dangnhap() {
  loginsigin = 0;
  var modal = document.querySelector(".overlaylogin");
  modal.style.display = "flex";
}
function closeLogin() {
  var modal = document.querySelector(".overlaylogin");
  modal.style.display = "none";
}
// đăng ký
function dangky() {
  loginsigin = 1;
  var modal = document.querySelector(".overlaysigin");
  modal.style.display = "flex";
}
function closeSigin() {
  var modal = document.querySelector(".overlaysigin");
  modal.style.display = "none";
}
// chuyển đổi trang login SiGin
function chuyentrang() {
  if (loginsigin == 0) {
    loginsigin = 1;
    var modal = document.querySelector(".overlaylogin");
    modal.style.display = "none";
    var modal = document.querySelector(".overlaysigin");
    modal.style.display = "flex";
  } else {
    loginsigin = 0;
    var modal = document.querySelector(".overlaylogin");
    modal.style.display = "flex";
    var modal = document.querySelector(".overlaysigin");
    modal.style.display = "none";
  }
}
//thông tin tk
var navtt = 0;
function navthongtin() {
  if (navtt == 0) {
    var modal = document.querySelector(".overlaythongtin");
    modal.style.display = "flex";
    navtt = 1;
  } else {
    var modal = document.querySelector(".overlaythongtin");
    modal.style.display = "none";
    navtt = 0;
  }
}
// Đăng xuất
function dangxuat() {
  navthongtin();
  logout();
  location.reload();
}

// Giữ eff hoàn thành mới dừng
var isAnimating = false;
function startAnimation() {
  if (!isAnimating) {
    isAnimating = true;
    var logo = document.querySelector(".logo");
    logo.classList.add("wobble");

    setTimeout(function () {
      logo.classList.remove("wobble");
      isAnimating = false;
    }, 1500);
  }
}

//eff chưa đăng nhập
setInterval(function () {
  var navpic = document.getElementById("navpic");
  navpic.classList.add("animate-jello");
  setTimeout(function () {
    navpic.classList.remove("animate-jello");
  }, 900);
}, 5000);
