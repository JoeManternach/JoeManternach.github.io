// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 100, // Adjust offset as needed
                    behavior: 'smooth'
                });
            }
        });
    });
});


let prevScrollPos = window.pageYOffset;
const header = document.querySelector("header");
const scrollThreshold = 50; // Adjust this threshold as needed
const scrollDirectionThreshold = 5; // Adjust this threshold as needed

window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    const scrollDirection = prevScrollPos > currentScrollPos ? "up" : "down";

    if (scrollDirection === "up" && currentScrollPos > scrollThreshold) {
        if (Math.abs(prevScrollPos - currentScrollPos) > scrollDirectionThreshold) {
            header.style.transition = "top 0.3s"; // Adjust the duration as needed
            header.style.top = "0";
        }
    } else {
        header.style.transition = "top 0.3s"; // Adjust the duration as needed
        header.style.top = `-${header.offsetHeight}px`;
    }

    prevScrollPos = currentScrollPos;
};


