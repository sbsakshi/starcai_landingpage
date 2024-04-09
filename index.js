document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration, suffix = '') {
    let obj = document.getElementById(id);
    let current = start;
    let range = end - start;
    let increment = end > start ? 1 : -1;
    let step = Math.abs(Math.floor(duration / range));
    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const timer = setInterval(() => {
            console.log("Current value:", current);
            current += increment;
            obj.textContent = current + suffix;
            if (current === end) {
              clearInterval(timer);
            }
          }, step);
          observer.unobserve(obj);
        }
      });
    });
    observer.observe(obj);
  }

  counter("count1", 0, 31, 3000, '%'); 
  counter("count2", 0, 22, 2500, '%'); 
  counter("count3", 0, 500, 3000, '+');
});
