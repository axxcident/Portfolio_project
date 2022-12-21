/*   <!-- ============= Typing animation ============= --> */

var typed = new Typed(".typing", {
  strings: ["", "Web Designer", "Web ^1000 Developer", "Photoshopper", "Election plotter", "Front-end Engineer"],
  typeSpeed: 55,
  backSpeed: 100,
  loop: true
})
// https://mattboldt.github.io/typed.js/
// https://github.com/mattboldt/typed.js/

/*   <!-- ============= Mobile menu Aside BTN ============= --> */
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length;

const navTogglerBTN = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");

navTogglerBTN.addEventListener("click", () => {
  asideSectionToggle();
});
function asideSectionToggle() {
  aside.classList.toggle("open");
  navTogglerBTN.classList.toggle("openBTN");
}

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", () => {
    aside.classList.toggle("open");
    navTogglerBTN.classList.toggle("openBTN");
  })
}
