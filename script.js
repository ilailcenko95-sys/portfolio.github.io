// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Функция для закрытия меню и прокрутки к якорю
function closeMenuAndScroll(selector) {
  if (navLinks) {
    navLinks.classList.remove('active');
  }
  const element = document.querySelector(selector);
  if (element) {
    setTimeout(() => {
      element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }
}

if (menuToggle && navLinks) {
  const toggleMenu = (event) => {
    if (event) event.preventDefault();
    navLinks.classList.toggle('active');
  };

  let touchUsed = false;
  menuToggle.addEventListener('touchend', (event) => {
    touchUsed = true;
    toggleMenu(event);
  });

  menuToggle.addEventListener('click', (event) => {
    if (touchUsed) {
      touchUsed = false;
      return;
    }
    toggleMenu(event);
  });

  // Закрыть меню при клике на ссылку
  const navItems = navLinks.querySelectorAll('a');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

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
const translations = {
  ru: {
    title: "Привет, меня зовут Илья 👋",
    subtitle: "Мне 13 лет, я занимаюсь программированием уже 1.5 года",
    skills: "Работаю с: HTML, CSS, JavaScript, Figma и Python",
    aboutTitle: "Обо мне",
    aboutText: "Меня зовут Илья, мне 13 лет. Я занимаюсь программированием уже 1.5 года. Люблю создавать современные и удобные сайты. Постоянно развиваюсь и изучаю новые технологии.",
    projectsBtn: "Мои проекты",
    contactBtn: "Связаться",
    Skillers: "Навыки",
    Cards_heehe: "адаптивный лендинг с анимациями",
    Cards_heehe1: "личный сайт с анимациями и адаптивом",
    Cards_heehe2: "приложение для задач",
    Cards_heehe3: "дизайн интерфейсов",
    Cards_heehe4: "язык программирования",
    join_me: "Ты можешь связаться со мной по email: ",
    Contacts: "Контакты",
    Submit: "Отправить",
    heroLink: "Главная",
    aboutLink: "Обо мне",
    projectsLink: "Проекты",
    contactLink: "Контакты",
    secretLink: "Секрет",
    yourname:"твое имя",
    email: "твой email",
    message:"твое сообщение"
  },
  en: {
    title: "Hi, my name is Ilya 👋",
    subtitle: "I'm 13 years old and I've been programming for 1.5 years",
    skills: "I work with: HTML, CSS, JavaScript, Figma and Python",
    aboutTitle: "About me",
    aboutText: "My name is Ilya, I am 13 years old. I have been programming for 1.5 years. I love creating modern and user-friendly websites. I constantly learn new technologies.",
    projectsBtn: "My projects",
    contactBtn: "Contact me",
    Skillers: "Skills",
    Cards_heehe: "Modern responsive landing page with animations",
    Cards_heehe1: "Personal website with animations and responsiveness",
    Cards_heehe2: "Task management application",
    Cards_heehe3: "Interface design",
    Cards_heehe4: "Programming language",
    join_me: "You can contact me by email: ",
    Contacts: "Contacts",
    Submit: "Submit",
    heroLink: "Home",
    aboutLink: "About me",
    projectsLink: "Projects",
    contactLink: "Contacts",
    secretLink: "Secret",
    yourname:"your name",
    email: "your email",
    message:"your message"

  },
    fr: {
    title: "Bonjour, je m'appelle Ilya 👋",
    subtitle: "J'ai 13 ans et je programme depuis 1.5 ans",
    skills: "Je travaille avec: HTML, CSS, JavaScript, Figma et Python",
    aboutTitle: "À propos de moi",
    aboutText: "Je m'appelle Ilya, j'ai 13 ans. Je programme depuis 1.5 ans. J'aime créer des sites web modernes et conviviaux. Je développe constamment mes compétences et j'étudie les nouvelles technologies.",
    projectsBtn: "Mes projets",
    contactBtn: "Contactez-moi",
    Skillers: "Compétences",
    Cards_heehe: "Page de destination réactive moderne avec animations",
    Cards_heehe1: "Site personnel avec animations et réactivité",
    Cards_heehe2: "Application pour tâches",
    Cards_heehe3: "Conception d'interfaces",
    Cards_heehe4: "Langage de programmation",
    join_me: "Vous pouvez me contacter par email: ",
    Contacts: "Contacts",
    Submit: "Envoyer",
    heroLink: "Accueil",
    aboutLink: "À propos de moi",
    projectsLink: "Projets",
    contactLink: "Contact",
    secretLink: "Secret",
    yourname:"ton nom",
    email :"ton email",
    message:"ton message"
  },
};

function setLanguage(lang) {
  localStorage.setItem("lang", lang);

  document.getElementById("title").innerHTML = translations[lang].title + "<br><span id='typing'></span>";
  document.getElementById("subtitle").textContent = translations[lang].subtitle;
  document.getElementById("skills-text").textContent = translations[lang].skills;
  document.getElementById("about-title").textContent = translations[lang].aboutTitle;
  document.getElementById("about-text").textContent = translations[lang].aboutText;
  document.getElementById("projects-btn").textContent = translations[lang].projectsBtn;
  document.getElementById("contact-btn").textContent = translations[lang].contactBtn;
  document.getElementById("Skillers").textContent = translations[lang].Skillers;

  document.getElementById("Cards_heehe").textContent = translations[lang].Cards_heehe;
  document.getElementById("Cards_heehe1").textContent = translations[lang].Cards_heehe1;
  document.getElementById("Cards_heehe2").textContent = translations[lang].Cards_heehe2;
  document.getElementById("Cards_heehe3").textContent = translations[lang].Cards_heehe3;
  document.getElementById("Cards_heehe4").textContent = translations[lang].Cards_heehe4;
  document.getElementById("join_me").textContent = translations[lang].join_me;
  document.getElementById("Contacts").textContent = translations[lang].Contacts;
  document.getElementById("Submit").textContent = translations[lang].Submit;
  document.getElementById("hero-link").textContent = translations[lang].heroLink;
  document.getElementById("about-link").textContent = translations[lang].aboutLink;
  document.getElementById("projects-link").textContent = translations[lang].projectsLink;
  document.getElementById("contact-link").textContent = translations[lang].contactLink;
  document.getElementById("secret-link").textContent = translations[lang].secretLink;
  document.getElementById("yourname").placeholder = translations[lang].yourname;
  document.getElementById("email").placeholder = translations[lang].email;
  document.getElementById("message").placeholder = translations[lang].message;

}
// загрузка языка при старте
window.addEventListener("load", () => {
  const lang = localStorage.getItem("lang") || "ru";
  setLanguage(lang);
});
