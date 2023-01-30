console.log("about.js");

function addComponent() {
    const main = document.createElement("div");
    main.classList.add("main");
    content.appendChild(main);

    const title = document.createElement("h1");
    title.innerHTML = "History";
    main.appendChild(title);
  
    return main;
};