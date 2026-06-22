async function loadBlogPosts() {

    try {

        const response =
            await fetch("data/blogposts.json");

        const posts =
            await response.json();

        const container =
            document.querySelector("#blogContainer");

        if (!container) return;

        posts.forEach(post => {

            const article =
                document.createElement("article");

            article.classList.add("card");

            article.innerHTML = `
                <img
                    src="${post.image}"
                    alt="${post.title}">

                <div class="card-content">

                    <h3>${post.title}</h3>

                    <p>${post.excerpt}</p>

                    <p>
                        <strong>Date:</strong>
                        ${post.date}
                    </p>

                    <a
                        href="${post.link}"
                        class="btn">

                        Read More

                    </a>

                </div>
            `;

            container.appendChild(article);

        });

    } catch(error) {

        console.error(
            "Failed to load blog posts",
            error
        );

    }

}

loadBlogPosts();