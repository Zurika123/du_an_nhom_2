function toggleElement(id) {
  var elements = ["litttk", "lilsnt", "lilsacc", "lilsvp", "lirvp", "lidct"];
  elements.forEach(function (elementId) {
    document.getElementById(elementId).style.display = "none";
  });
  document.getElementById(id).style.display = "flex";
}
var passwords;
var passwordString;
function hienthithongtintk() {
  var loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser !== null) {
    var userInfoJSON = localStorage.getItem(loggedInUser);
    var userInfo = JSON.parse(userInfoJSON);
    document.getElementById("tentk2").innerHTML = userInfo.username;
    var historyCARDlength = userInfo.historyCARD.length;
    if (historyCARDlength !== 0) {
      var historyCARD = "";
      for (var card = 0; card < historyCARDlength; card++) {
        historyCARD +=
          "<span>" +
          (card + 1) +
          ". " +
          userInfo.historyCARD[card] +
          "   " +
          "</span><br>";
      }
      document.getElementById("listlsnt").innerHTML = historyCARD;
    } else {
      document.getElementById("listlsnt").innerHTML = "Chưa có dữ liệu";
    }
    var historyACClength = userInfo.historyACC.length;
    document.getElementById("sotaikhoan").innerHTML = historyACClength;
    if (historyACClength !== 0) {
      var historyACC = "";
      for (var acc = 0; acc < historyACClength; acc++) {
        historyACC +=
          "<span>" +
          (acc + 1) +
          ". " +
          userInfo.historyACC[acc] +
          "   " +
          "</span><br>";
      }
      document.getElementById("listlsacc").innerHTML = historyACC;
    } else {
      document.getElementById("listlsacc").innerHTML = "Chưa có dữ liệu";
    }
    passwords = userInfo.password;
    passwordString = userInfo.password.toString();
    var passwordWidth = passwordString.length;
    passwordString = "*".repeat(passwordWidth);
    document.getElementById("mktk").innerHTML = passwordString;
    var sosanpham = userInfo.purchasedProducts.length;
    document.getElementById("sosanphamtk").innerHTML = sosanpham;
    if (sosanpham !== 0) {
      var sanphamHTML = "";
      var listlsvp = "";
      for (var i = 0; i < sosanpham; i++) {
        sanphamHTML +=
          "<span>" +
          (i + 1) +
          ". " +
          userInfo.purchasedProducts[i] +
          "   " +
          "</span>" +
          '<button onclick="copyProduct(' +
          i +
          ')" style="float:right;font-size: 8px">Copy</button><br>';
        listlsvp +=
          "<tr><td>" +
          userInfo.purchasedProducts[i] +
          "</td><td>" +
          userInfo.historyProducts[i] +
          "</td></tr>";
      }
      document.getElementById("listlsvp").innerHTML =
        '<table border=1><tr><td style="width=150px">Vật phẩm</td><td style="width=250px">Thời gian</td></tr>' +
        listlsvp +
        "</tale>";
      document.getElementById("sanphamtk").innerHTML = sanphamHTML;
    } else {
      document.getElementById("listlsvp").innerHTML = "Chưa có dữ liệu";
      document.getElementById("sanphamtk").innerHTML = "Chưa có dữ liệu";
    }

    var quanhuyElement;
    if (userInfo.quanhuy >= 1000000) {
      quanhuyElement = (userInfo.quanhuy / 1000000).toFixed(2) + "M";
      document.getElementById("quanhuytk").innerHTML = quanhuyElement;
    } else if (userInfo.quanhuy >= 1000) {
      quanhuyElement = (userInfo.quanhuy / 1000).toFixed(2) + "K";
      document.getElementById("quanhuytk").innerHTML = quanhuyElement;
    } else {
      document.getElementById("quanhuytk").innerHTML = userInfo.quanhuy;
    }
    var moneyElement;
    if (userInfo.balance >= 1000000) {
      moneyElement = (userInfo.balance / 1000000).toFixed(2) + "M";
      document.getElementById("tientk2").innerHTML = moneyElement;
    } else if (userInfo.balance >= 1000) {
      moneyElement = (userInfo.balance / 1000).toFixed(2) + "K";
      document.getElementById("tientk2").innerHTML = moneyElement;
    } else {
      document.getElementById("tientk2").innerHTML = userInfo.balance;
    }
  } else {
    document.getElementById("tentk2").innerHTML = "Khách";
    document.getElementById("listlsnt").innerHTML = "Chưa đăng nhập";
    document.getElementById("listlsacc").innerHTML = "Chưa đăng nhập";
    document.getElementById("listlsvp").innerHTML = "Chưa đăng nhập";
  }
}

