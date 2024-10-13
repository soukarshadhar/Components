const button = document.querySelector(".button");

const handleOnAnimationEnd = (ev) => {
  ev.target.classList.remove("animate-ripple");
};

const handleOnButtonClick = (event) => {
  const { x, y } = event.target.getBoundingClientRect();

  const rippleElement = document.querySelector(".ripple");
  const { width, height } = rippleElement.getBoundingClientRect();

  rippleElement.addEventListener("animationend", handleOnAnimationEnd);
  rippleElement.style.left = `${event.clientX - x - width / 2}px`;
  rippleElement.style.top = `${event.clientY - y - height / 2}px`;
  rippleElement.classList.add("animate-ripple");
};

button.addEventListener("click", handleOnButtonClick);
