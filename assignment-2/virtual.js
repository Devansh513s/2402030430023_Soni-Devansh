document.addEventListener("DOMContentLoaded", function () {
    const content = document.getElementById("content");
    const links = document.querySelectorAll("nav ul li a");

    // Load pages dynamically without refreshing
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default behavior

            const page = this.getAttribute("data-page");

            if (page) {
                fetch(page)
                    .then(response => response.text())
                    .then(data => {
                        content.innerHTML = data; // Load content inside #content
                    })
                    .catch(error => console.error("Error loading page:", error));
            }
        });
    });
});
