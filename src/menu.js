console.log("menu.js");

export function menuDisplay() {
    const main = document.createElement("div");
    main.classList.add("main");
    content.appendChild(main);

    const title = document.createElement("h1");
    title.innerHTML = "Menu";
    main.appendChild(title);

    let food = document.createElement("p");
    food.innerHTML = "none."
    main.appendChild(food);
    
    return main;
};