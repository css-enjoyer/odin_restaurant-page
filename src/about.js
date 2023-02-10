console.log("about.js");

export function aboutDisplay() {
    const main = document.createElement("div");
    main.classList.add("main");
    content.appendChild(main);

    const title = document.createElement("h1");
    title.innerHTML = "History";
    main.appendChild(title);
  
    let history = document.createElement("p");
    history.innerHTML = "then the creator said let there be Savory Spoon.."
    main.appendChild(history);

    return main;
};