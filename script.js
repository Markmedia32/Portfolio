let expIndex = 0;
let projIndex = 0;

function showExperienceSlides() {
    let expSlides = document.getElementsByClassName("slide");
    for (let i = 0; i < expSlides.length; i++) {
        expSlides[i].style.display = "none";
    }
    expIndex++;
    if (expIndex > expSlides.length) { expIndex = 1 }
    expSlides[expIndex - 1].style.display = "block";
    setTimeout(showExperienceSlides, 3000); // Every 3 seconds
}

function showProjectSlides() {
    let projSlides = document.getElementsByClassName("slides");
    for (let i = 0; i < projSlides.length; i++) {
        projSlides[i].style.display = "none";
    }
    projIndex++;
    if (projIndex > projSlides.length) { projIndex = 1 }
    projSlides[projIndex - 1].style.display = "block";
    setTimeout(showProjectSlides, 3000); // Every 3 seconds
}

// Typing effect for About Me
let text = "Hello! I'm a web developer with a strong passion for creating modern, responsive websites. Currently studying for a Diploma in ICT at Daystar University, I am eager to apply my skills in a professional environment.";
let i = 0;

function typeWriter() {
    const typingTarget = document.getElementById("typing-text");
    if (!typingTarget) return;

    if (i < text.length) {
        typingTarget.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 30); // Speed
    }
}

// Scroll reveal for About Me
function revealAbout() {
    const aboutSection = document.querySelector('.about-section');
    if (!aboutSection) return;

    const top = aboutSection.getBoundingClientRect().top;
    const trigger = window.innerHeight / 1.3;

    if (top < trigger) {
        aboutSection.classList.add('show');
    }
}

document.addEventListener("DOMContentLoaded", () => {
    showExperienceSlides();
    showProjectSlides();
    typeWriter();
});

window.addEventListener('scroll', revealAbout);
