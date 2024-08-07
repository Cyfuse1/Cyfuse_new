function typeWriter(element, text, delay = 100) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, delay);
        }
    }
    type();
}

document.addEventListener("DOMContentLoaded", function() {
    const welcomeElement = document.querySelector(".welcome");
    const cyfuseElement = document.querySelector(".cyfuse");
    const quote_cyfuse = document.querySelector(".main-page-quote");

    // Clear the initial text
    welcomeElement.innerHTML = "";
    cyfuseElement.innerHTML = "";

    // Start typing animation
    typeWriter(welcomeElement, "WELCOME TO", 25);
    setTimeout(() => {
        typeWriter(cyfuseElement, "CyFuse", 40);
    }, 100); // Delay start of CyFuse typing
    setTimeout(
        ()=>{
            typeWriter(quote_cyfuse,"Unleashing innovation, where the realms of creativity interwine with technology.",10)
        },200
    )
});

document.addEventListener("DOMContentLoaded", function() {
    const circleElement = document.querySelector(".about .circle");
    let angle = 0;
    let increment = 1;

    function rotate() {
        angle += increment;
        if (angle >= 180 || angle <= 0) {
            increment = -increment; // Reverse direction
        }
        circleElement.style.transform = `rotate(${angle}deg)`;
        requestAnimationFrame(rotate); // Request the next frame
    }

    rotate(); // Start the rotation
});