// projects.js

async function loadProjects() {

    const container =
        document.querySelector("#projectsContainer");

    if (!container) return;

    try {

        const response =
            await fetch("data/projects.json");

        if (!response.ok) {
            throw new Error("Failed to load projects");
        }

        const projects =
            await response.json();

        container.innerHTML = "";

        projects.forEach(project => {

            const card =
                document.createElement("article");

            card.classList.add("card");

            card.innerHTML = `
                <img
                    src="${project.image}"
                    alt="${project.title}">

                <div class="card-content">

                    <h3>${project.title}</h3>

                    <p>${project.description}</p>

                    <p>
                        <strong>Location:</strong>
                        ${project.location}
                    </p>

                    <p>
                        <strong>Category:</strong>
                        ${project.category}
                    </p>

                </div>
            `;

            container.appendChild(card);

        });

    } catch (error) {

        console.error(error);

        container.innerHTML = `
            <p>
                Unable to load projects at this time.
            </p>
        `;
    }
}

document.addEventListener("DOMContentLoaded", loadProjects);