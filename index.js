const orderButton = document.querySelector('.bth');
orderButton.addEventListener('click', function() {
     alert ('Спасибо за заказ! Я свяжусь с вами.')
});

const emailButton = document.querySelector('.btn-secondary');
const profileText = document.querySelector('.profile-text');

emailButton.addEventListener('click', () => {
    profileText.textContent = 'Моя почта: alexey@example.com';
});