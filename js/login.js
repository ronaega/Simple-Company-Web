
/*===== Login =====*/
const container = document.getElementById('container-1');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("onactive");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("onactive");
});