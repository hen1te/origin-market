// Обработчик авторизации для хостинга
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
