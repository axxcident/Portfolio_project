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

/*  <!-- ============= Light / Dark mode ============= --> */
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



/*   <!-- ============= Change aside section colorfocus ============= --> */

/* QuerySelect all Aside nav meny buttons */
const hemidan = document.getElementById("hem");
const aboutsidan = document.getElementById("omhem");
const servsidan = document.getElementById("servhem");
const portsidan = document.getElementById("porthem");
const kontsidan = document.getElementById("konthem");

/* Sections offsetHeight */
const allSections = document.querySelectorAll('section[id]');
console.log(allSections)
allSections.forEach(höjd => {
  console.log(höjd.offsetHeight)
  // console.log(höjd.offsetTop) // toppen på varje sectionBox
})

window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;
  if (scrollY < 916) {
    allSections.forEach(grej => {
      if (grej.getAttribute("id") == "home") {
        hemidan.classList.add("focus");
        aboutsidan.classList.remove("focus");
        servsidan.classList.remove("focus");
        portsidan.classList.remove("focus");
        kontsidan.classList.remove("focus");
      }
    })
    // console.log("nu är vi hemma");
  }
  if (scrollY > 916 && scrollY < 2438) {
    allSections.forEach(grej => {
      if (grej.getAttribute("id") == "about") {
        hemidan.classList.remove("focus");
        aboutsidan.classList.add("focus");
        servsidan.classList.remove("focus");
        portsidan.classList.remove("focus");
        kontsidan.classList.remove("focus");
      }
    })
    // console.log("nu är vi about")
  }
  if (scrollY > 2438 && scrollY < 3354) {
    allSections.forEach(grej => {
      if (grej.getAttribute("id") == "services") {
        hemidan.classList.remove("focus");
        aboutsidan.classList.remove("focus");
        servsidan.classList.add("focus");
        portsidan.classList.remove("focus");
        kontsidan.classList.remove("focus");
      }
    })
    // console.log("nu är vi services")
  }
  if (scrollY > 3354 && scrollY < 4270) {
    allSections.forEach(grej => {
      if (grej.getAttribute("id") == "portfolio") {
        hemidan.classList.remove("focus");
        aboutsidan.classList.remove("focus");
        servsidan.classList.remove("focus");
        portsidan.classList.add("focus");
        kontsidan.classList.remove("focus");
      }
    })
    // console.log("nu är vi portfolio")
  }
  if (scrollY > 4270 && scrollY < 5186) {
    allSections.forEach(grej => {
      if (grej.getAttribute("id") == "contact") {
        hemidan.classList.remove("focus");
        aboutsidan.classList.remove("focus");
        servsidan.classList.remove("focus");
        portsidan.classList.remove("focus");
        kontsidan.classList.add("focus");
      }
    })
    // console.log("nu är vi contact")
  }
})

// const scrollY = window.pageYOffset; // vart vi är




// Kolla denna https://www.youtube.com/watch?v=9HZX9orlZNc
// window.screenY
// vad varje id har för position på sidan. Använd offset high.
// foreach loop som tar tar fram offset high. höjd förhållande toppen sidan.
