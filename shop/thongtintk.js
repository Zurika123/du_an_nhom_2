//chiết suất dữ liệu SiGin & login
function loginForm() {
  var username = document.getElementById("username_login").value;
  var password = document.getElementById("password").value;

  // Kiểm tra xem tên người dùng đã tồn tại trong localStorage hay không
  if (localStorage.getItem(username) !== null) {
    var userInfo = getUserInfo(username);
    // Kiểm tra mật khẩu
    if (userInfo.password === password) {
      // Lưu trạng thái đăng nhập vào localStorage
      localStorage.setItem("loggedInUser", username);

      // Cập nhật giao diện với thông tin của người dùng
      document.getElementById("username_login").value = "";
      document.getElementById("password").value = "";
      var modal = document.querySelector(".overlaylogin");
      modal.style.display = "none";
      alert("Đăng nhập thành công");

      hienthithongtin();
      hidenlogin();
      location.reload();
      return false; // Ngăn không cho gửi form
    } else {
      alert("Mật khẩu không chính xác");
      document.getElementById("password").value = "";
    }
  } else {
    alert("Tên đăng nhập không tồn tại");
    document.getElementById("username_login").value = "";
    document.getElementById("password").value = "";
  }

  return false; // Ngăn không cho gửi form
}
function siginForm() {
  var username = document.getElementById("username_register").value;
  var password1 = document.getElementById("password1").value;
  var password2 = document.getElementById("password2").value;

  if (password1 === password2) {
    if (localStorage.getItem(username) !== null) {
      alert("Tên đăng nhập đã tồn tại");
      document.getElementById("username_register").value = "";
      return false; // Ngăn không cho gửi form
    }

    // Lưu tên người dùng và mật khẩu vào localStorage
    registerUser(username, password1, 0, 0, [], [], [], []);

    alert("Đăng ký thành công");
    document.getElementById("registerform").submit(); // Submit form
    return true;
  } else {
    alert("Đăng ký thất bại (mật khẩu không trùng khớp)");
    document.getElementById("password1").value = "";
    document.getElementById("password2").value = "";
    return false; // Ngăn không cho gửi form
  }
}

// Hàm đăng ký người dùng
function registerUser(
  username,
  password,
  quanhuy,
  initialBalance,
  purchasedProducts,
  historyProducts,
  historyACC,
  historyCARD
) {
  if (username === "#ADMIN") {
    if (localStorage.getItem("#ADMIN") !== null) {
      return;
    }
  }
  var loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser !== null) {
    if (loggedInUser === "#ADMIN") {
    } else {
      if (window.console || console.log) {
        console.log("Bạn ko có quyền truy cập lệnh này");
        return; // Nếu là console, không thực hiện tiếp
      }
    }
  }
  // Tạo một đối tượng thông tin người dùng

  var userInfo = {
    username: username,
    password: password,
    quanhuy: quanhuy,
    balance: initialBalance,
    purchasedProducts: purchasedProducts,
    historyProducts: historyProducts,
    historyACC: historyACC,
    historyCARD: historyCARD,
  };
  // Chuyển đối tượng thành chuỗi JSON
  var userInfoJSON = JSON.stringify(userInfo);

  // Lưu thông tin người dùng vào localStorage với key là tên người dùng
  localStorage.setItem(username, userInfoJSON);
}

// Hàm lấy thông tin người dùng từ localStorage
function getUserInfo(username) {
  // Lấy chuỗi JSON từ localStorage dựa trên tên người dùng
  var userInfoJSON = localStorage.getItem(username);

  // Kiểm tra xem userInfoJSON có giá trị không
  if (userInfoJSON !== null) {
    // Nếu có, chuyển đổi chuỗi JSON thành đối tượng JavaScript và trả về
    return JSON.parse(userInfoJSON);
  } else {
    // Nếu không, trả về null hoặc thông báo lỗi khác tùy thuộc vào trường hợp
    return null;
  }
}

