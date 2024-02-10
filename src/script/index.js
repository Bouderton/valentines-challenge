const messageWrapper = document.querySelector(".message");
const yesBtn = messageWrapper.querySelector("#yes-button");
const noBtn = messageWrapper.querySelector("#no-button");
const page = document.querySelector(".page");

const celebrate = function () {
  page.classList.add("page_yes");
};

yesBtn.addEventListener("click", () => {
  celebrate();
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
