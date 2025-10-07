// Проверка Telegram WebApp API при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    showDebugInfo('🔍 Проверяем Telegram WebApp API при загрузке...');
    
    // Ждем загрузки скрипта Telegram WebApp
    let attempts = 0;
    const maxAttempts = 20;
    
    const checkTelegramAPI = () => {
        attempts++;
        showDebugInfo(`🔍 Попытка ${attempts}/${maxAttempts}: window.Telegram = ${window.Telegram ? 'ЕСТЬ' : 'НЕТ'}`);
        
        if (window.Telegram && window.Telegram.WebApp) {
            showDebugInfo('✅ Telegram WebApp API доступен!');
            // Инициализируем WebApp
            window.Telegram.WebApp.ready();
            window.Telegram.WebApp.expand();
            return;
        }
        
        if (attempts < maxAttempts) {
            showDebugInfo('⏳ Ждем загрузки Telegram WebApp API...');
            setTimeout(checkTelegramAPI, 200);
        } else {
            showDebugInfo('❌ Telegram WebApp API не загрузился');
            // Пытаемся загрузить скрипт вручную
            loadTelegramScript();
        }
    };
    
    // Начинаем проверку
    checkTelegramAPI();
});

// Функция для загрузки скрипта Telegram WebApp вручную
function loadTelegramScript() {
    showDebugInfo('🔄 Пытаемся загрузить скрипт Telegram WebApp вручную...');
    
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-web-app.js?59';
    script.onload = function() {
        showDebugInfo('✅ Скрипт Telegram WebApp загружен вручную!');
        if (window.Telegram && window.Telegram.WebApp) {
            window.Telegram.WebApp.ready();
            window.Telegram.WebApp.expand();
        }
    };
    script.onerror = function() {
        showDebugInfo('❌ Не удалось загрузить скрипт Telegram WebApp');
    };
    document.head.appendChild(script);
}idden';
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
    
    // Ждем загрузки скрипта Telegram WebApp
    let attempts = 0;
    const maxAttempts = 20;
    
    const checkTelegramAPI = () => {
        attempts++;
        showDebugInfo(`🔍 Попытка ${attempts}/${maxAttempts}: window.Telegram = ${window.Telegram ? 'ЕСТЬ' : 'НЕТ'}`);
        
        if (window.Telegram && window.Telegram.WebApp) {
            showDebugInfo('✅ Telegram WebApp API доступен!');
            // Инициализируем WebApp
            window.Telegram.WebApp.ready();
            window.Telegram.WebApp.expand();
            return;
        }
        
        if (attempts < maxAttempts) {
            showDebugInfo('⏳ Ждем загрузки Telegram WebApp API...');
            setTimeout(checkTelegramAPI, 200);
        } else {
            showDebugInfo('❌ Telegram WebApp API не загрузился');
            // Пытаемся загрузить скрипт вручную
            loadTelegramScript();
        }
    };
    
    // Начинаем проверку
    checkTelegramAPI();
});

// Функция для загрузки скрипта Telegram WebApp вручную
function loadTelegramScript() {
    showDebugInfo('🔄 Пытаемся загрузить скрипт Telegram WebApp вручную...');
    
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-web-app.js?59';
    script.onload = function() {
        showDebugInfo('✅ Скрипт Telegram WebApp загружен вручную!');
        if (window.Telegram && window.Telegram.WebApp) {
            window.Telegram.WebApp.ready();
            window.Telegram.WebApp.expand();
        }
    };
    script.onerror = function() {
        showDebugInfo('❌ Не удалось загрузить скрипт Telegram WebApp');
    };
    document.head.appendChild(script);
}
