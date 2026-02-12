const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

yesBtn.addEventListener("click", function() {
  message.innerHTML = "Yayyy ❤️ I Love You Forever!";
  document.body.style.background = "pink";
});

noBtn.addEventListener("mouseover", function() {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});
