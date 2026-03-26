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

}