console.log("index.js");

import './style.css';
import { homeDisplay } from "./home.js";
import { menuDisplay } from "./menu.js";
import { aboutDisplay } from "./about.js";

function addComponent() {
    let content = document.getElementById("content");
    content.classList.add("content");

    const navbar = document.createElement("div");
    navbar.classList.add("navbar");
    document.body.appendChild(navbar);

    const homeLink = document.createElement("a");
    const menuLink = document.createElement("a");
    const aboutLink = document.createElement("a");
    homeLink.innerHTML = "Home";
    menuLink.innerHTML = "Menu";
    aboutLink.innerHTML = "About Us";

    homeLink.addEventListener("click", () => {
        content.innerHTML = "";
        homeDisplay();
    });
    menuLink.addEventListener("click", () => {
        content.innerHTML = "";
        menuDisplay();            
    });
    aboutLink.addEventListener("click", () => {
        content.innerHTML = "";
        aboutDisplay();
    });

    navbar.appendChild(homeLink);
    navbar.appendChild(menuLink);
    navbar.appendChild(aboutLink);
};

addComponent();