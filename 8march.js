'use strict';

document
	.getElementById('loginForm')
	.addEventListener('submit', function (event) {
		event.preventDefault();
		const username = document
			.getElementById('username')
			.value.trim()
			.toLocaleLowerCase()
			.replace(/\s+/g, '');
		const password = document.getElementById('password').value;
		let targetPage = '';
		const errorMessage = document.getElementById('error-message');
		const userNameInput = document.getElementById('username');
		const userPasswordInput = document.getElementById('password');

		switch (true) {
			case username === 'светлана' && password === '141141':
				targetPage = 'svetlana.html';
				break;
			case username === 'вера' && password === '36181':
				targetPage = 'vera.html';
				break;
			case username === 'екатерина' && password === '1212033':
				targetPage = 'ekaterina.html';
				break;
			default:
				userNameInput.classList.add('pulse');
				userPasswordInput.classList.add('pulse');
				setTimeout(() => {
					userNameInput.classList.remove('pulse');
					userPasswordInput.classList.remove('pulse');
				}, 500);
				return;
		}

		errorMessage.style.display = 'none';
		document.body.classList.add('fade-out');
		setTimeout(() => {
			window.location.href = targetPage;
		}, 500); // Время должно совпадать с длительностью анимации
	});
