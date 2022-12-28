/*   <!-- ============= Style Switcher ============= --> */

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");

styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("openColorMeny");
});

// Kod som gör att menu-kugghjul rullar.
// styleSwitcherToggle.addEventListener("mouseover", () => {
//   document.querySelector("div.style-switcher-toggler.s-icon > i").classList.add("fa-spin");
// })

// styleSwitcherToggle.addEventListener("mouseleave", () => {
//   document.querySelector("div.style-switcher-toggler.s-icon > i").classList.remove("fa-spin");
// })

// tidigare .open ändrar nu till .openColorMeny. Funkar grejt.
/* Hide style switcher on scroll */

window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("openColorMeny")) {
    document.querySelector(".style-switcher").classList.remove("openColorMeny");
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

const menuItems = document.querySelectorAll('.nav li a');
const sections = document.querySelectorAll('.section');

function changeColor() {
  // Get current scroll position
  const scrollPos = window.scrollY;

  // Loop through sections and menu items
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const menuItem = menuItems[i];

    // If scroll position is within current section
    if (scrollPos >= section.offsetTop - 50 && scrollPos < section.offsetTop + section.offsetHeight - 50) {
      // Change color of menu item to red
      menuItem.classList.add("focus");
    } else {
      // Change color of menu item back to black
      menuItem.classList.remove("focus");
    }
  }
}

// Listen for scroll events
window.addEventListener('scroll', changeColor);
