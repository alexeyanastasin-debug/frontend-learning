const orderButton = document.querySelector('.bth');
orderButton.addEventListener('click', () => { 
    if(isOrder === false) {
        orderButton.textContent = 'Заказ принят';
        isOrder = true;
    } else { 
        orderButton.textContent = 'Заказать';
        isOrder = false;
    }
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
let isOrder = false;
