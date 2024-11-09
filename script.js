function toggleMenu() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("show");
}

// Closes the menu if the user clicks outside the navbar or on the menu button
document.addEventListener('click', function(event) {
  const navbar = document.getElementById('navbar');
  const menuToggle = document.querySelector('.menu-toggle');

  // If the click is outside the navbar and not on the toggle button, close the menu
  if (!navbar.contains(event.target) && !menuToggle.contains(event.target)) {
      navbar.classList.remove('show');
  }
});

function toggleDetails(card) {
  // Get all project cards
  const allCards = document.querySelectorAll('.project-card');

  // Removes the 'expanded' class from all cards
  allCards.forEach(function(item) {
      if (item !== card) {
          item.classList.remove('expanded');
      }
  });

  // Toggles the 'expanded' class on the clicked card
  card.classList.toggle('expanded');
}

window.addEventListener("scroll", function() {
  const projectsTitle = document.querySelector(".slide-in");
  const position = projectsTitle.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (position < windowHeight - 50) {
      projectsTitle.style.animation = "slideIn 2s ease-out forwards";
  }
});