// cập nhật password
function updatepassword(newPassword) {
  var loggedInUser = localStorage.getItem("loggedInUser");

  // Lấy thông tin người dùng từ localStorage
  if (loggedInUser !== null) {
    if (loggedInUser === "#ADMIN") {
    } else {
      if (window.console || console.log) {
        console.log("Bạn ko có quyền truy cập lệnh này");
        return; // Nếu là console, không thực hiện tiếp
      }
    }
    var userInfo = getUserInfo(loggedInUser);

    // Kiểm tra xem người dùng có tồn tại không
    if (userInfo !== null) {
      // Cập nhật chỉ thông tin quanhuy và giữ nguyên các thông tin khác
      userInfo.password = newPassword;

      // Cập nhật thông tin người dùng vào localStorage
      localStorage.setItem(loggedInUser, JSON.stringify(userInfo));

      // Hiển thị lại thông tin người dùng
      hienthithongtin();
      hienthithongtintk();
      console.log(
        "Password của người dùng '" + loggedInUser + "' đã được cập nhật."
      );
    } else {
      console.log("Người dùng '" + loggedInUser + "' không tồn tại.");
    }
  } else {
    alert("Người dùng chưa đăng nhập.");
  }
}
// cập nhật quân huy
function updatequanhuy(newquanhuy) {
  var loggedInUser = localStorage.getItem("loggedInUser");

  // Lấy thông tin người dùng từ localStorage
  if (loggedInUser !== null) {
    if (loggedInUser === "#ADMIN") {
    } else {
      if (window.console || console.log) {
        console.log("Bạn ko có quyền truy cập lệnh này");
        return; // Nếu là console, không thực hiện tiếp
      }
    }
    var userInfo = getUserInfo(loggedInUser);

    // Kiểm tra xem người dùng có tồn tại không
    if (userInfo !== null) {
      // Cập nhật chỉ thông tin quanhuy và giữ nguyên các thông tin khác
      userInfo.quanhuy += newquanhuy;

      // Cập nhật thông tin người dùng vào localStorage
      localStorage.setItem(loggedInUser, JSON.stringify(userInfo));

      // Hiển thị lại thông tin người dùng
      hienthithongtin();

      console.log(
        "Quân huy của người dùng '" + loggedInUser + "' đã được cập nhật."
      );
    } else {
      console.log("Người dùng '" + loggedInUser + "' không tồn tại.");
    }
  } else {
    alert("Người dùng chưa đăng nhập.");
  }
}
// cập nhật money
function updatebalance(newBalance) {
  var loggedInUser = localStorage.getItem("loggedInUser");
  // Lấy thông tin người dùng từ localStorage
  if (loggedInUser !== null) {
    if (loggedInUser === "#ADMIN") {
    } else {
      if (window.console || console.log) {
        console.log("Bạn ko có quyền truy cập lệnh này");
        return; // Nếu là console, không thực hiện tiếp
      }
    }
    var userInfo = getUserInfo(loggedInUser);

    // Kiểm tra xem người dùng có tồn tại không
    if (userInfo !== null) {
      // Cập nhật chỉ thông tin quanhuy và giữ nguyên các thông tin khác
      userInfo.balance += newBalance;

      // Cập nhật thông tin người dùng vào localStorage
      localStorage.setItem(loggedInUser, JSON.stringify(userInfo));

      // Hiển thị lại thông tin người dùng
      hienthithongtin();

      console.log(
        "Tiền của người dùng '" + loggedInUser + "' đã được cập nhật."
      );
    } else {
      console.log("Người dùng '" + loggedInUser + "' không tồn tại.");
    }
  } else {
    alert("Người dùng chưa đăng nhập.");
  }
}
// add thêm purchasedProducts
function updateaddsp(additionalProducts) {
  var loggedInUser = localStorage.getItem("loggedInUser");

  if (loggedInUser !== null) {
    if (loggedInUser === "#ADMIN") {
    } else {
      if (window.console || console.log) {
        console.log("Bạn ko có quyền truy cập lệnh này");
        return; // Nếu là console, không thực hiện tiếp
      }
    }
    var userInfo = getUserInfo(loggedInUser);

    if (userInfo !== null) {
      if (Array.isArray(additionalProducts)) {
        // Thêm sản phẩm mới vào mảng purchasedProducts
        userInfo.purchasedProducts =
          userInfo.purchasedProducts.concat(additionalProducts);

        // Cập nhật thời gian cho từng sản phẩm mới
        var currentTime = new Date().toLocaleString();
        // Thêm thời gian hiện tại tương ứng với mỗi sản phẩm
        userInfo.historyProducts.push(currentTime);
        // Cập nhật thông tin người dùng vào localStorage
        localStorage.setItem(loggedInUser, JSON.stringify(userInfo));

        console.log(
          "Sản phẩm của người dùng '" + loggedInUser + "' đã được cập nhật."
        );
      } else {
        console.log("additionalProducts không phải là một mảng.");
      }
    } else {
      console.log("Người dùng '" + loggedInUser + "' không tồn tại.");
    }
  } else {
    alert("Người dùng chưa đăng nhập.");
  }
}
// remove sản phẩm
function updateremovesp(productName) {
  var loggedInUser = localStorage.getItem("loggedInUser");

  if (loggedInUser !== null) {
    if (loggedInUser === "#ADMIN") {
    } else {
      if (window.console || console.log) {
        console.log("Bạn ko có quyền truy cập lệnh này");
        return; // Nếu là console, không thực hiện tiếp
      }
    }
    var userInfo = getUserInfo(loggedInUser);
    if (userInfo !== null) {
      var index = userInfo.purchasedProducts.indexOf(productName);
      if (index !== -1) {
        userInfo.purchasedProducts.splice(index, 1);

        // Xóa thời gian tương ứng với sản phẩm đã xóa
        if (index < userInfo.historyProducts.length) {
          userInfo.historyProducts.splice(index, 1);
        }

        localStorage.setItem(loggedInUser, JSON.stringify(userInfo));
        hienthithongtintk();

        console.log(
          "Sản phẩm '" +
            productName +
            "' đã được xóa khỏi danh sách mua hàng của người dùng '" +
            loggedInUser +
            "'."
        );
      } else {
        console.log(
          "Sản phẩm '" +
            productName +
            "' không tồn tại trong danh sách mua hàng của người dùng '" +
            loggedInUser +
            "'."
        );
      }
    } else {
      console.log("Người dùng '" + loggedInUser + "' không tồn tại.");
    }
  } else {
    alert("Người dùng chưa đăng nhập.");
  }
}
//lịch sử mua acc
function updateACC(loaiacc, tkmkacc, money) {
  var loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser !== null) {
    if (loggedInUser === "#ADMIN") {
    } else {
      if (window.console || console.log) {
        console.log("Bạn ko có quyền truy cập lệnh này");
        return; // Nếu là console, không thực hiện tiếp
      }
    }
    var userInfo = getUserInfo(loggedInUser);
    if (userInfo !== null) {
      if (userInfo.balance >= money) {
        userInfo.balance -= money;
        var currentTime = new Date().toLocaleString();
        userInfo.historyACC.push(
          currentTime +
            " Người dùng " +
            loggedInUser +
            " Đã mua " +
            loaiacc +
            " Gía: " +
            money +
            " Xu " +
            tkmkacc
        );

        // Cập nhật thông tin người dùng vào localStorage
        localStorage.setItem(loggedInUser, JSON.stringify(userInfo));
        alert("Người dùng " + loggedInUser + " mua " + loaiacc + " thành công");
        hienthithongtin();
      } else {
        alert("Bạn ko đủ tiền để mua " + loaiacc + " gía: " + money + " Xu");
      }
    } else {
      console.log("Người dùng '" + loggedInUser + "' không tồn tại.");
    }
  } else {
    alert("Người dùng chưa đăng nhập.");
  }
}
//lịch sử nạp card
function updateCARD(mathe, seri, loi) {
  var loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser !== null) {
    if (loggedInUser === "#ADMIN") {
    } else {
      if (window.console || console.log) {
        console.log("Bạn ko có quyền truy cập lệnh này");
        return; // Nếu là console, không thực hiện tiếp
      }
    }
    var userInfo = getUserInfo(loggedInUser);
    if (userInfo !== null) {
      var currentTime = new Date().toLocaleString();
      userInfo.historyCARD.push(
        currentTime +
          " mã thẻ: " +
          mathe +
          " seri: " +
          seri +
          " Kết quả: " +
          loi
      );
      // Cập nhật thông tin người dùng vào localStorage
      localStorage.setItem(loggedInUser, JSON.stringify(userInfo));
      alert(loi);
    } else {
      console.log("Người dùng '" + loggedInUser + "' không tồn tại.");
    }
  } else {
    alert("Người dùng chưa đăng nhập.");
  }
}
// Đăng xuất
function logout() {
  var loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser !== null) {
    // Xóa trạng thái đăng nhập khỏi localStorage
    localStorage.removeItem("loggedInUser");
    alert("Đăng xuất thành công");
    document.getElementById("tentk").innerHTML = "---";
    document.getElementById("tientk").innerHTML = "---";
    hidenlogin();
    hienthithongtin();
  } else {
    alert("Bạn chưa đăng nhập");
  }
}

