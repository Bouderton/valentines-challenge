const messageWrapper = document.querySelector(".message");
const kirby = document.querySelector("#kirby");
const headerText = document.querySelector(".header__title");
const yesBtn = messageWrapper.querySelector("#yes-button");
const noBtn = messageWrapper.querySelector("#no-button");
const page = document.querySelector(".page");
const celebrateGif = document.querySelector(".celebrate");
const responses = [
  "Just Say Yes",
  "Why Not?",
  "Say Yes",
  "You Monster",
  "Come On",
  "Pleaaaase?",
  "Pretty Pretty Please?",
  "You Can't Say No",
  "You Know You Want To",
];

const celebrateHeader = function () {
  headerText.textContent = "Happy Valentine's Day!";
};

const removeElements = function () {
  noBtn.remove();
  yesBtn.remove();
  kirby.remove();
  responses.textContent = "";
};

const generateText = function () {
  const response_id = Math.floor(Math.random() * responses.length);
  document.getElementById("subtitle").innerHTML = responses[response_id];
};

const celebrate = function () {
  page.classList.add("page_celebrate");
};

yesBtn.addEventListener("click", () => {
  celebrate();
  celebrateHeader();
  removeElements();
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  generateText();
});
