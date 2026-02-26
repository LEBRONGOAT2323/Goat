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
