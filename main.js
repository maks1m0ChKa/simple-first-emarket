// // JavaScript Logic for Infinite Looping Carousel
// let currentIndex = 0;
// const carousel = document.querySelector('.carousel');
// const images = document.querySelectorAll('.carousel img');
// const totalImages = images.length - 1; // Subtract 1 because of the duplicate image

// function autoSlide() {
//     currentIndex++;
//     if (currentIndex > totalImages) {
//         // Transition smoothly to the duplicated image
//         carousel.style.transition = 'transform 0.5s ease';
//         carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

//         // Reset to the first image (loop) after animation ends
//         setTimeout(() => {
//             carousel.style.transition = 'none'; // Remove transition for instant reset
//             currentIndex = 0;
//             carousel.style.transform = `translateX(0%)`; // Reset to the first image
//         }, 500); // Match the transition time (0.5s)
//     } else {
//         // Regular sliding
//         carousel.style.transition = 'transform 0.5s ease';
//         carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
//     }
// }

// // Auto-slide every 5 seconds
// setInterval(autoSlide, 5000);
//------------------------------------------------------------------------------------------------------------

// document.getElementById('navbarToggle').addEventListener('click', function () {
//     const navbarNav = document.getElementById('navbarNav');
//     if (navbarNav.style.display === 'block') {
//         navbarNav.style.display = 'none';
//     } else {
//         navbarNav.style.display = 'block';
//     }
// });

// document.getElementById('loginForm').addEventListener('submit', function (event) {
//     event.preventDefault();

//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     const validUsername = 'admin';
//     const validPassword = 'password123';

//     if (username === validUsername && password === validPassword) {
//         alert('Добро пожаловать, ' + username + '!');
//         document.getElementById('loginForm').reset();
//         window.location.href = 'main.html';
//     } else {
//         document.getElementById('error-message').style.display = 'block';
//     }
// });



//     // Анимации на кнопки
//     const buttons = document.querySelectorAll('.btn');
//     buttons.forEach(button => {
//         button.addEventListener('mouseover', () => {
//             button.style.backgroundColor = '#ffcc00';
//         });
//         button.addEventListener('mouseout', () => {
//             button.style.backgroundColor = '#007bff';
//         });
//     });

document.addEventListener("DOMContentLoaded", function () {
    // Обработчик события для переключения навигационной панели
    const navbarToggle = document.getElementById('navbarToggle');
    if (navbarToggle) { // Проверяем, существует ли элемент
        navbarToggle.addEventListener('click', function () {
            const navbarNav = document.getElementById('navbarNav');
            if (navbarNav) { // Проверяем, существует ли элемент
                if (navbarNav.style.display === 'block') {
                    navbarNav.style.display = 'none';
                } else {
                    navbarNav.style.display = 'block';
                }
            } else {
                console.error('Navbar navigation not found!'); // Сообщение об ошибке
            }
        });
    } else {
        console.error('Navbar toggle button not found!'); // Сообщение об ошибке
    }

    // Анимации на кнопки
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#ffcc00'; // Цвет при наведении
        });
        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = '#007bff'; // Исходный цвет
        });
    });
});
