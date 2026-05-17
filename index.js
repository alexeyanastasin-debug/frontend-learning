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
    if(isOrder === false) {
        orderButton.textContent = 'Заказ принят';
        orderButton.classList.toggle('btn-success');
        isOrder = true;
    } else { 
        orderButton.textContent = 'Заказать';
        orderButton.classList.toggle('btn-success');
        isOrder = false;
    }
});

const emailButton = document.querySelector('.btn-secondary');
const profileText = document.querySelector('.profile-text');
let isEmailShown = false;

emailButton.addEventListener('click', () => {
    if (isEmailShown === false) { 
        profileText.textContent = profileData.email;
        isEmailShown = true;
    } else {
         profileText.textContent = profileData.target;
         isEmailShown = false;
    }
});



