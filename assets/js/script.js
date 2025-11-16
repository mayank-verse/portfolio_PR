const btn = document.getElementById("toggleTheme");
const sections = document.querySelectorAll('section[id]');

// 1. Theme Toggle
btn.onclick = () => { document.body.classList.toggle("dark") };

// 2. Contact Form
document.getElementById("contactForm").addEventListener("submit", e => {
    e.preventDefault(), document.getElementById("formMessage").innerText = "Message sent!"
});

// 3. Active Link Logic
function setActiveLink(id) {
    document.querySelectorAll('.main-nav button').forEach(button => {
        button.classList.remove('active');
        // Find the matching button based on its onclick attribute content
        if (button.getAttribute('onclick').includes(`'${id}'`)) {
            button.classList.add('active');
        }
    });
}

// Intersection Observer to detect current section
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Only set active if the section is intersecting 
        if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
        }
    });
}, { threshold: 0.6 }); // Use 60% threshold

sections.forEach(section => {
    observer.observe(section);
});

// 4. Smooth Scroll with Active State Update
function goTo(e) {
    document.querySelector(`#${e}`).scrollIntoView({ behavior: "smooth" });
    // Set active link immediately when clicked
    setActiveLink(e);
}
// Make goTo globally accessible (required because it's used in index.html onclick)
window.goTo = goTo;

// Set initial active state on load
document.addEventListener('DOMContentLoaded', () => {
    const firstSection = document.querySelector('section[id]');
    if (firstSection) {
        setActiveLink(firstSection.id);
    }
});