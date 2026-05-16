// 1. Знаходимо елементи слайдера на сторінці
const track = document.querySelector('.reviews-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Перевіряємо, чи всі елементи знайшлися, щоб не було помилок у консолі
if (track && prevBtn && nextBtn) {
    
    // Функція, яка автоматично рахує, на скільки пікселів треба гортати
    const getScrollStep = () => {
        const card = document.querySelector('.review-card');
        if (card) {
            // Беремо ширину картки + додаємо 20 пікселів (це відступ gap між ними)
            return card.offsetWidth + 20; 
        }
        return 350; // значення за замовчуванням, якщо картку не знайдено
    };

    // Подія для кнопки "Вправо" (гортаємо вперед)
    nextBtn.addEventListener('click', () => {
        track.scrollBy({ 
            left: getScrollStep(), 
            behavior: 'smooth' // робить прокрутку плавною
        });
    });

    // Подія для кнопки "Вліво" (гортаємо назад)
    prevBtn.addEventListener('click', () => {
        track.scrollBy({ 
            left: -getScrollStep(), 
            behavior: 'smooth' 
        });
    });
}