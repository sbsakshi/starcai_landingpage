document.getElementById("feature-button").addEventListener("click", () => {
    const targetElement = document.getElementById("section2");
    const elementPosition = targetElement.getBoundingClientRect().top;
    window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
    });
});