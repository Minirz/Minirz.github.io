//* ============= FADE-IN SCRIPT START ============== *\

const expFade = document.getElementsByClassName("exp-fade");

window.addEventListener("scroll", () => {
  for (let i = 0; i < expFade.length; i++) {
    if (window.innerHeight - expFade[i].getBoundingClientRect().top > 0) {
      expFade[i].classList.add("scrolled");
    } else {
      expFade[i].classList.remove("scrolled");
    }
  }
});

const expFadeDelayed = document.getElementsByClassName("exp-fade");

window.addEventListener("scroll", () => {
  for (let i = 0; i < expFade.length; i++) {
    if (window.innerHeight - expFade[i].getBoundingClientRect().top > 0) {
      expFadeDelayed[i].classList.add("scrolledDelay");
    } else {
      expFadeDelayed[i].classList.remove("scrolledDelay");
    }
  }
});

//! ============== FADE-IN SCRIPT END =============== !\

//* ===== INTERSECTION ANIMATIONS SCRIPT START ====== *\

// Repeats the animation
const observerRepeat = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-repeat");
    } else {
      entry.target.classList.remove("show-repeat");
    }
  });
});

const hiddenElementsRepeat = document.querySelectorAll(".hidden");
hiddenElementsRepeat.forEach((el) => observerRepeat.observe(el));

// Only runs the animation once
const observerOnce = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-once");
    }
  });
});

const hiddenElementsOnce = document.querySelectorAll(".hidden");
hiddenElementsOnce.forEach((el) => observerOnce.observe(el));

//! ====== INTERSECTION ANIMATIONS SCRIPT END ======= !\
