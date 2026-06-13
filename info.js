document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Видаляємо активний клас у всіх кнопок меню
            tabs.forEach(t => t.classList.remove("active"));
            // Видаляємо активний клас у всіх текстових блоків
            contents.forEach(c => c.classList.remove("active"));

            // Додаємо активність поточній кнопці
            tab.classList.add("active");
            
            // Відкриваємо відповідний текстовий блок за ID
            const targetTab = tab.getAttribute("data-tab");
            document.getElementById(targetTab).classList.add("active");
        });
    });
});