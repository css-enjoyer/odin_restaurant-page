console.log("initial.js");

function addComponent() {
    const content = document.getElementById("content");
    content.classList.add("content");

    const navbar = document.createElement("div");
    navbar.classList.add("navbar");
    content.appendChild(navbar);

    const main = document.createElement("div");
    main.classList.add("main");
    content.appendChild(main);
};

addComponent();