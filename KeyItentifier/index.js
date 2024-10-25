const key = document.querySelector(".key");
const keyCode = document.querySelector(".keyCode");
const message = document.querySelector(".message");
const columns = document.querySelectorAll(".col");

document.body.addEventListener("keyup", (ev) => {
  message.style.display = "none";
  columns.forEach((col) => {
    col.style.display = "block";
  });
  keyCode.textContent = ev.code;
  key.textContent = ev.key;
});
