// script.js

// Traducciones
const translations = {
  es: {
    ownerName: "Carlos Andres Vallejos Yahn",
    navHome: "Inicio",
    navAbout: "Sobre mi",
    navSkills: "Habilidades",
    navResume: "Curriculum",
    navPortfolio: "Portafolio",
    navContacts: "Contactos",
    ownerTitle: "Tecnico en desarrollo de software- Especialidad en desarrollo web full stack",
    aboutMe: "Sobre mi",
    aboutMeGreeting: "Hola mi nombre completo es Carlos Andres Vallejos Yahn",
    aboutMeText: "soy un apasionado del desarrollo web y la programación, con experiencia en HTML, CSS, JavaScript, Node.js, Angular, React y MongoDB. Actualmente, estoy en el último año de mi Tecnicatura en Desarrollo de Software y complementando mis estudios con un curso intensivo de Full Stack Development.",
    personalData: "Datos personales",
    birthday: "Cumpleaños",
    phone: "Teléfono",
    email: "Gmail",
    github: "GitHub",
    position: "Cargo",
    positionName: "Desarrollador de Software",
    interests: "Intereses",
    games: "Juegos",
    music: "Música",
    travel: "Viajes",
    soccer: "Fútbol",
    books: "Libros",
    vehicles: "Vehículos",
    downloadCV: "Descargar CV",
    viewCV: "Ver Curriculum",
    skills: "Habilidades",
    technicalSkills: "Habilidades Técnicas",
    professionalSkills: "Habilidades Profesionales",
    quickAdaptation: "Rápida adaptación",
    willingToLearn: "Siempre dispuesto a aprender y ayudar en lo que se necesite",
    teamwork: "Trabajo en equipo",
    fullTimeAvailability: "Horario de atención full-time",
    communicationSkills: "Facilidad de comunicación y resolución de problemas",
    resume: "Curriculum",
    education: "Educacion",
    eduFerreira: "Desarrollo de Software",
    eduGlobal: "Desarrollo Web Full Stack",
    viewCertificate: "Ver Certificado",
    profProfileTitle: "Perfil Profesional",
    resumeSummary: "Soy Técnico en Desarrollo de Software con interés en la creación de soluciones tecnológicas. Mi mayor experiencia está en el desarrollo backend con Flask y Django, utilizando bases de datos MySQL mediante XAMPP para el desarrollo y pruebas de aplicaciones. Me interesa seguir aprendiendo, mejorar mis habilidades y participar en proyectos que me permitan crecer como desarrollador.",
    extraSkillsTitle: "Habilidades Extras",
    extraSkillGodot: "Desarrollo de videojuegos con Godot Engine",
    extraSkillFilmora: "Edición de video con Wondershare Filmora",
    extraSkillExcel: "Manejo de hojas de cálculo con Microsoft Excel",
    changeLanguage: "Cambiar idioma",
    skillJS: "JavaScript",
    skillHTMLCSS: "HTML y CSS",
    skillNode: "Node.js",
    skillLinux: "Manejo de terminal de Linux",
    skillReact: "React",
    skillWP: "WordPress",
    skillExcel: "Excel",
    skillXAMPP: "XAMPP",
    skillSQL: "SQL y MongoDB",
    skillGodot: "Godot Engine",
    skillPython: "Python, Flask y Tkinter",
    formWsTitle: "WhatsApp",
    formGmTitle: "Gmail",
    placeholderName: "Tu Nombre",
    placeholderMessage: "Tu Mensaje",
    placeholderSubject: "Asunto",
    btnWs: "Enviar a WhatsApp",
    btnGm: "Enviar a Gmail",
    githubLink: "Mi GitHub",
    portfolioSoon: "Mis proyectos aparecerán aquí pronto.",
    project1Title: "Tienda de Juegos",
    project1Desc: "Una página estática de videojuegos desarrollada con React, enfocada puramente en el frontend para mostrar un catálogo de productos.",
    project2Title: "Descargador de Audio y Video",
    project2Desc: "Aplicación web para descargar contenido multimedia de diversas plataformas, construida con Flask, HTML y CSS.",
    project3Title: "Sistema de Biblioteca (Flask)",
    project3Desc: "Sistema de gestión de biblioteca con frontend en React y backend en Flask con MySQL.",
    project4Title: "Sistema de Biblioteca (Node.js)",
    project4Desc: "Gestión de biblioteca profesional con React y backend en Node.js usando MongoDB Atlas.",
    pageTitleHome: "Portafolio - Inicio",
    pageTitleAbout: "Portafolio - Sobre Mi",
    pageTitleSkills: "Portafolio - Habilidades",
    pageTitleResume: "Portafolio - Curriculum",
    pageTitlePortfolio: "Portafolio - Proyectos",
    pageTitleContacts: "Portafolio - Contactos",
  },
  en: {
    ownerName: "Carlos Andres Vallejos Yahn",
    navHome: "Home",
    navAbout: "About me",
    navSkills: "Skills",
    navResume: "Resume",
    navPortfolio: "Portfolio",
    navContacts: "Contacts",
    ownerTitle: "Software Development Technician - Full Stack Web Development Specialist",
    aboutMe: "About me",
    aboutMeGreeting: "Hello, my full name is Carlos Andres Vallejos Yahn",
    aboutMeText: "I am a passionate web developer and programmer, with experience in HTML, CSS, JavaScript, Node.js, Angular, React, and MongoDB. I am currently in the final year of my Technicatura in Software Development and complementing my studies with an intensive Full Stack Development course.",
    personalData: "Personal data",
    birthday: "Birthday",
    phone: "Phone",
    email: "Email",
    github: "GitHub",
    position: "Position",
    positionName: "Software Developer",
    interests: "Interests",
    games: "Games",
    music: "Music",
    travel: "Travel",
    soccer: "Soccer",
    books: "Books",
    vehicles: "Vehicles",
    downloadCV: "Download CV",
    viewCV: "View Curriculum",
    skills: "Skills",
    technicalSkills: "Technical Skills",
    professionalSkills: "Professional Skills",
    quickAdaptation: "Quick adaptation",
    willingToLearn: "Always willing to learn and help where needed",
    teamwork: "Teamwork",
    fullTimeAvailability: "Full-time availability",
    communicationSkills: "Ease of communication and problem solving",
    resume: "Resume",
    education: "Education",
    eduFerreira: "Software Development",
    eduGlobal: "Full Stack Web Development",
    viewCertificate: "View Certificate",
    profProfileTitle: "Professional Profile",
    resumeSummary: "I am a Software Development Technician with an interest in the creation of technological solutions. My greatest experience is in backend development with Flask and Django, using MySQL databases through XAMPP for application development and testing. I am interested in continuing to learn, improving my skills, and participating in projects that allow me to grow as a developer.",
    extraSkillsTitle: "Extra Skills",
    extraSkillGodot: "Video game development with Godot Engine",
    extraSkillFilmora: "Video editing with Wondershare Filmora",
    extraSkillExcel: "Spreadsheet management with Microsoft Excel",
    changeLanguage: "Change language",
    skillJS: "JavaScript",
    skillHTMLCSS: "HTML and CSS",
    skillNode: "Node.js",
    skillLinux: "Linux Terminal Management",
    skillReact: "React",
    skillWP: "WordPress",
    skillExcel: "Excel",
    skillXAMPP: "XAMPP",
    skillSQL: "SQL and MongoDB",
    skillGodot: "Godot Engine",
    skillPython: "Python, Flask and Tkinter",
    formWsTitle: "WhatsApp",
    formGmTitle: "Gmail",
    placeholderName: "Your Name",
    placeholderMessage: "Your Message",
    placeholderSubject: "Subject",
    btnWs: "Send to WhatsApp",
    btnGm: "Send to Gmail",
    githubLink: "My GitHub",
    portfolioSoon: "My projects will appear here soon.",
    project1Title: "Game Store",
    project1Desc: "A static video game page developed with React, purely frontend focused to showcase a product catalog.",
    project2Title: "Audio and Video Downloader",
    project2Desc: "A web application for downloading multimedia content from various platforms, built with Flask, HTML, and CSS.",
    project3Title: "Library System (Flask)",
    project3Desc: "Library management system with React frontend and Flask backend with MySQL.",
    project4Title: "Library System (Node.js)",
    project4Desc: "Professional library management with React and Node.js backend using MongoDB Atlas.",
    pageTitleHome: "Portfolio - Home",
    pageTitleAbout: "Portfolio - About Me",
    pageTitleSkills: "Portfolio - Skills",
    pageTitleResume: "Portfolio - Resume",
    pageTitlePortfolio: "Portfolio - Projects",
    pageTitleContacts: "Portfolio - Contacts",
  }
};

