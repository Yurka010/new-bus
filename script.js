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
document.addEventListener("DOMContentLoaded", () => {
    const fromInput = document.getElementById("from");
    const dropdownFrom = document.getElementById("dropdown-from");

    // 1. Показуємо меню, коли користувач клікає на інпут "Звідки"
    fromInput.addEventListener("focus", () => {
        dropdownFrom.classList.add("active");
    });

    // 2. Закриваємо меню, якщо клікнули в будь-якому іншому місці екрана
    document.addEventListener("click", (e) => {
        if (!fromInput.contains(e.target) && !dropdownFrom.contains(e.target)) {
            dropdownFrom.classList.remove("active");
        }
    });

    // 3. Коли клікаємо на місто з меню — підставляємо його в інпут
    const items = dropdownFrom.querySelectorAll(".dropdown-item");
    items.forEach(item => {
        item.addEventListener("click", () => {
            fromInput.value = item.getAttribute("data-city");
            dropdownFrom.classList.remove("active"); // ховаємо меню
        });
    });
});