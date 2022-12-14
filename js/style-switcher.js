/*   <!-- ============= Style Switcher ============= --> */

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");

styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
  console.log("here we go")
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

console.log(typeof alternativeStyles);
console.log(alternativeStyles);

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
