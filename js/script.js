const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', isOpen);
    menuButton.textContent = isOpen ? '✕' : '☰';
  });
}

const enquiryForm = document.querySelector('#enquiryForm');
if (enquiryForm) {
  enquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = document.querySelector('#formMessage');
    message.textContent = 'Thank you! Your form is working in demo mode. Connect a form service or backend to receive enquiries.';
    message.style.color = '#166534';
    enquiryForm.reset();
  });
}
