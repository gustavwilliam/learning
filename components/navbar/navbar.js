function navHamburgerClicked() {
  var navbar = document.getElementById("topnav");
  if (navbar.className === "topnav") {
    navbar.className += " responsive";
  } else {
    navbar.className = "topnav";
  }
}