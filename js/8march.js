'use strict';

const users = {
	светлана: { password: '141141', page: 'svetlana.html' },
	вера: { password: '36181', page: 'vera.html' },
	екатерина: { password: '1212033', page: 'ekaterina.html' },
};

// Обработчик формы входа
document.getElementById('loginForm')?.addEventListener('submit', e => {
	e.preventDefault();

	const username = document
		.getElementById('username')
		.value.trim()
		.toLowerCase();
	const password = document.getElementById('password').value;
	const user = users[username];

	if (user?.password === password) {
		document.body.classList.add('fade-out');
		setTimeout(() => (window.location.href = user.page), 500);
	} else {
		['username', 'password'].forEach(id => {
			const element = document.getElementById(id);
			element.classList.add('pulse');
			setTimeout(() => element.classList.remove('pulse'), 500);
		});
	}
});

// Обработчик кнопки OK на страницах пользователей
window.addEventListener('DOMContentLoaded', () => {
	const continueBtn = document.getElementById('continue-btn');
	const welcomeMessage = document.getElementById('welcome-message');
	const postcard = document.getElementById('postcard');

	if (continueBtn && welcomeMessage && postcard) {
		console.log('Элементы найдены'); // Для отладки
		continueBtn.addEventListener('click', () => {
			console.log('Кнопка нажата'); // Для отладки
			welcomeMessage.classList.remove('active');
			setTimeout(() => {
				postcard.classList.add('active');
			}, 500);
		});
	} else {
		console.log('Не найдены элементы:', {
			continueBtn: !!continueBtn,
			welcomeMessage: !!welcomeMessage,
			postcard: !!postcard,
		});
	}
});
