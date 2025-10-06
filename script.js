// Функция для кнопки входа
function showMessage() {
    alert('Кнопка пока не работает! Это просто демо-версия дизайна.');
}

// Функция обработки авторизации через Telegram Login Widget
function onTelegramAuth(user) {
    console.log('Telegram авторизация:', user);
    
    // Проверяем, что пользователь авторизован
    if (user && user.id) {
        // Сохраняем данные пользователя
        localStorage.setItem('telegramUser', JSON.stringify(user));
        
        // Если есть номер телефона, сохраняем его
        if (user.phone_number) {
            localStorage.setItem('phoneNumber', user.phone_number);
        }
        
        // Показываем успешную авторизацию
        alert('✅ Авторизация успешна!\n\nID: ' + user.id + '\nИмя: ' + user.first_name + '\nТелефон: ' + (user.phone_number || 'Не указан'));
        
        // Переходим на страницу ввода кода
        window.location.href = 'code-verification.html';
    } else {
        alert('❌ Ошибка авторизации. Попробуйте снова.');
    }
}

// Функция для старой кнопки (если нужна)
function startVerification() {
    // Показываем обычный prompt как fallback
    const phone = prompt('Введите ваш номер телефона (например: +380123456789):');
    if (phone && phone.trim()) {
        localStorage.setItem('phoneNumber', phone.trim());
        window.location.href = 'code-verification.html';
    }
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
