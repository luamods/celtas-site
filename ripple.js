document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('[effect="ripple"]');

    links.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent the default link behavior

            // Your existing ripple effect code
            e = e.touches ? e.touches[0] : e;
            const r = link.getBoundingClientRect(),
                d = Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height, 2)) * 2;
            link.style.cssText = `--s: 0; --o: 1;`;
            link.offsetTop;
            link.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${e.clientX - r.left}; --y:${e.clientY - r.top};`;

            // Add a delay before navigating to the link
            setTimeout(function () {
                window.location.href = link.getAttribute("href");
            }, 600); // Adjust the delay time (in milliseconds) as needed
        });
    });
});