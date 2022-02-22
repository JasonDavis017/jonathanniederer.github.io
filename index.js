// Grab HTML Elements
const btn = document.getElementById("mobile-menu-button");
const menu = document.getElementById("menu");

// Add Event Listeners
btn.addEventListener("click", () => {
	menu.classList.toggle("hidden");
    menu.classList.toggle("transition-transform");
	});
