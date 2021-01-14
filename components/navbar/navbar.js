const navbar = document.getElementById("topnav");

function navHamburgerClicked() {
  if (navbar.className === "topnav") {
    navbar.className += " responsive";
  } else {
    navbar.className = "topnav";
  }
}