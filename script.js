 document.addEventListener('DOMContentLoaded', () => {

    // --- 1. ЛОГІКА ПОЛІВ "ЗВІДКИ/КУДИ" ---
    const fromInput = document.getElementById("from");
    const dropdownFrom = document.getElementById("dropdown-from");
    const toInput = document.getElementById("to");
    const dropdownTo = document.getElementById("dropdown-to");

    if (fromInput && dropdownFrom) {
        fromInput.addEventListener("focus", () => dropdownFrom.classList.add("active"));
        dropdownFrom.querySelectorAll(".dropdown-item").forEach(item => {
            item.addEventListener("click", () => {
                fromInput.value = item.getAttribute("data-city");
                dropdownFrom.classList.remove("active");
                   updateCartUI();
    updateCartCount(); // ДОДАЙ ЦЕ
            });
        });
    }

    if (toInput && dropdownTo) {
        toInput.addEventListener("focus", () => dropdownTo.classList.add("active"));
        dropdownTo.querySelectorAll(".dropdown-item").forEach(item => {
            item.addEventListener("click", () => {
                toInput.value = item.getAttribute("data-city");
                dropdownTo.classList.remove("active");
            });
        });
    }
document.addEventListener('DOMContentLoaded', () => {

   // --- 2. ПЕРЕВІРКА АВТОРИЗАЦІЇ ---
function checkAuthStatus() {
    const isLogged = localStorage.getItem('isUserLoggedIn') === 'true';
    const loginBtn = document.querySelector('.open-btn');
    
    if (loginBtn) {
        if (isLogged) {
            loginBtn.innerText = "Мій профіль";
        } else {
            loginBtn.innerText = "Увійти";
        }
    }
    return isLogged;
}

// --- 3. ЗАВАНТАЖЕННЯ ---
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
    checkAuthStatus();
    
    // ПРИБИРАЄМО АВТОМАТИЧНЕ ВІДКРИТТЯ ВІКНА (очищаємо hash)
    if (window.location.hash) {
        history.replaceState(null, null, ' ');
    }
});

// --- 4. КЛІК ПО КНОПЦІ ПРОФІЛЮ ---
document.addEventListener('click', (e) => {
    if (e.target.closest('.open-btn')) {
        e.preventDefault();
        
        const isLogged = localStorage.getItem('isUserLoggedIn') === 'true';
        
        if (isLogged) {
            console.log("Відкриваю профіль...");
            document.getElementById('profileModal').style.display = 'flex';
        } else {
            console.log("Відкриваю форму входу...");
            document.getElementById('login-window').style.display = 'flex';
        }
    }
});

// --- 5. КОЛИ КОРИСТУВАЧ НАТИСКАЄ "ПРОДОВЖИТИ" (ВХІД) ---
// Знайдіть кнопку "Продовжити" у вашому HTML і додайте їй цей onclick або виклик
function loginSuccess() {
    localStorage.setItem('isUserLoggedIn', 'true');
    document.getElementById('login-window').style.display = 'none';
    checkAuthStatus();
}
});
   // --- 4. ЛОГІКА ВІДГУКІВ ---
const btnAddReview = document.querySelector(".btn-add-review");
const modal = document.getElementById("reviewModal");

if (btnAddReview && modal) {
    // Відкриття
    btnAddReview.addEventListener('click', () => {
        modal.style.display = "flex";
    });

    // Закриття через делегування (надійніший метод)
    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('close-btn') || e.target === modal) {
            modal.style.display = "none";
        }
    });
}

    // --- 5. КОШИК ТА ІНШЕ ---
    updateCartUI();
});


