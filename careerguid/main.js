document.addEventListener('DOMContentLoaded', function() {
  // --- Header Functionality ---

  // Example: Toggling the visibility of dropdown menus on hover (using JavaScript for more control)
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    const dropdownMenu = dropdown.querySelector('ul');
    if (dropdownMenu) {
      dropdown.addEventListener('mouseenter', () => {
        dropdownMenu.style.display = 'block';
      });
      dropdown.addEventListener('mouseleave', () => {
        dropdownMenu.style.display = 'none';
      });
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Example of a button click event handler
    const button = document.querySelector("button");
    if (button) {
      button.addEventListener("click", function(event) {
        event.preventDefault(); // prevent form submission if necessary
        console.log("Button clicked!");
      });
    }
  });
  

  // Example: "Get Started" button click (you can expand this)
  const getStartedButton = document.querySelector('header .login a.special');
  if (getStartedButton) {
    getStartedButton.addEventListener('click', function(event) {
      event.preventDefault();
      alert('You clicked Get Started! You might want to redirect to a signup page here.');
      // window.location.href = '/signup'; // Example redirection
    });
  }

  // --- Personalized Form Submission Handling (personalized.html) ---
  const personalizedForm = document.querySelector('.personalized form');
  if (personalizedForm) {
    personalizedForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission

      // Get form data
      const formData = new FormData(personalizedForm);
      const userData = {};
      formData.forEach((value, key) => {
        if (userData[key]) { // Handle multiple checkboxes
          if (!Array.isArray(userData[key])) {
            userData[key] = [userData[key]];
          }
          userData[key].push(value);
        } else {
          userData[key] = value;
        }
      });

      // Basic form validation (you can add more robust validation)
      if (!userData.name || !userData.age || !userData.gender || !userData.class || !userData.contact || !userData.email || !userData.career) {
        alert('Please fill in all the required fields.');
        return;
      }

      // You can now process the form data (e.g., send it to a server, display it, etc.)
      console.log('Personalized Form Data:', userData);
      alert('Form submitted successfully! (Check the console for data)');

      // Optionally, you can reset the form
      // personalizedForm.reset();
    });
  }

  // --- Smooth Scrolling for Anchor Links (if you have them in your main content) ---
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        const targetId = this.hash;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 60, // Adjust offset if your header is fixed and overlaps
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // --- Example: Basic interaction for Services section (index.html) ---
  const serviceCards = document.querySelectorAll('.services .cards .card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.05)';
      card.style.transition = 'transform 0.2s ease-in-out';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
      card.style.transition = 'transform 0.2s ease-in-out';
    });
  });

  // --- Example: Basic interaction for Career section cards (index.html) ---
  const careerCards = document.querySelectorAll('.careers .section .cards .card');
  careerCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.boxShadow = 'rgba(42, 91, 197, 0.5) 0px 7px 29px 0px';
      card.style.transform = 'translateY(-5px)';
      card.style.transition = 'all 0.2s ease-in-out';
    });
    card.addEventListener('mouseleave', () => {
      card.style.boxShadow = 'rgba(42, 91, 197, 0.3) 0px 7px 29px 0px';
      card.style.transform = 'translateY(0)';
      card.style.transition = 'all 0.2s ease-in-out';
    });
  });

  // You can add more JavaScript functionality here for other sections
  // like testimonials, footer interactions, etc.
});