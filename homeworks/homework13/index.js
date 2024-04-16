
const firstNumInput = document.getElementById('firstNum');
const secondNumInput = document.getElementById('secondNum');

let sign = null;

// подписка на событие кнопок цифр
const numButtons = document.getElementsByClassName('num');
for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener('click', (e) => {

        if (!sign) {
            firstNumInput.value += e.target.innerText;
        } else {
            secondNumInput.value += e.target.innerText;
        }
    });
}

// подписка на событие математических знаков
const signButtons = document.getElementsByClassName('sign');
for (let i = 0; i < signButtons.length; i++) {
    signButtons[i].addEventListener('click', (e) => {
        sign = e.target.innerText;
    });
}

const result = document.getElementById('result');


// подписка события кнопки равно
const resBtn = document.getElementById('res');
resBtn.addEventListener('click', () => {
    const firstVal = parseFloat(firstNumInput.value);
    const secondVal = parseFloat(secondNumInput.value);
    const res = calculate(firstVal, secondVal, sign);
    reset();
    result.innerText = res;
    console.log(res);
});


//parseFloat: Преобразует строку в число с плавающей точкой (число с десятичной точкой).
//parseInt: Преобразует строку в целое число.

const resetBtn = document.getElementById('ac');
resetBtn.addEventListener('click', () =>{
    reset();
});

function reset(){
    firstNumInput.value = '';
    secondNumInput.value = '';
    sign = null;
}
// Обработчик события для точки
const dotBtn = document.getElementById('dot');
dotBtn.addEventListener('click', () =>{
    if (!sign && !firstNumInput.value.includes('.')) { //проверка, что значение введенного числа не содержит точки
        firstNumInput.value += '.';
    } else if (sign && !secondNumInput.value.includes('.')) {
        secondNumInput.value += '.';
    }
})


// 
const calculate = (a, b, sign) => {
    switch (sign) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            break;
    }
}



// const res = calculate(1, 2, '+');
// console.log(res);


