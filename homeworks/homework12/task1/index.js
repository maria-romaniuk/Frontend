//-------Task1
//создать форму состоящую из логин, пароль и повторите пароль и кнопки отправить при нажатии на кнопку отправить производится праверка - если пароль и повторите пароль совпадают - тогда пользователю выводится сообщение:
// данные отправлены иначе выводится сообщение пароль и повторите пароль не совпадают


const modal = document.getElementById('modal');
const modalBtn = document.getElementById('modalbtn');
const modalTitle = document.querySelector('.modaltitle');


const form = document.getElementById('registrationForm');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const password = form.elements['password'].value;
    const confirmPassword = form.elements['password-confirm'].value;

    if(password.trim() === ''){ //removes any leading and trailing whitespace (spaces, tabs, newlines) from a string
        showModal("Error! fill the form");
    }
    else if (password === confirmPassword) {
        showModal("Your account created successfully");
    } else {
        showModal("Your passwords not confirmed! Please try again!");
    }
    
});


modalBtn.addEventListener('click', function () {
    hideModal();
});

function showModal( message) {
    modalTitle.textContent = message;
    modal.classList.add('active');
}

function hideModal() {
    modal.classList.remove('active');
}

