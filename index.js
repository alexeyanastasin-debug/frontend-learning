const orderButton = document.querySelector('.bth');
orderButton.addEventListener('click', function() {
     alert ('Спасибо за заказ! Я свяжусь с вами.')
});

const emailButton = document.querySelector('.btn-secondary');
const profileText = document.querySelector('.profile-text');

emailButton.addEventListener('click', () => {
    if (isEmailShown === false) { 
        profileText.textContent = 'Моя почта: alexey@example.com';
        isEmailShown = true;
    } else {
         profileText.textContent = 'Цель: Стать Front-end разработчиком в 2026 году';
         isEmailShown = false;
    }
});

let isEmailShown = false;
