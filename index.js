async function getHTML(filename) {
  const response = await fetch(filename, {});
  const data = await response.text();

  let navbar = document.createElement("div");
  navbar.innerHTML = data;
  return navbar;
}

function loadCSS(filename) {
  let link = document.createElement("link")
  link.href = filename
  link.type = "text/css"
  link.rel = "stylesheet"

  document.head.append(link)
}

function loadJS(filename) {
  let link = document.createElement("script")
  link.src = filename
  link.type = "text/javascript"
  console.log(link)

  document.body.append(link)
}

async function addNavbar() {
  const navbar = await getHTML("components/navbar/navbar.html");
  document.body.prepend(navbar)
  loadCSS("components/navbar/navbar.css");
  loadJS("components/navbar/navbar.js");
}

addNavbar()