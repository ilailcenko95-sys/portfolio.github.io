// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => navLinks.classList.toggle('active'));

// Sticky navbar background on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  reveals.forEach(reveal => {
    if (reveal.getBoundingClientRect().top < windowHeight - 50) reveal.classList.add('active');
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Animate progress bars
const progressBars = document.querySelectorAll('.progress-bar');
const animateProgress = () => {
  progressBars.forEach(bar => bar.style.width = bar.getAttribute('data-width'));
}
window.addEventListener('load', animateProgress);

// Typing effect
const typingText = ["HTML", "CSS", "JavaScript", "Figma"];
let i = 0, j = 0, currentText = '', isDeleting = false;
const typingElement = document.getElementById('typing');
const type = () => {
  if (i >= typingText.length) i = 0;
  const fullText = typingText[i];
  currentText = isDeleting ? fullText.substring(0, j--) : fullText.substring(0, j++);
  typingElement.textContent = currentText;
  if (!isDeleting && j === fullText.length + 1) { isDeleting = true; setTimeout(type, 1000); }
  else if (isDeleting && j === 0) { isDeleting = false; i++; setTimeout(type, 500); }
  else setTimeout(type, isDeleting ? 50 : 150);
}
if (typingElement) type();
