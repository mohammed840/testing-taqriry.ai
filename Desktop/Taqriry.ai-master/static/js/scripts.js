document.addEventListener("DOMContentLoaded", function () {
    const solutionsLink = document.getElementById("solutions-link");
    const resourcesLink = document.getElementById("resources-link");
    const solutionsOverlay = document.getElementById("solutions-overlay");
    const resourcesOverlay = document.getElementById("resources-overlay");

    // Function to toggle overlay visibility
    function toggleOverlay(overlay, trigger, otherOverlay) {
        const rect = trigger.getBoundingClientRect();
        overlay.style.left = `${rect.left + window.scrollX}px`;
        overlay.style.top = `${rect.bottom + window.scrollY}px`;

        // Toggle 'active' class to show/hide overlay
        if (overlay.classList.contains("active")) {
            overlay.classList.remove("active");
        } else {
            overlay.classList.add("active");
            // Hide the other overlay if it’s open
            if (otherOverlay) {
                otherOverlay.classList.remove("active");
            }
        }
    }

    // Event listeners to toggle overlays
    solutionsLink.addEventListener("click", (e) => {
        e.preventDefault();
        toggleOverlay(solutionsOverlay, solutionsLink, resourcesOverlay);
    });

    resourcesLink.addEventListener("click", (e) => {
        e.preventDefault();
        toggleOverlay(resourcesOverlay, resourcesLink, solutionsOverlay);
    });

    // Close overlays when clicking outside of them
    document.addEventListener("click", (event) => {
        if (!solutionsOverlay.contains(event.target) && event.target !== solutionsLink) {
            solutionsOverlay.classList.remove("active");
        }
        if (!resourcesOverlay.contains(event.target) && event.target !== resourcesLink) {
            resourcesOverlay.classList.remove("active");
        }
    });

    // Prevent overlays from closing when clicking inside
    [solutionsOverlay, resourcesOverlay].forEach(overlay => {
        overlay.addEventListener("click", (e) => e.stopPropagation());
    });
});
