//* ============ BURGERMENU SCRIPT START ============ *\\
var prevScrollpos = window.pageYOffset;

// navigationbar scroll function
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 80) {
    document.getElementById("navbar").classList.add("scroll");
  } else {
    document.getElementById("navbar").classList.remove("scroll");
  }
  prevScrollpos = currentScrollPos;
};

// burgermenu script
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// navigation scroll function
window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");

  nav.classList.toggle("scroll", window.scrollY > 0);
});

//! ============= BURGERMENU SCRIPT END ============ !\\

//* =========== SCROLL-TO-TOP SCRIPT START =========== *\

// Get the button:
let topbutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    topbutton.style.cssText = "opacity: 1; bottom: 20px;";
  } else {
    topbutton.style.cssText = "opacity: 0; bottom: -50px;";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//! ============ SCROLL-TO-TOP SCRIPT END ============ !\

const cookieStorage = {
  getItem: (item) => {
    const cookies = document.cookie
      .split(";")
      .map((cookie) => cookie.split("="))
      .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
    return cookies[item];
  },
  setItem: (item, value) => {
    document.cookie = `${item}=${value};`;
  },
};

const storageType = cookieStorage;
const consentPropertyName = "jdc_consent";
const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);

window.onload = () => {
  const acceptFn = (event) => {
    saveToStorage(storageType);
    consentPopup.classList.add("hidden");
  };
  const consentPopup = document.getElementById("consent-popup");
  const acceptBtn = document.getElementById("accept");
  acceptBtn.addEventListener("click", acceptFn);

  if (shouldShowPopup(storageType)) {
    setTimeout(() => {
      consentPopup.classList.remove("hidden");
    }, 800);
  }
};
