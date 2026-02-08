// ========== NAV SCROLL EFFECT ==========
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
});

// ========== GSAP ANIMATIONS ==========
window.addEventListener("load", () => {
    gsap.from(".logo", {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: "power2.out"
    });

    gsap.from(".nav-links li", {
        opacity: 0,
        y: -10,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
    });

    gsap.from(".hero-title", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2
    });

    gsap.from(".btn", {
        opacity: 1,
        y: 20,
        duration: 0.6,
        stagger: 0.15,
        delay: 0.4
    });

    gsap.to(".hero", {
    opacity: 1,
    duration: 2.9,
    ease: "power2.out"
});
});


// ========== BURGER MENU ==========
const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");

let menuOpen = false;

burger.addEventListener("click", () => {
    if (!menuOpen) {
        header.classList.add("menu-open");

        gsap.to(mobileMenu, {
            opacity: 1,
            y: 20,
            duration: 0.4,
            ease: "power2.out"
        });

        menuOpen = true;
    } else {
        gsap.to(mobileMenu, {
            opacity: 0,
            y: -20,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
                header.classList.remove("menu-open");
            }
        });

        menuOpen = false;
    }
});
document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        gsap.to(mobileMenu, {
            opacity: 0,
            y: -20,
            duration: 0.3,
            onComplete: () => {
                header.classList.remove("menu-open");
                menuOpen = false;
            }
        });
    });
});
