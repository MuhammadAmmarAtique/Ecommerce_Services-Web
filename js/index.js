//1. Enabling tooltip for button
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


//2. Changing color of Contact us heading on hovering
const contactus_heading = document.querySelector('.CS-heading');

// enter
contactus_heading.addEventListener('mouseenter', () => {
  contactus_heading.style.color = '#29a9fd';
});
// leave
contactus_heading.addEventListener('mouseleave', () => {
  contactus_heading.style.color = 'white';
});

//3. Changing color of About us heading on hovering

const aboutus_heading = document.querySelector('.ASheading');

// enter
aboutus_heading.addEventListener('mouseenter', () => {
  aboutus_heading.style.color = '#29a9fd';
});
// leave
aboutus_heading.addEventListener('mouseleave', () => {
  aboutus_heading.style.color = 'white';
});