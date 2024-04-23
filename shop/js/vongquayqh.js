let isSpinning = false;

function spin() {
  const loggedInUser = localStorage.getItem("loggedInUser");
  const userInfo = getUserInfo(loggedInUser);
  if (loggedInUser !== null) {
    if (!isSpinning && userInfo.balance >= 50) {
      isSpinning = true;
      document.getElementById("spinButton").style.visibility = "hidden";

      const needle = document.querySelector(".needle");
      needle.style.transition = "none";
      needle.style.transform = "rotate(0deg)";

      setTimeout(() => {
        var rate = Math.floor(Math.random() * 1000);
        let resultMessage = "";
        let quanHuy = 0;
        let addSP = [];
        var randomQuanHuy = Math.floor(Math.random() * 29);
        var trangPhuc = [
          "Wiro tnvt",
          "Nak tnvt",
          "Tel tnvt",
          "Lau tnvt",
          "Vio tnvt",
          "Airi tnvt",
        ];
        const randomIndex = Math.floor(Math.random() * trangPhuc.length);

        if (rate <= 700) {
          resultMessage = "Chúc mừng bạn nhận được 10 quân huy";
          quanHuy = 10;
          rate = 90; //10qh
        } else if (rate <= 800) {
          resultMessage =
            "Chúc mừng bạn nhận được " + (randomQuanHuy + 1) * 10 + " quân huy";
          quanHuy = (randomQuanHuy + 1) * 10;
          rate = 135; //random qh
        } else if (rate <= 850) {
          resultMessage = "Chúc mừng bạn nhận được 250 quân huy";
          quanHuy = 250;
          rate = 45; //250qh
        } else if (rate <= 909) {
          resultMessage = "Chúc mừng bạn nhận được Đá quý";
          addSP = ["Đá quý"];
          rate = 270; //đá quý
        } else if (rate <= 959) {
          resultMessage = "Chúc mừng bạn nhận được Sổ xứ mệnh thường";
          addSP = ["Sổ xứ mệnh thường"];
          rate = 225; //sxm thường
        } else if (rate <= 989) {
          resultMessage = "Chúc mừng bạn nhận được Sổ xứ mệnh vượt cấp";
          addSP = ["Sổ xứ mệnh vượt cấp"];
          rate = 0; //sxm vc
        } else if (rate <= 999) {
          resultMessage = "Chúc mừng bạn nhận được 999 quân huy";
          quanHuy = 999;
          rate = 180; //999qh
        } else {
          resultMessage =
            "Chúc mừng bạn nhận được trang phục " + trangPhuc[randomIndex];
          addSP = [trangPhuc[randomIndex]];
          rate = 315; //random tp
        }

        const randomdo = Math.random() * 44.5;
        const randomDegree = rate + randomdo;
        const randomLoop = Math.floor(Math.random() * 4);
        const totalRotation = 360 * (randomLoop + 3) - 45 / 2 + randomDegree;

        needle.style.transition = "transform 3s ease";
        needle.style.transform = `rotate(${totalRotation}deg)`;

        setTimeout(() => {
          document.getElementById("kq").innerHTML = resultMessage;
          updatequanhuy(quanHuy);
          updateaddsp(addSP);
          updatebalance(-50);
          isSpinning = false;
          document.getElementById("spinButton").style.visibility = "visible";
        }, 3000);
      }, 0);
    } else {
      if (!isSpinning) {
        alert("Bạn không đủ xu để quay thêm");
      } else {
        alert("Vui lòng đợi vòng quay xong");
      }
    }
  } else {
    alert("Bạn phải đăng nhập trước khi quay");
  }
}

document.getElementById("spinButton").addEventListener("click", spin);
// Ngăn chặn sự kiện của phím Space và Enter
document.addEventListener("keydown", function (event) {
  if (event.key === " " || event.key === "Enter") {
    event.preventDefault(); // Ngăn chặn hành động mặc định của phím
  }
});
