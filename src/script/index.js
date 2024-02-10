const messageWrapper = document.querySelector(".message");
const yesBtn = messageWrapper.querySelector("#yes-button");
let noBtn = messageWrapper.querySelector("#no-button");

yesBtn.addEventListener("click", () => {
  console.log("YIPPIE");
});

noBtn.addEventListener("mouseover", () => {
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
