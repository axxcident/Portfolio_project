/*   <!-- ============= Style Switcher ============= --> */

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");

styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});


/* Hide style switcher on scroll */

// Mitt fungerande* försök innan video:
/* stiländraren = document.querySelector(".style-switcher");
addEventListener("scroll", () => {
  stiländraren.style.position = "absolute";
  // stiländraren.classList.style = "position = absolute";
});
 */
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
})
/*   <!-- ============= Theme Switcher ============= --> */
const alternativeStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
  alternativeStyles.forEach(style => {
    if (color === style.getAttribute("title")) {
      /* style.removeAttribute("disabled") */
      style.disabled = false;
    }
    else {
      /* style.setAttribute("disabled", true) */
      style.disabled = true;
    }
  });
};

/*   <!-- ============= Light / Dark mode ============= --> */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  }
  else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
})

/*   <!-- ============= Change aside bar color ============= --> */
/* Aside buttons */
const knapp_hemmet = document.getElementById("hem");
const knapp_ommig = document.getElementById("omhem");
const knapp_servitriser = document.getElementById("servhem");
const knapp_portfo = document.getElementById("porthem");
const knapp_kontakt = document.getElementById("konthem");
// body > div.main - container > div.aside > ul > li: nth - child(1) > a
/* Sections */
const hemmet = document.getElementById("home");
const ommig = document.getElementById("about");
const servitriser = document.getElementById("services");
const portfo = document.getElementById("portfolio");
const kontakt = document.getElementById("contact");

console.log(knapp_ommig)
console.log(typeof knapp_ommig)
console.log(knapp_kontakt)


/* When hovering mouse over section */

hemmet.addEventListener("mouseover", () => {
  console.log("hemnet")
})

knapp_ommig.classList.add().style.color = "red";

/* ommig.addEventListener("mouseover", event => {
  if (event == true) {
    console.log("about")
  }
  else {
    console.log("something?")
    console.log(event);
  }
}) */

/* if (hemmet.addEventListener("mouseover", event => {
})) {
  console.log("hemnet")
} */


/* if (ommig.addEventListener("mouseover", event == true)) {
  // knapp_ommig.classList.add(".focus");
  console.log("about")
}

if (servitriser.addEventListener("mouseover", event == true)) {
  // knapp_servitriser.classList.add(".focus");
  console.log("services")
}

if (portfo.addEventListener("mouseover", event == true)) {
  knapp_portfo.classList.add(".focus");
}

if (kontakt.addEventListener("mouseover", event == true)) {
  knapp_kontakt.classList.add(".focus");
} */

/* else {
  knapp_kontakt.classList.remove(".focus");
} */


/* ommig.addEventListener("mouseover", () => {
  knapp_ommig.classList.toggle("active");
}) */
