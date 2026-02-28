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
const button = document.getElementById("submit-btn");

form.addEventListener("submit", async function(e) {
    e.preventDefault();

    button.innerText = "Sending...";
    button.disabled = true;

    const data = new FormData(form);

    const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        window.location.href = "/Goat/thank-you.html";
    } else {
        button.innerText = "Error — Try Again";
        button.disabled = false;
    }
});
