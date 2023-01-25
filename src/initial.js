console.log("initial.js");

function addComponent() {
    const content = document.getElementById("content");
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
    navbar.appendChild(homeLink);
    navbar.appendChild(menuLink);
    navbar.appendChild(aboutLink);

    const main = document.createElement("div");
    main.classList.add("main");
    content.appendChild(main);
};

addComponent();