// ẩn nút đăng nhập và đăng ký khi đã đăng nhập và hiện nút đăng xuất
var chuadangnhap = document.getElementsByClassName("chuadangnhap");
function hidenlogin() {
  var loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser !== null) {
    for (var i = 0; i < chuadangnhap.length; i++) {
      chuadangnhap[i].style.display = "none";
    }
    document.getElementById("navdalogin").style.display = "inline-block";
    document.getElementById("frist-ul").style.width = "175px";
  } else {
    for (var i = 0; i < chuadangnhap.length; i++) {
      chuadangnhap[i].style.display = "inline-block";
    }

    document.getElementById("navdalogin").style.display = "none";
  }
}

//ẩn login and dk
window.addEventListener("resize", handleResize);
function handleResize() {
  if (window.innerWidth <= 475) {
    chuadangnhap[1].style.display = "none";
    if (window.innerWidth <= 335) {
      chuadangnhap[2].style.display = "none";
    } else {
      chuadangnhap[2].style.display = "inline-block";
    }
  } else {
    chuadangnhap[1].style.display = "inline-block";
  }
}
handleResize();

// Hàm kiểm tra trạng thái đăng nhập và hiển thị thông tin người dùng
function hienthithongtin() {
  var loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser !== null) {
    var userInfo = getUserInfo(loggedInUser);
    document.getElementById("tentk").innerHTML = userInfo.username;
    var moneyElement;
    if (userInfo.balance >= 1000000) {
      moneyElement = (userInfo.balance / 1000000).toFixed(2) + "M";
      document.getElementById("tientk").innerHTML = moneyElement;
    } else if (userInfo.balance >= 1000) {
      moneyElement = (userInfo.balance / 1000).toFixed(2) + "K";
      document.getElementById("tientk").innerHTML = moneyElement;
    } else {
      document.getElementById("tientk").innerHTML = userInfo.balance;
    }
  }
}
// Gọi hàm hienthithongtin() khi trang web được tải lên
window.onload = function () {
  registerUser("#ADMIN", "Topflo16", 0, 0, [], [], [], []);
  hienthithongtin();
  hidenlogin();
};
document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.includes("home.html")) {
    var loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser !== null) {
      var userInfo = getUserInfo(loggedInUser);
      if (userInfo.username === "#ADMIN") {
        document.getElementById("trocap").style.display = "block";
      } else {
        document.getElementById("trocap").style.display = "none";
      }
    } else {
      document.getElementById("trocap").style.display = "none";
    }
  }
});
