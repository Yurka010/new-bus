document.getElementById('payment-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Зупиняє перезавантаження сторінки
    
    // Імітація процесу оплати
    alert("Оплата пройшла успішно! Дякуємо за замовлення.");
    
    // Після натискання "ОК" у вікні alert - перекидаємо на головну
    window.location.href = 'index.html'; 
});