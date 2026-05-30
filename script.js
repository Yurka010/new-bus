// Твій код для каруселі відгуків (рядки 1-34) залишається без змін!

document.addEventListener("DOMContentLoaded", () => {
  
  // 1. ЕЛЕМЕНТИ ДЛЯ ПЕРШОГО ПОЛЯ (Звідки)
  const fromInput = document.getElementById("from");
  const dropdownFrom = document.getElementById("dropdown-from");

  fromInput.addEventListener("focus", () => {
    dropdownFrom.classList.add("active");
  });

  const fromItems = dropdownFrom.querySelectorAll(".dropdown-item");
  fromItems.forEach(item => {
    item.addEventListener("click", () => {
      fromInput.value = item.getAttribute("data-city");
      dropdownFrom.classList.remove("active");
    });
  });


  // 2. ЕЛЕМЕНТИ ДЛЯ ДРУГОГО ПОЛЯ (Куди)
  const toInput = document.getElementById("to");
  const dropdownTo = document.getElementById("dropdown-to"); // Тут ми шукаємо виправлений в HTML id

  toInput.addEventListener("focus", () => {
    dropdownTo.classList.add("active");
  });

  const toItems = dropdownTo.querySelectorAll(".dropdown-item");
  toItems.forEach(item => {
    item.addEventListener("click", () => {
      toInput.value = item.getAttribute("data-city");
      dropdownTo.classList.remove("active");
    });
  });


  // 3. ЗАГАЛЬНЕ ЗАКРИТТЯ ОБВОХ МЕНЮ ПРИ КЛІКУ ПО ЕКРАНУ
  document.addEventListener("click", (e) => {
    // Закриваємо перше, якщо клікнули повз нього
    if (!fromInput.contains(e.target) && !dropdownFrom.contains(e.target)) {
      dropdownFrom.classList.remove("active");
    }
    // Закриваємо друге, якщо клікнули повз нього
    if (!toInput.contains(e.target) && !dropdownTo.contains(e.target)) {
      dropdownTo.classList.remove("active");
    }
  });

}); 
document.addEventListener('DOMContentLoaded', () => {
    // 1. Знаходимо вікно реєстрації та його елементи за вашими ID і класами
    const regWindow = document.getElementById('reg-window');
    
    if (regWindow) {
        const regForm = regWindow.querySelector('.auth-form');
        const emailInput = document.getElementById('RegEmail');
        const passwordInput = document.getElementById('reg-password');

        // 2. Вішаємо обробник на відправку форми реєстрації
        regForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Зупиняємо перезавантаження сторінки

            const emailValue = emailInput.value.trim();
            const passwordValue = passwordInput.value.trim();

            // 3. Створюємо об'єкт нового користувача
            const user = {
                email: emailValue,
                password: passwordValue
            };

            // 4. Записуємо дані в локальну пам'ять браузера (localStorage)
            localStorage.setItem('registeredUser', JSON.stringify(user));

            // 5. Виводимо повідомлення про успіх
            alert('Реєстрація успішна! Тепер ви можете увійти.');

            // Очищаємо поля після успішної реєстрації
            regForm.reset();

            // Автоматично перенаправляємо користувача на вікно входу
            window.location.hash = '#login-window';
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // 1. Знаходимо вікно входу (за посиланням #login-window або класом модалки)
    // Шукаємо кнопку "Продовжити" всередині форми входу
    const loginBtn = document.querySelector('.auth-form button, #login-window button, .modal button');

    if (loginBtn) {
        // Знаходимо інпути пошти та пароля відносно цієї кнопки
        const loginForm = loginBtn.closest('form') || loginBtn.parentElement;
        const loginEmailInput = loginForm.querySelector('input[type="email"]') || loginForm.querySelectorAll('input')[0];
        const loginPasswordInput = loginForm.querySelector('input[type="password"]') || loginForm.querySelectorAll('input')[1];

        loginBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Зупиняємо оновлення сторінки

            const emailValue = loginEmailInput.value.trim();
            const passwordValue = loginPasswordInput.value.trim();

            // 2. Дістаємо з пам'яті браузера користувача, якого ми зареєстрували раніше
            const savedUser = JSON.parse(localStorage.getItem('registeredUser'));

            // 3. Перевіряємо, чи взагалі хтось реєструвався
            if (!savedUser) {
                alert('Користувача не знайдено! Спочатку пройдіть реєстрацію.');
                return;
            }

            // 4. Перевіряємо збіг пошти та пароля
            if (emailValue === savedUser.email && passwordValue === savedUser.password) {
                alert('Вхід успішний! Ласкаво просимо.');
                
                // Закриваємо модальне вікно (прибираємо hash з URL)
                window.location.hash = ''; 
                
                // Очищаємо поля форми
                loginForm.reset();

                // (Опціонально) Тут можна змінити текст кнопки "Увійти" в шапці сайту на "Кабінет" або приховати її
                const topBarLoginBtn = document.querySelector('.open-btn, [href="#login-window"]');
                if (topBarLoginBtn) {
                    topBarLoginBtn.textContent = 'Мій профіль';
                    topBarLoginBtn.href = '#'; // відключаємо відкриття вікна знову
                }
            } else {
                // Якщо дані не збігаються
                alert('Неправильний Email або Пароль! Спробуйте ще раз.');
            }
        });
    }
});

const images = [
  "img/depositphotos_243568424-stock-photo-zurich-cityscape-image-zurich-switzerland.jpg",
  "img/d70a4911f04a3f917c0d985e4d2e08f0.jpeg",
  "img/01002gdg-c5c1.jpeg"
];

let current = 0;
const slide = document.getElementById("slide");
let isTransitioning = false; // Захист від швидких кліків

function changeSlide(direction) {
  if (isTransitioning) return; // Якщо анімація ще йде — ігноруємо клік
  isTransitioning = true;

  // 1. Плавно ховаємо поточну картинку
  slide.style.opacity = "0";

  // 2. Чекаємо 300мс (поки згасне) і змінюємо індекс
  setTimeout(() => {
    if (direction === "next") {
      current++;
      if (current >= images.length) current = 0;
    } else if (direction === "prev") {
      current--;
      if (current < 0) current = images.length - 1;
    }

    // Змінюємо саму картинку
    slide.src = images[current];
    
    // 3. Плавно показуємо нову
    slide.style.opacity = "1";

    // Дозволяємо наступний клік після завершення появи (ще 300мс)
    setTimeout(() => {
      isTransitioning = false;
    }, 300);
  }, 300);
}

// Ці дві функції викликаються при кліках на ліву/праву частину
function nextSlide() {
  changeSlide("next");
}

function prevSlide() {
  changeSlide("prev");
}