function updateCartUI() {
    const cartContainer = document.getElementById('cart-items-container');
    const cart = JSON.parse(localStorage.getItem('bookedTickets')) || [];

    if (cartContainer) {
        cartContainer.innerHTML = '';
        cart.forEach((ticket, index) => {
            cartContainer.innerHTML += ` 
                <div class="cart-item">
                    <p><strong>${ticket.route}</strong></p>
                    <p>Час: ${ticket.time}</p>
                    <p>Ціна: ${ticket.price}</p>
                    <button class="remove-item-btn" onclick="removeItem(${index})">Видалити</button>
                </div>`;
        });
    }
}
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('bookedTickets')) || [];
    cart.splice(index, 1); // Видаляємо квиток за номером
    localStorage.setItem('bookedTickets', JSON.stringify(cart));
    updateCartUI(); // Оновлюємо кошик на екрані
    updateCartCount(); // ДОДАЙ ЦЕ
}
function clearCart() {
    localStorage.removeItem('bookedTickets');
    updateCartUI();
      localStorage.removeItem('bookedTickets');
    updateCartUI();
    updateCartCount(); // ДОДАЙ ЦЕ
}
function addToCart(newTicket) {
    let savedData = localStorage.getItem('bookedTickets');
    let cart = [];

    // Безпечно отримуємо масив
    try {
        let parsed = JSON.parse(savedData);
        if (Array.isArray(parsed)) {
            cart = parsed;
        }
    } catch (e) {
        console.warn("Дані пошкоджені, скидаємо");
    }

    cart.push(newTicket);
    localStorage.setItem('bookedTickets', JSON.stringify(cart));
    
    // ОНОВЛЕННЯ ТУТ:
    updateCartUI(); 
    updateCartCount(); // Ця функція оновлює саме лічильник (той самий .cart-count)
    
    console.log("Квиток додано, лічильник оновлено.");
}
 function triggerInputError(el) {
    if (el) {
        el.classList.add('error');
        setTimeout(() => el.classList.remove('error'), 400);
    }
}
// Додай цей код всередині головного блоку DOMContentLoaded
const cartButton = document.getElementById('cartButton'); // Беремо кнопку по ID
const cartSidebar = document.getElementById('cartSidebar'); // Оголошуємо саму панель!
const cartOverlay = document.getElementById('cartOverlay');
const closeCartBtn = document.getElementById('closeCartBtn');

// Тепер використовуємо ці змінні:
if (cartButton && cartSidebar) {
    cartButton.addEventListener('click', (e) => {
        e.preventDefault(); // Додаємо, щоб посилання не перезавантажувало сторінку
        cartSidebar.classList.add('open');
        if (cartOverlay) cartOverlay.classList.add('open');
    });
}

