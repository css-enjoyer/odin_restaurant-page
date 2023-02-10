console.log("menu.js");

export function menuDisplay() {
    const main = document.createElement("div");
    main.classList.add("main");
    content.appendChild(main);

    const title = document.createElement("h1");
    title.innerHTML = "Menu";
    main.appendChild(title);
    
    return main;
};