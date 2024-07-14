function darkModeToggle() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    const popup = document.getElementById("popup");
    const popupButton = document.getElementById("popup-button");

    // Check if dark mode is enabled
    if (body.classList.contains("dark-mode")) {
        // Apply dark mode styles to the popup if it's visible
        if (popup.style.display === "block") {
            popup.style.backgroundColor = "#333";
            popupButton.style.backgroundColor = "#fff";
            popupButton.style.color = "#333";
        }
    } else {
        // Reset styles if dark mode is disabled
        popup.style.backgroundColor = "#fff";
        popupButton.style.backgroundColor = "#f8fcf8";
        popupButton.style.color = "#0c0c0c";
    }
}