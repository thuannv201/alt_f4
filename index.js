// get path url
let pathRoot = "/";

function navigateTo(path) {
  console.log(path);
  pathRoot = path;
}

// get dom element id root
const root = document.getElementById("root");

const routes = {
  "/": "./tictactoe.html",
  "/about": "About",
  "/contact": "Contact",
};

// render function
const render = () => {
  const url = routes[pathRoot];
  getElementFormHtmlFile(url);
};

// call render function
render();

// get dom element id root

function getElementFormHtmlFile(url) {
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      // delay 2s
      setTimeout(() => {
        root.innerHTML = html;
      }, 500);
    });
}
