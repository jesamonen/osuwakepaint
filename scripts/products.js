async function loadProducts() {

    try {

        const response =
            await fetch("data/products.json");

        const products =
            await response.json();

        const container =
            document.querySelector(
                "#productsContainer"
            );

        if (!container) return;

        products.forEach(product => {

            const card =
                document.createElement("article");

            card.classList.add(
                "card",
                "product-card"
            );

            card.dataset.category =
                product.category;

            card.innerHTML = `
                <img
                    src="${product.image}"
                    alt="${product.name}">

                <h3>${product.name}</h3>

                <p>${product.description}</p>
            `;

            container.appendChild(card);

        });

    } catch(error) {

        console.error(
            "Product loading failed",
            error
        );

    }

}

loadProducts();