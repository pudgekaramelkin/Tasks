document.addEventListener('DOMContentLoaded', () => {
  fetchUsers();
});

const fetchUsers = () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => displayUsers(users))
    .catch((error) => console.error('Ошибка', error));
};

const displayUsers = (users) => {
  const usersList = document.getElementById('users');
  usersList.innerHTML = '';
  users.forEach((user) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = user.name;
    span.classList.add('link__text');
    li.classList.add('user', 'link');
    li.onclick = () => showUserDetails(user.id);
    li.appendChild(span);
    usersList.appendChild(li);
  });
};

const showUserDetails = (userId) => {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then((user) => {
      const detailsDiv = document.getElementById('details');
      detailsDiv.innerHTML = `
							<p><strong>Имя:</strong> ${user.name}</p>
							<p><strong>Почта:</strong> ${user.email}</p>
							<p><strong>Телефон:</strong> ${user.phone}</p>
							<p><strong>Вебсайт:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
							<p><strong>Адрес:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
							<p><strong>Компания:</strong> ${user.company.name}</p>
					`;
      document.getElementById('user-list').style.display = 'none';
      document.getElementById('user-details').style.display = 'block';
    })
    .catch((error) => console.error('Ошибка:', error));
};

const showUserList = () => {
  document.getElementById('user-details').style.display = 'none';
  document.getElementById('user-list').style.display = 'block';
};
