const hamburger = document.getElementById("hamburger-checkbox");
const sideBar = document.getElementById("sidebar");

hamburger.addEventListener("click", (e) => {
  e.preventDefault();
  sideBar.classList.toggle("show");
});
