import { toggleContent } from './modules/toggle.js';



const profileData = {
    name: 'Алексей Анастасин',
    target: 'Цель: Стать Front-end разработчиком в 2026 году',
    email: 'alexey@example.com',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Git / GitHub']
};

const profileName = document.querySelector('h2');
profileName.textContent = profileData.name

const skillsList = document.querySelector('.skills-list');

profileData.skills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    skillsList.appendChild(li);
});

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

