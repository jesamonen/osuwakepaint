/* =========================
   LOAD NAVIGATION
========================= */

const navContainer = document.querySelector("#main-nav");

if (navContainer) {
    fetch("nav.html")
        .then(response => response.text())
        .then(data => {
            navContainer.innerHTML = data;

            initializeNavigation();
            initializeTheme();
        })
        .catch(error => {
            console.error("Navigation failed to load", error);
        });
}

/* =========================
   MOBILE MENU
========================= */

function initializeNavigation() {

    const menuToggle =
        document.querySelector("#menuToggle");

    const navLinks =
        document.querySelector("#navLinks");

    if (!menuToggle || !navLinks) return;

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

/* =========================
   DARK MODE
========================= */

function initializeTheme() {

    const themeBtn =
        document.querySelector("#themeBtn");

    if (!themeBtn) return;

    const savedTheme =
        localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark");
        themeBtn.textContent = "☀️";

    }

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const darkMode =
            document.body.classList.contains("dark");

        localStorage.setItem(
            "theme",
            darkMode ? "dark" : "light"
        );

        themeBtn.textContent =
            darkMode ? "☀️" : "🌙";

    });
}

/* =========================
   HERO SLIDER
========================= */

const slides =
    document.querySelectorAll(".slide");

if (slides.length > 0) {

    let currentSlide = 0;

    setInterval(() => {

        slides[currentSlide]
            .classList.remove("active");

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        slides[currentSlide]
            .classList.add("active");

    }, 5000);

}

/* =========================
   PAINT CALCULATOR
========================= */

const calculateBtn =
    document.querySelector("#calculateBtn");

if (calculateBtn) {

    calculateBtn.addEventListener("click", () => {

        const area =
            Number(document.querySelector("#area").value);

        const result =
            document.querySelector("#result");

        if (!area || area <= 0) {

            result.textContent =
                "Please enter a valid area.";

            return;
        }

        const coverageRate = 12;

        const litresNeeded =
            Math.ceil(area / coverageRate);

        result.textContent =
            `Estimated paint required: ${litresNeeded} litres`;

    });

}

/* =========================
   PRODUCT SEARCH
========================= */

const searchInput =
    document.querySelector("#searchInput");

if (searchInput) {

    searchInput.addEventListener("input", () => {

        const search =
            searchInput.value.toLowerCase();

        const cards =
            document.querySelectorAll(".card");

        cards.forEach(card => {

            const title =
                card.querySelector("h3")
                    .textContent
                    .toLowerCase();

            card.style.display =
                title.includes(search)
                    ? "block"
                    : "none";

        });

    });

}

/* =========================
   PRODUCT FILTER
========================= */

const filter =
    document.querySelector("#filter");

if (filter) {

    filter.addEventListener("change", () => {

        const selected =
            filter.value;

        const cards =
            document.querySelectorAll(".product-card");

        cards.forEach(card => {

            const category =
                card.dataset.category;

            if (
                selected === "all" ||
                selected === category
            ) {

                card.style.display =
                    "block";

            } else {

                card.style.display =
                    "none";
            }

        });

    });

}

/* =========================
   ACTIVE NAVIGATION LINK
========================= */

window.addEventListener("load", () => {

    const currentPage =
        location.pathname
            .split("/")
            .pop();

    const links =
        document.querySelectorAll(
            ".nav-links a"
        );

    links.forEach(link => {

        if (
            link.getAttribute("href")
            === currentPage
        ) {

            link.style.color =
                "#F4A261";

        }

    });

});