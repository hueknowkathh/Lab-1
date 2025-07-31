// Navbar toggle 
document.querySelector('.nav-toggle').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('active');
});

// About section toggle
document.querySelector('.about-toggle').addEventListener('click', function() {
  const content = document.querySelector('.about-content');
  if (content.style.display === 'none' || content.style.display === '') {
    content.style.display = 'block';
    this.textContent = 'Hide Info';
  } else {
    content.style.display = 'none';
    this.textContent = 'Show Info';
  }
});

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    e.preventDefault();
  } else {
    alert("Thank you for your message!");
  }
});
