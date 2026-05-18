import { toggleContent } from './modules/toggle.js';
import { skills } from './modules/skillsData.js';
import { renderSkills } from './modules/renderSkills.js';



const profileData = {
    name: 'Алексей Анастасин',
    target: 'Цель: Стать Front-end разработчиком в 2026 году',
    email: 'alexey@example.com',
   
};

const profileName = document.querySelector('h2');
profileName.textContent = profileData.name

const skillsList = document.querySelector('.skills-list');



const orderButton = document.querySelector('.bth');
let isOrder = false;

orderButton.addEventListener('click', () => { 
    isOrder = toggleContent(orderButton, isOrder, 'Заказ принят', 'Заказать');
    orderButton.classList.toggle('btn-success'); // Класс переключается всегда при клике
});


const emailButton = document.querySelector('.btn-secondary');
const profileText = document.querySelector('.profile-text');
let isEmailShown = false;

emailButton.addEventListener('click', () => {
    isEmailShown = toggleContent(profileText, isEmailShown, profileData.email, profileData.target);
    
});

renderSkills(skills, '.skills-list');