setTimeout(function () {
  hienthithongtintk();
}, 200);
// hiệu ứng nav
document.addEventListener("DOMContentLoaded", function () {
  // Chọn tất cả các phần tử a trong phần tử có class là "navtt"
  var navLinks = document.querySelectorAll(".navtt a");

  // Thêm sự kiện click vào mỗi phần tử a
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      // Loại bỏ lớp active từ tất cả các li trước khi thêm vào li mới
      navLinks.forEach(function (link) {
        link.classList.remove("active");
      });

      // Thêm lớp active vào li hiện tại
      this.classList.add("active");
    });
  });
});

//ẩn hiện password
var hien = false;
function hienanpassword() {
  if (!hien) {
    document.getElementById("mktk").innerHTML = passwords;
    document.getElementById("hienanpassword").innerHTML = "Ẩn";
    hien = true;
  } else {
    document.getElementById("mktk").innerHTML = passwordString;
    document.getElementById("hienanpassword").innerHTML = "Hiện";
    hien = false;
  }
}

//mã xác nhận
var code = "";
function generateVerificationCode() {
  // Tạo mã xác nhận ngẫu nhiên, ví dụ: một chuỗi 6 ký tự
  code = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < 6; i++) {
    code += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  // Hiển thị mã xác nhận trên trang web
  document.getElementById("verificationCode").innerText = code;
  document.getElementById("verificationCode").style.display = "inline-block";
}

//copy tên sản phẩm
function copyProduct(index) {
  var loggedInUser = localStorage.getItem("loggedInUser");
  var userInfoJSON = localStorage.getItem(loggedInUser);
  var userInfo = JSON.parse(userInfoJSON);
  var productName = userInfo.purchasedProducts[index];
  navigator.clipboard
    .writeText(productName)
    .then(function () {
      alert("Đã sao chép: " + productName);
    })
    .catch(function (err) {
      console.error("Lỗi khi sao chép vào clipboard: ", err);
    });
}

//rút vật phẩm
function rutVPForm() {
  var IDGAME = document.getElementById("IDGAME").value;
  var VatPham = document.getElementById("rutvatpham").value;
  var loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser !== null) {
    var userInfo = getUserInfo(loggedInUser);
    if (userInfo.purchasedProducts.includes(VatPham)) {
      updateremovesp(VatPham);
      alert("Đã chuyên vật phẩm " + VatPham + " vào tài khoản " + IDGAME);
    } else {
      alert("Vui lòng nhập lại tên vật phẩm chính xác nhất");
    }
  }
  return false;
}

//reset password
function resetpass() {
  var pass1 = document.getElementById("pass1").value;
  var pass2 = document.getElementById("pass2").value;
  var passtrim = pass1.trim();
  if (passtrim.length >= 8) {
    var mxn = document.getElementById("mxn").value;
    if (mxn === code) {
      if (pass1 === pass2) {
        updatepassword(pass1);
        generateVerificationCode();
        document.getElementById("pass1").value = "";
        document.getElementById("pass2").value = "";
        document.getElementById("mxn").value = "";
        alert("Đổi mk thành công");
      } else {
        alert("mật khẩu ko trùng khớp");
      }
    } else {
      generateVerificationCode();
      document.getElementById("pass1").value = "";
      document.getElementById("pass2").value = "";
      document.getElementById("mxn").value = "";
      alert("code ko trùng khớp");
    }
  } else {
    generateVerificationCode();
    alert("Vui lòng nhập password ít nhất 8 ký tự");
  }
}

// chuyên trang đến id
document.addEventListener("DOMContentLoaded", function () {
  // Lấy hash từ URL
  var hash = window.location.hash;
  // Kiểm tra hash có tồn tại không
  if (hash) {
    // Lấy phần tử từ id trong hash và cuộn đến nó
    var elementId = hash.substring(1); // Bỏ qua ký tự '#'
    if (elementId) {
      if (
        elementId != "lsnt" ||
        elementId != "lsacc" ||
        elementId != "lsvp" ||
        elementId != "rvp" ||
        elementId != "dct"
      ) {
        document.getElementById("ttk").click();
        setTimeout(function () {
          document.getElementById("shop").scrollIntoView();
        }, 600);
      } else {
        document.getElementById(elementId).click();
        setTimeout(function () {
          document.getElementById("shop").scrollIntoView();
        }, 600);
      }
    }
  } else {
    document.getElementById("ttk").click();
    setTimeout(function () {
      document.getElementById("shop").scrollIntoView();
    }, 250);
  }
});
function navlink(id) {
  document.getElementById(id).click();
  document.getElementById("shop").scrollIntoView();
}
