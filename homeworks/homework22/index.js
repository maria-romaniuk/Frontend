// Нужно создать кнопку "Get Cat Fact", при клике на которую, будет выполняться GET запрос(используйте fetch). В ответе на запрос будет приходить случайный факт о котах
// url: https://catfact.ninja/fact
// После того как вы получите успешный ответ, разместите случайный факт о котах у себя на странице
// Если запрос завершиться ошибкой, её нужно разместить на странице и выделить красным цветом
// Каждый раз, когда происходит клик на кнопку, должен выполняться новый запрос и приходить новый факт о котах
// Стилизуйте на ваше усмотрение


let url = 'https://catfact.ninja/fact';
let imgUrl= 'https://api.thecatapi.com/v1/images/search';

const factBtn = document.getElementById('factBtn').addEventListener('click', factGenerator);
const factBtn1 = document.getElementById('factBtn').addEventListener('click', imgGenerator);

function factGenerator () {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch cat fact');
            }
            return response.json();
        }).then(data => {
            console.log(data.fact);
            displayFact(data.fact);
        }).catch(error => {
            displayError(error.message);
        });
}

function displayFact(fact) {
    const factBlock = document.getElementById('fact-block');
    factBlock.innerText = fact;
}

function displayError(error) {
    const factBlock = document.getElementById('fact-block');
    factBlock.classList.add('error');
    factBlock.innerText = error;
}

function imgGenerator(){
    fetch(imgUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch cat image');
            }
            return response.json();
        }).then(data => {
            displayFactImg(data[0].url);
        }).catch(error => {
            displayError(error.message);
        });
}
function displayFactImg(img) {
    const factBlock = document.getElementById('fact-block');
    factBlock.innerHTML = `<img id="fact-img" src="${img}" alt="">`;
}