// Estado del idioma actual
let currentLang = localStorage.getItem("portfolio_lang") || "es";

// Cambia el idioma
function changeLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("portfolio_lang", lang);
  document.querySelectorAll('[data-key]').forEach(elem => {
    const key = elem.getAttribute('data-key');
    if (translations[lang][key]) {
      if (elem.tagName === 'INPUT' || elem.tagName === 'TEXTAREA') {
        elem.placeholder = translations[lang][key];
      } else {
        elem.innerHTML = translations[lang][key];
      }
    }
  });
}

// Función para el menú responsive
function seleccionar() {
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Funcion que muestra el menu responsive
let menuVisible = false;
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

// Escuchar eventos al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
  // Botón de cambio de idioma
  const languageBtn = document.querySelector("#languageBtn");
  if (languageBtn) {
    languageBtn.addEventListener("click", () => {
      const newLang = currentLang === "es" ? "en" : "es";
      changeLanguage(newLang);
    });
  }

  // Menú responsive
  const navResponsive = document.querySelector(".nav-responsive");
  if (navResponsive) {
    navResponsive.addEventListener("click", mostrarOcultarMenu);
  }

  // Ocultar menú al hacer clic en un enlace
  const navLinks = document.querySelectorAll("#nav ul li a");
  navLinks.forEach(link => {
    link.addEventListener("click", seleccionar);
  });

  // Lógica de formularios de contacto
  const formWs = document.getElementById("formWhatsapp");
  if (formWs) {
    formWs.addEventListener("submit", (e) => {
      e.preventDefault();
      const nombre = document.getElementById("nombreWs").value;
      const mensaje = document.getElementById("mensajeWs").value;
      const numero = "3777394336";
      const url = `https://wa.me/${numero}?text=Hola, soy ${nombre}. ${mensaje}`;
      window.open(url, "_blank");
    });
  }

  const formGm = document.getElementById("formGmail");
  if (formGm) {
    formGm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nombre = document.getElementById("nombreGm").value;
      const asunto = document.getElementById("asuntoGm").value;
      const mensaje = document.getElementById("mensajeGm").value;
      const email = "carlosandresvallejosyahn@gmail.com";
      const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent("Hola, soy " + nombre + ".\n\n" + mensaje)}`;
      window.location.href = mailtoUrl;
    });
  }

  // Aplicar el idioma actual al cargar
  changeLanguage(currentLang);
});


  