//  Menu Show
const showmenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
};

showmenu('nav-toggle', 'nav-menu');

/*
const toggleId = document.getElementById('nav-toggle');
const navId = document.getElementById('nav-menu');
toggleId.addEventListener('click', () => {
  navId.classList.toggle('show');
});
*/

//Active and Remove
const navLink = document.querySelectorAll('.nav__link');
console.log(navLink);

navLink.forEach((n) =>
  n.addEventListener('click', function () {
    //Active
    navLink.forEach((n) => n.classList.remove('active'));
    this.classList.add('active');

    //Remove
    document.getElementById('nav-menu').classList.remove('show');
  })
);

const selectElement = function (element) {
  return document.querySelector(element);
};

const sr = ScrollReveal();

sr.reveal('.animate-left', {
  origin: 'left',
  duration: 800,
  distance: '20rem',
  delay: 300,
});

sr.reveal('.animate-right', {
  origin: 'right',
  duration: 800,
  distance: '20rem',
  delay: 300,
});

sr.reveal('.animate-top', {
  origin: 'top',
  duration: 800,
  distance: '20rem',
  delay: 600,
});

sr.reveal('.animate-bottom', {
  origin: 'bottom',
  duration: 800,
  distance: '20rem',
  delay: 600,
});
