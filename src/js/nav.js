const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navlinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    navlinks.forEach((link, index) => {
      if (burger.classList.value == "burger toggle") {
        link.style.animation = `navLinkFadeOut 0.65s ease forwards`;
      } else {
        link.style.animation = `navLinkFade 0.2s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    //   burger anim
    burger.classList.toggle("toggle");
    });
};

navSlide();
