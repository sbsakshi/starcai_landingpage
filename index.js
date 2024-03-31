document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration, suffix = '') {
      let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
          current += increment;
          obj.textContent = current + suffix;
          if (current == end) {
            clearInterval(timer);
          }
        }, step);
    }
    counter("count1", 0, 31, 3000, '%');
    counter("count2", 0, 22, 2500, '%');
    counter("count3", 0, 500, 3000, '+');
  });