if (closeCartBtn && cartSidebar) {
    closeCartBtn.addEventListener('click', () => {
        document.addEventListener('DOMContentLoaded', () => {
    
    // --- ПЕРЕВІРКА СТАТУСУ ПРИ ЗАВАНТАЖЕННІ ---
    const isLogged = localStorage.getItem('isUserLoggedIn') === 'true';
    const profileBtn = document.querySelector('.open-btn'); // Переконайтеся, що кнопка "Увійти" має клас .open-btn

    if (isLogged && profileBtn) {
        profileBtn.textContent = 'Мій профіль';
    }

    // ... далі йде ваша інша логіка ...
});
        cartSidebar.classList.remove('open');
        if (cartOverlay) cartOverlay.classList.remove('open');
    });
}
function updateCartCount() {
    const countElement = document.querySelector('.cart-count'); // ЗАМІНИ '.cart-count-class' НА КЛАС АБО ID ТВОГО ЛІЧИЛЬНИКА
    const cart = JSON.parse(localStorage.getItem('bookedTickets')) || [];
     
    if (countElement) {
        countElement.textContent = cart.length; // Встановлюємо кількість елементів у масиві
    }
}
// Це змушує лічильник оновитися відразу після завантаження сторінки
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
});
document.addEventListener('DOMContentLoaded', () => {
    // ... ваш інший код (кошик, меню, тощо) ...

    // --- ЛОГІКА РЕЄСТРАЦІЇ ---
    // ...

    // --- ЛОГІКА ВХОДУ (ОСТАННЯ ВЕРСІЯ) ---
    const testBtn = document.querySelector('button[type="submit"]');
    if (testBtn) {
        testBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            const loginForm = testBtn.closest('form');
            const emailInput = loginForm.querySelector('input[type="email"]');
            const passInput = loginForm.querySelector('input[type="password"]');
            const savedUser = JSON.parse(localStorage.getItem('registeredUser'));

            if (savedUser && emailInput.value === savedUser.email && passInput.value === savedUser.password) {
                alert('Вхід успішний!');
                localStorage.setItem('isUserLoggedIn', 'true');
                const profileBtn = document.querySelector('.open-btn');
                if (profileBtn) profileBtn.textContent = 'Мій профіль';
                const loginWindow = document.getElementById('login-window');
                if (loginWindow) loginWindow.style.display = 'none';
            } else {
                alert('Невірний email або пароль!');
            }
        });
    }

}); 
document.addEventListener('click', function(e) {
    // Шукаємо, чи був клік по кнопці з текстом "Мій профіль" або класом .open-btn
    if (e.target.matches('.open-btn') || e.target.closest('.open-btn')) {
        e.preventDefault();
        
        console.log("Клік по кнопці профілю зафіксовано!");

        const isLogged = localStorage.getItem('isUserLoggedIn') === 'true';

        if (isLogged) {
            const profileModal = document.getElementById('profileModal');
            if (profileModal) {
                profileModal.style.display = 'flex';
                console.log("Відкриваю вікно профілю");
            } else {
                console.error("Помилка: Елемент profileModal не знайдено в HTML!");
            }
        } else {
            const loginWindow = document.getElementById('login-window');
            if (loginWindow) {
                loginWindow.style.display = 'flex';
                console.log("Відкриваю вікно входу");
            }
        }
    }
});
// Слухаємо кліки по всьому документу
document.addEventListener('click', (e) => {
    // Перевіряємо, чи клікнули саме на хрестик закриття (будь-який)
    // У вашому HTML це клас "close-btn" або "close-btn-profile"
    if (e.target.matches('.close-btn') || e.target.matches('.close-btn-profile')) {
        e.preventDefault();
        
        // Знаходимо батьківське вікно (модалку) і ховаємо його
        const modal = e.target.closest('.modal');
        if (modal) {
            modal.style.display = 'none';
            console.log("Вікно закрито!");
        }
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const loginWindow = document.getElementById('login-window');
    const profileModal = document.getElementById('profileModal');
    const openBtn = document.querySelector('.open-btn');

    // 1. Оновлення кнопки при старті
    if (localStorage.getItem('isUserLoggedIn') === 'true' && openBtn) {
        openBtn.textContent = 'Мій профіль';
    }

   document.addEventListener('click', (e) => {
    // 1. Якщо клікнули на кнопку відкриття профілю - відкриваємо
    if (e.target.closest('.open-btn')) {
        e.preventDefault();
        document.getElementById('profileModal').style.display = 'flex';
    }

    // 2. Якщо клікнули на хрестик - закриваємо
    if (e.target.matches('.close-btn-profile')) {
        document.getElementById('profileModal').style.display = 'none';
    }

    // 3. ЯКЩО клікнули на фон (навколо вікна), але НЕ на саме вікно - закриваємо
    if (e.target.id === 'profileModal') {
        document.getElementById('profileModal').style.display = 'none';
    }
});

    // 3. Логіка входу
    const loginForm = document.querySelector('#login-window .auth-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            localStorage.setItem('isUserLoggedIn', 'true');
            openBtn.textContent = 'Мій профіль';
            loginWindow.style.display = 'none';
            alert('Вхід успішний!');
            
        });
    }
});

function openTab(tabId, element, event) {
    // Зупиняємо спливання, щоб модалка не закрилась
    if (event) event.stopPropagation();

    // 1. Сховати всі елементи з класом .tab-content
    document.querySelectorAll('.tab-content').forEach(function(content) {
        content.style.display = 'none';
    });

    // 2. Показати лише той елемент, ID якого ми передали (tabId)
    document.getElementById(tabId).style.display = 'block';

    // 3. Змінити активну кнопку
    document.querySelectorAll('.tabs button').forEach(function(btn) {
        btn.classList.remove('active');
    });
    element.classList.add('active');
}
document.addEventListener('DOMContentLoaded', function() {
    // Функція вкладок
    window.openTab = function(tabId, element, event) {
        document.querySelectorAll('.tab-content').forEach(t => t.style.display = 'none');
        document.querySelectorAll('.tabs button').forEach(btn => btn.classList.remove('active'));
        document.getElementById(tabId).style.display = 'block';
        element.classList.add('active');
    };

    // Обробка темної теми
    const saveBtn = document.getElementById('saveBtn');
    const themeToggle = document.getElementById('themeToggle');

    if (saveBtn && themeToggle) {
        saveBtn.addEventListener('click', function() {
            if (themeToggle.checked) {
                document.body.classList.add('dark-theme');
                localStorage.setItem('darkMode', 'enabled');
            } else {
                document.body.classList.remove('dark-theme');
                localStorage.setItem('darkMode', 'disabled');
            }
        });
    }

    // Відновлення теми при завантаженні сторінки
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-theme');
        if (themeToggle) themeToggle.checked = true;
    }
});
// Функція для підрахунку суми
function updateTotalPrice() {
    let total = 0;
    // Шукаємо всі елементи, де вказана ціна квитків у кошику
    // ВАЖЛИВО: переконайтеся, що в кошику ціна має клас "ticket-price"
    const priceElements = document.querySelectorAll('.ticket-price'); 
    
    priceElements.forEach(item => {
        // Отримуємо текст ціни та перетворюємо в число
        total += parseFloat(item.innerText) || 0;
    });

    // Оновлюємо значення в блоці з ID "total-price"
    document.getElementById('total-price').innerText = total;
}
function removeTicket(event) {
    // 1. Ваш код, який видаляє квиток...
    event.target.closest('.cart-item').remove();
    
    // 2. ДОДАЙТЕ ЦЕЙ РЯДОК ПІСЛЯ ВИДАЛЕННЯ:
    updateTotalPrice(); 
}
// --- ДОДАВАННЯ ТОВАРУ ---


