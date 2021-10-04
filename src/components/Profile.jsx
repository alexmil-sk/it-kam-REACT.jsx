import React from 'react';

function Profile() {
	return (
		<div className="app-main">
			<img src="https://www.wallpaperup.com/uploads/wallpapers/2015/07/03/741493/d4647b2dadbae115c97fa3e5dca62f22-700.jpg" height="200" width="100%" alt="city" />
			<h1>Карточка пользователя</h1>
			<div className="user-card">
				<img src="https://cs13.pikabu.ru/avatars/1873/x1873132-1972677953.png" height="150" alt="logoUser" />
				<p>Описание пользователя</p>
			</div>
			<div className="user-post">
				<h3>My Posts</h3>
				<div>
					<p>Текст нового сообщения пользователя</p>
				</div>
				<div>
					<p>Сообщение 1</p>
				</div>
				<div>
					<p>Сообщение 2</p>
				</div>
			</div>
		</div>
	);
}

export default Profile;