//* ============ THEME TOGGLE SCRIPT START ============ *\

function toggleMode() {
  var body = document.getElementById("body");
  var newClass = body.className == "dark" ? "light" : "dark";
  body.className = newClass;

  localStorage.setItem("theme", newClass);
}

function setThemeFromCookie() {
  if (localStorage.getItem("theme") == "dark") {
    body.classList.add("dark");

    var checkbox = document.querySelector(".darkmode .checkbox");
    checkbox.checked = true;
  }
}

setThemeFromCookie();

//! ============= THEME TOGGLE SCRIPT END ============= !\
