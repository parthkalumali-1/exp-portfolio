// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Glowing effect on header text when hovered
const headerText = document.querySelector("h1");
headerText.addEventListener("mouseover", () => {
    headerText.style.animation = "glow 1s infinite alternate";
});
headerText.addEventListener("mouseout", () => {
    headerText.style.animation = "none";
});

// Dark mode toggle (Optional Feature)
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "Toggle Dark Mode";
toggleBtn.style.position = "fixed";
toggleBtn.style.bottom = "20px";
toggleBtn.style.right = "20px";
toggleBtn.style.padding = "10px";
toggleBtn.style.background = "#ff00ff";
toggleBtn.style.color = "#fff";
toggleBtn.style.border = "none";
toggleBtn.style.cursor = "pointer";
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Add dark mode CSS
const darkModeStyles = document.createElement("style");
darkModeStyles.innerHTML = `
    .dark-mode {
        background-color: #000;
        color: #0ff;
    }
`;
document.head.appendChild(darkModeStyles);