function removeTicket(index) {
    // 1. Отримуємо дані
    let cart = JSON.parse(localStorage.getItem('myCart')) || [];
    
    // 2. Видаляємо квиток
    cart.splice(index, 1);
    
    // 3. Зберігаємо оновлений масив
    localStorage.setItem('myCart', JSON.stringify(cart));
    
    // 4. Оновлюємо відображення кошика
    renderCart();
    
    // --- ДОДАЙТЕ ЦЕЙ РЯДОК ---
    updateCartUI(); 
    // -------------------------
}
function updateCartUI() {
    let cart = JSON.parse(localStorage.getItem('myCart')) || [];
    
    // Шукаємо елемент за класом
    const counterElement = document.querySelector('.cart-count'); 
    
    if (counterElement) {
        counterElement.innerText = cart.length;
        console.log("Лічильник успішно оновлено на:", cart.length);
    } else {
        console.error("Помилка: Елемент .cart-count не знайдено в DOM!");
    }
}
// Додайте цю функцію окремо, щоб вона малювала кошик
function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem('myCart')) || [];
    cart.push(item);
    localStorage.setItem('myCart', JSON.stringify(cart));

    // Оновлюємо інтерфейс кнопки (ваше рішення)
    if (event && event.target) {
        event.target.innerText = "Added";
        event.target.disabled = true;
    }

    // ТУТ ОНОВЛЮЄМО ЛІЧИЛЬНИК
    updateCartUI(); 
    
    if (typeof renderCart === 'function') renderCart();
}

// Функція відображення
function renderCart() {
    const cartContainer = document.getElementById('cart-items');
    const totalElement = document.getElementById('total-sum');
    if (!cartContainer) return;

    const cart = JSON.parse(localStorage.getItem('myCart')) || [];
    cartContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const price = Number(item.price) || 0;
        total += price; // Тепер додається число до числа

        const newTicket = document.createElement('div');
        newTicket.className = 'cart-item';
        
        const discountLabel = item.isDiscount ? 
            '<span style="color:red; font-size:12px; margin-left: 5px;">ЗНИЖКА</span>' : '';

        newTicket.innerHTML =`
            <span><strong>${item.route}</strong> (${item.date}) ${discountLabel}</span>
            <span>${price} грн</span>
            <button class="btn-delete" onclick="removeTicket(${index})">Видалити</button>
        `;
        cartContainer.appendChild(newTicket);
    });

    if (totalElement) {
        totalElement.innerText = total + " грн";
    }
}

// --- МАЛЮВАННЯ КОШИКА ---
document.addEventListener('DOMContentLoaded', () => {
    // Нам не потрібно тут знову писати весь цикл, 
    // достатньо просто викликати функцію, яку ми вже створили!
    renderCart(); 
});

function clearCart() {
    // Додаємо підтвердження, щоб користувач випадково не видалив замовлення
    if (confirm("Ви впевнені, що хочете очистити кошик?")) {
        localStorage.removeItem('myCart'); // Видаляємо дані з пам'яті
        location.reload(); // Перезавантажуємо сторінку
    }
}
window.onload = function() {
    updateCartUI();
};