document.getElementById("feature-button").addEventListener("click", () => {
    const targetElement = document.getElementById("page2");
    const elementPosition = targetElement.getBoundingClientRect().top;
    window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
    });
});