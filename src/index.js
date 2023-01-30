console.log("indexss.js");

import './style.css';
// import './home.js';
// import './menu.js';
// import './about.js';
// let home = null;
// let menu = null;
// let about = null;
// let currentModule = import('./home.js');
// let menuModule = import('./menu.js');
// let aboutModule = import('./about.js');
import addComponent from "./home.js";

function addComponent() {
    let content = document.getElementById("content");
    content.classList.add("content");

    const navbar = document.createElement("div");
    navbar.classList.add("navbar");
    content.appendChild(navbar);

    const homeLink = document.createElement("a");
    const menuLink = document.createElement("a");
    const aboutLink = document.createElement("a");
    homeLink.innerHTML = "Home";
    menuLink.innerHTML = "Menu";
    aboutLink.innerHTML = "About Us";

    homeLink.addEventListener("click", () => {
        // let currentModule = import('./home.js');
        addComponent();
        // content.appendChild(homeModule.addComponent());
        // content.removeChild(import('./menu.js'));
        // content.removeChild(import('./about.js'));
    });
    menuLink.addEventListener("click", () => {
        currentModule = import('./menu.js');
        // content.removeChild(import('./home.js'));
        // content.appendChild(import('./menu.js'));
        // content.removeChild(import('./about.js'));
    });
    // aboutLink.addEventListener("click", () => {
    //    content.removeChild(import('./home.js'));
    //     content.removeChild(import('./menu.js'));
    //     content.appendChild(import('./about.js'));
    // });

    navbar.appendChild(homeLink);
    navbar.appendChild(menuLink);
    navbar.appendChild(aboutLink);
};



addComponent();