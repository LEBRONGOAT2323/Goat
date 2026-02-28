document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach(sec => {
        sec.style.opacity = 0;
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.style.transition = "opacity 1s ease-out";
                entry.target.style.opacity = 1;
            }
        });
    }, {threshold: 0.2});

    sections.forEach(sec => observer.observe(sec));
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = new FormData(form);

    await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    });

    window.location.href = "https://lebrongoat2323.github.io/Goat/thank-you.html";
});

