const userNameInput = document.querySelector('#user-name');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');

submitButton.addEventListener('click', function (event) {
  event.preventDefault();

  // create user object from submission
  const user = {
    userName: userNameInput.value.trim(),
    title: titleInput.value.trim(),
    content: contentInput.value.trim(),
  };

  // set new submission to local storage
  localStorage.setItem('user', JSON.stringify(user));

const button = document.createElement('button');

// Set button text
button.textContent = 'Click Me';

// Set button class
button.classList.add('btn');
});