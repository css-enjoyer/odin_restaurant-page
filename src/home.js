console.log("home.js");

export function homeDisplay() {
    const main = document.createElement("div");
    main.classList.add("main");
    content.appendChild(main);
    
    const title = document.createElement("h1");
    title.innerHTML = "Welcome to Savory Spoon!";
    main.appendChild(title);

    const story = document.createElement("div");
    const p = document.createElement("p");
    p.innerHTML = "Savory Spoon has been serving mouth-watering meals to its customers for over 20 years now. We are a family-owned restaurant that takes great pride in offering delicious food made with the freshest and finest ingredients. We believe that every dish should be- If you're still reading this I got tired halfway throughout this webapp, the main point of this project was to learn and practice webpack and module bundling, I've done that and I can't be bothered to manually type out placeholder HTML content on Javascript, so just enjoy the dynamically generated blob of text by clicking the buttons on the navbar- a celebration of flavor, and our menu reflects this passion. Our chefs are dedicated to creating unique and innovative dishes that are sure to please every palate. Whether you're in the mood for a classic comfort food or a culinary adventure, you'll find it at Savory Spoon.";
    story.appendChild(p);
    main.appendChild(story);
    
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


