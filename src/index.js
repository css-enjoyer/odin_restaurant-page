console.log("This is a test");

import './style.css';

function addComponent() {
    const content = document.getElementById("content");
    content.classList.add("content");

    // Create layout
    const header = document.createElement("nav");
    const hero = document.createElement("div");

    content.appendChild(header);
    content.appendChild(hero);
    
    // Create tabs
    // const about = document.createElement("div");
    // const menu = document.createElement("div");
    // const contact = document.createElement("div");

    

};

document.body.appendChild(addComponent());