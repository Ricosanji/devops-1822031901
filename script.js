function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent =
    "Bây giờ là: " + now.toLocaleTimeString("vi-VN");
}

updateClock();
setInterval(updateClock, 1000);

document.getElementById("btn").addEventListener("click", function () {
  document.getElementById("message").textContent =
    "Xin chào! Website được deploy tự động bằng GitHub Actions 🚀";
});
