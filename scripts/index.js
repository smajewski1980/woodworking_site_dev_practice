let currentUrl = window.location.href;
const navListItems = document.querySelectorAll("header nav ul li");
const activeNavClr = "hsl(43, 96%, 63%)";

if (currentUrl.includes("index")) {
  navListItems[0].style.color = activeNavClr;
} else if (currentUrl.includes("about")) {
  navListItems[1].style.color = activeNavClr;
} else if (currentUrl.includes("gallery")) {
  navListItems[2].style.color = activeNavClr;
} else if (currentUrl.includes("blog")) {
  navListItems[3].style.color = activeNavClr;
} else {
  navListItems[4].style.color = activeNavClr;
}

const emailBtn = document.querySelector("#email-input + button");
const emailInput = document.querySelector("#email-input");

emailBtn.parentElement.addEventListener("submit", (e) => {
  emailInput.value = "";
  emailInput.blur();
});
