document.addEventListener('DOMContentLoaded', () => {
    const openModalButton = document.getElementById('openModal');
    const closeModalButton = document.getElementById('closeModal');
    const modal = document.getElementById('modal');
    const modalOverlay = document.getElementById('modal-overlay');

    // Function to show or hide the modal
    const toggleModal = (show) => {
        modal.hidden = !show;
        modalOverlay.hidden = !show;
        openModalButton.setAttribute('aria-expanded', show.toString());
    };

    // Event listeners for the modal
    openModalButton.addEventListener('click', () => toggleModal(true));
    closeModalButton.addEventListener('click', () => toggleModal(false));
    modalOverlay.addEventListener('click', () => toggleModal(false));

    // Add navigation functionality for SPA
    const serviceSections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            serviceSections.forEach((section) => {
                section.classList.add('hidden');
            });
            document.getElementById(targetId).classList.remove('hidden');
        });
    });
});

    document.addEventListener("DOMContentLoaded", () => {
    const speakerCheckbox = document.getElementById("speaker-event");
    const eventDetailsContainer = document.getElementById("event-details-container");
    
    // Toggle the visibility of the event details textarea based on checkbox state
    speakerCheckbox.addEventListener("change", () => {
      if (speakerCheckbox.checked) {
        eventDetailsContainer.style.display = "block";
      } else {
        eventDetailsContainer.style.display = "none";
      }
    });
    
    // Form submission handling
    const form = document.getElementById("schedule-call-form");
    const thankYouMessage = document.getElementById("thank-you-message");
    const errorMessage = document.getElementById("error-message");
    
    form.addEventListener("submit", (event) => {
      event.preventDefault();
    
      // Check if all required fields are filled
      const email = document.getElementById("email").value;
      const businessName = document.getElementById("business-name").value;
      const phoneNumber = document.getElementById("phone-number").value;
      const requiredFieldsFilled = email && businessName && phoneNumber;
    
      if (requiredFieldsFilled) {
        thankYouMessage.style.display = "block";
        errorMessage.style.display = "none";
        form.reset(); // Reset the form after submission
      } else {
        errorMessage.style.display = "block";
        thankYouMessage.style.display = "none";
      }
    });
    });

    