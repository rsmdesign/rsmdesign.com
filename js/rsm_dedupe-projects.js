const featuredProjects = document.querySelector("#featured-projects");
const allProjects = document.querySelector("#all-projects");

function removeDuplicateProjects() {
    for (const project of featuredProjects.children) {
        const slug = project.attributes["duplicate"].value;

        const duplicates = document.querySelectorAll(`#all-projects > [duplicate='${slug}']`);

        for (const duplicate of duplicates) {
            duplicate.remove();
        }
    }
}

removeDuplicateProjects();

const observer = new MutationObserver((mutationList, observer) => {
    for (const mutation of mutationList) {
        if (mutation.type === "childList") {
            removeDuplicateProjects();
        }
    }
});

observer.observe(allProjects, { childList: true });