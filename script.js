// Scroll reveal animation for sections
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach(sec => sec.classList.add("reveal"));

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    sections.forEach(sec => observer.observe(sec));

    // Header background on scroll
    const header = document.getElementById("site-header");
    const onScroll = () => {
        if (window.scrollY > 20) header.classList.add("scrolled");
        else header.classList.remove("scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Mobile nav toggle
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector("header nav");
    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("open");
            toggle.classList.toggle("active");
        });
        nav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("open");
                toggle.classList.remove("active");
            });
        });
    }
});

// Contact form submission via Formspree
const form = document.getElementById("contact-form");
const button = document.getElementById("submit-btn");

if (form && button) {
    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        button.innerText = "Sending...";
        button.disabled = true;

        const data = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                window.location.href = "thank-you.html";
            } else {
                button.innerText = "Error — Try Again";
                button.disabled = false;
            }
        } catch (err) {
            button.innerText = "Error — Try Again";
            button.disabled = false;
        }
    });
}