// Функция для кнопки входа
function showMessage() {
    alert('Кнопка пока не работает! Это просто демо-версия дизайна.');
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
