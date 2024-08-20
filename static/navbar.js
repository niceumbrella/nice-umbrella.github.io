document.addEventListener('DOMContentLoaded', function() {
	const toggleButton = document.querySelector('.toggle-button');
	const navLinks = document.querySelector('.nav-links');

	// Toggle button functionality
	toggleButton.addEventListener('click', function(event) {
		
		if (navLinks.style.display != 'block') {
			navLinks.style.display = 'block';
		} else {
			navLinks.style.display = null;
		}

		event.preventDefault();
	});
});