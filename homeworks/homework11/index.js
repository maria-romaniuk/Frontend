// --------Task1
//Есть массив строк. Вывести каждую строку в div и вывести в документ
//---------Task2
//На странице есть div с текстом и кнопка ok , сделать так , чтобы кнопка красила текст в красный цвет при нажатии


const container = document.getElementById('container');


const textArray = ['The reduce() method executes a reducer function for array element. ',
    'The reduce() method returns a single value: the function`s accumulated result.',
    'The reduce() method does not execute the function for empty array elements.',
    'The reduce() method does not change the original array.'];

function createBlockArray() {
    let innerBlock = document.createElement('div');
    innerBlock.classList.add('innerblock');

    for (let i = 0; i < textArray.length; i++) {
        let p = document.createElement('p');
        p.innerText = textArray[i];
        innerBlock.appendChild(p);
    }
    return innerBlock;
}
function textRed() {
    const btn1 = document.createElement('button');
    btn1.innerText = "Make text Red";
    btn1.classList.add('btn');
    btn1.addEventListener('click', () => {
        const paragraphs = innerBlock.querySelectorAll('p');
        for (let i = 0; i < paragraphs.length; i++) {
            // paragraphs[i].classList.add('red'); // style has bigger priority than class. do not chacged on red after colored button.
            paragraphs[i].style.color = 'red';
        };
    });
    return btn1;
}

function textColored() {
    const btn = document.createElement('button');
    btn.innerText = "Change color";
    btn.classList.add('btn');
    btn.addEventListener('click', () => {
        const paragraphs = innerBlock.querySelectorAll('p');
        for (let i = 0; i < paragraphs.length; i++) {
        
            const randomColor = getRandomColor();
            paragraphs[i].style.color = randomColor;
        };
    });
    return btn;

}

const innerBlock = createBlockArray();
innerBlock.appendChild(textRed());
innerBlock.appendChild(textColored());
container.appendChild(innerBlock);

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

//--------Task3
//Сделать кнопку, которая добавляет карточки на странице в каждой карточке есть заголовок, 
//текст и картинка (url картинки можо использовать одинаковый) информация на карточках одна и таже.

function createBlock() {
    const div = document.createElement('div');
    div.classList.add('card');
    const title = document.createElement('h3');
    title.textContent = 'How to train yout dragon'
    const text = document.createElement('p');
    text.textContent = 'new method in animation world';
    const img = document.createElement('img');
    img.src = 'https://i.kym-cdn.com/entries/icons/original/000/047/760/dt.jpg';

    div.appendChild(title);
    div.appendChild(text);
    div.appendChild(img);
    
    return div;
}
let productsBlock = document.createElement('div');
let products = document.createElement('div');
products.classList.add('cards');
container.appendChild(productsBlock);

const productsTitle = document.createElement('h2');
productsTitle.classList.add('pruductstitle');
productsTitle.textContent = "Press the button"

const btnCloneCard = document.createElement('button');

productsBlock.classList.add('innerblock');
btnCloneCard.classList.add('btn');
btnCloneCard.innerText="create a new block";

productsBlock.appendChild(productsTitle);
productsBlock.appendChild(btnCloneCard);
productsBlock.appendChild(products);

btnCloneCard.addEventListener('click', function() {
    const newCard = createBlock();
    products.appendChild(newCard); 
});
