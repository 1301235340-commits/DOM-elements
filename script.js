console.log("script started");

function start() {
    console.log("click");

    // 1. create a heading
    let heading = document.createElement("h1");

    // set text and size
    heading.innerText = "attendance";
    heading.style.color = "brown";
    heading.style.textDecoration = "underline";

    // 3. add the heading to the page
    document.body.appendChild(heading);

    let userName = prompt("Enter your name");
    let userLastName = prompt("Enter your lastname");
    addName(userName, userLastName);
    addSeparator();

    userName = prompt("Enter your name");
    userLastName = prompt("Enter your lastname");
    addName(userName, userLastName);
    addSeparator();

        userName = prompt("Enter your name");
    userLastName = prompt("Enter your lastname");
    addName(userName, userLastName);
    addSeparator();

        userName = prompt("Enter your name");
    userLastName = prompt("Enter your lastname");
    addName(userName, userLastName);
    addSeparator();

        userName = prompt("Enter your name");
    userLastName = prompt("Enter your lastname");
    addName(userName, userLastName);
    addSeparator();
}

function addName(newName, lastname) {
    // Create h2 element
    let header = document.createElement("h2");
    
    // Set text to Format: Lastname, Firstname
    header.textContent = lastname + ", " + newName;
    
    // Add h2 to the page
    document.body.appendChild(header);
}

function addSeparator() {
    // Create the horizontal rule
    let line = document.createElement("hr");
    
    // Add the line to the page
    document.body.appendChild(line);
}

