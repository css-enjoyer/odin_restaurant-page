console.log("home.js");

export function homeDisplay() {
    const main = document.createElement("div");
    main.classList.add("main");
    content.appendChild(main);
    
    const title = document.createElement("h1");
    title.innerHTML = "Savory Spoon";
    main.appendChild(title);
    
    return main;
};





// export const homeDisplay = () => {
//     const main = document.createElement("div");
//     main.classList.add("main");

//     const title = document.createElement("h1");
//     title.innerHTML = "Savory Spoon";
//     main.appendChild(title);

//     return main;
// };


