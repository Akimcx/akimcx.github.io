// const hamburger = document.getElementById("hamburger-checkbox");
// const sideBar = document.getElementById("sidebar");

// hamburger.addEventListener("click", (e) => {
//   e.preventDefault();
//   sideBar.classList.toggle("show");
// });
const documentLanguage = "fr-FR";
// const documentLanguage = "en-US";
const switcher = document.getElementById("switcher");
switcher.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});

async function json() {
  const resp = await fetch("language.json");
  const data = await resp.json();
  const ids = Object.keys(data[documentLanguage]);
  ids.forEach((id) => {
    const elt = document.getElementById(id);
    elt.innerText = data[documentLanguage][id];
    console.log(elt);
  });
}
// json();
