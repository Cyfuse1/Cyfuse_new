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

   
    
    const slide1Elements = document.querySelectorAll(".slide1");
const slide2Elements = document.querySelectorAll(".slide2");
const scrollSpeed = 1; // Adjust the scroll speed
const scrollInterval = 15; // Adjust the interval time in milliseconds

function autoScroll(slideElements, scrollingspeed, direction) {
    slideElements.forEach(slide => {
        if (direction === 'right') {
            slide.scrollLeft += scrollingspeed;
            if (slide.scrollLeft + slide.clientWidth >= slide.scrollWidth) {
                slide.scrollLeft = 0; // Reset scroll position to the beginning
            }
        } else if (direction === 'left') {
            slide.scrollLeft -= scrollingspeed;
            if (slide.scrollLeft <= 0) {
                slide.scrollLeft = slide.scrollWidth - slide.clientWidth; // Reset scroll position to the end
            }
        }
    });
}

setInterval(() => autoScroll(slide1Elements, scrollSpeed, 'right'), scrollInterval);
setInterval(() => autoScroll(slide2Elements, scrollSpeed, 'left'), scrollInterval);

});

const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('image-animation');
      }
    });
  });
  
  const viewbox = document.querySelectorAll('.animate');
  viewbox.forEach(image => {
    observer.observe(image);
  });