


  const container = document.querySelector(".container");
const color = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];

// add event lister inside the menus
document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});

// add event lister inside the menus
document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});

// display colors inside the navbar
let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach((item) => {
  item.style.cssText = `background-color: ${color[i++]}`;
});


Array.from(document.querySelectorAll(".navigation-button")).forEach((item) => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});