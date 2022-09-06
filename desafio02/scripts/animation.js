const secondPage = document.querySelector(".welcome-screen");
const loadingPage = document.querySelector(".active");

window.onload = () => {
  loadScreen();
};

const loadScreen = setInterval(loadTimer, 5000);

function loadTimer() {
  loadingPage.classList.add("loading-screen"),
    loadingPage.classList.remove("active"),
    secondPage.classList.add("active");
  secondPage.classList.remove("welcome-screen");
  clearInterval(loadScreen);
}

