// JavaScript для управления слайдером

// Находим элементы
const sliderMenuLinks = document.querySelectorAll('.slider_menu__link');
const projectImage = document.querySelector('.project-image');
const projectDetails = document.querySelectorAll('.parametr .project-params');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
const dotsContainer = document.querySelector('.dots-container'); // Контейнер для кружочков

// Данные проектов
const projects = [
  {
    city: 'Rostov-on-Don',
    name: 'LCD Admiral',
    area: '81 m2',
    repairTime: '3.5 months',
    repairCost: 'Upon request',
    image: './img/slider-photo1.png',
  },
  {
    city: 'Sochi',
    name: 'Thieves',
    area: '105 m2',
    repairTime: '4 months',
    repairCost: 'Upon request',
    image: './img/slider-photo2.png',
  },
  {
    city: 'Rostov-on-Don',
    name: 'Patriotic',
    area: '93 m2',
    repairTime: '4.5 months',
    repairCost: 'Upon request',
    image: './img/slider-photo3.png',
  },
];

let currentIndex = 0;

// Функция для обновления контента
function updateProject(index) {
  const project = projects[index];

  // Обновляем изображение
  projectImage.src = project.image;
  projectImage.alt = `${project.city} - ${project.name}`;

  // Обновляем детали проекта
  projectDetails[0].innerText = `${project.city}\n${project.name}`;
  projectDetails[1].innerText = project.area;
  projectDetails[2].innerText = project.repairTime;
  projectDetails[3].innerText = project.repairCost;

  // Обновляем активный кружочек
  document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

// Функция для переключения проекта
function changeProject(direction) {
  if (direction === 'next') {
    currentIndex = (currentIndex + 1) % projects.length;
  } else {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
  }
  updateProject(currentIndex);
}

// Создаем кружочки для навигации
function createDots() {
  projects.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === currentIndex) dot.classList.add('active');
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateProject(currentIndex);
    });
    dotsContainer.appendChild(dot);
  });
}

// Навешиваем события на стрелки
leftArrow.addEventListener('click', () => changeProject('prev'));
rightArrow.addEventListener('click', () => changeProject('next'));

// Навешиваем события на пункты меню
sliderMenuLinks.forEach((link, index) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    currentIndex = index;
    updateProject(currentIndex);
  });
});

// Инициализация
createDots();
updateProject(currentIndex);

