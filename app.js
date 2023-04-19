// const hamburger = document.getElementById("hamburger-checkbox");
// const sideBar = document.getElementById("sidebar");

// hamburger.addEventListener("click", (e) => {
//   e.preventDefault();
//   sideBar.classList.toggle("show");
// });


const switcher = document.getElementById("switcher")
switcher.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark")
})