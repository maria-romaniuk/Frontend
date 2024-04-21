//Предположим вы получили объект с данными (создайте переменную, в которой будет храниться объект) - spaceship, 
//в котором находятся характеристики космического корабля, такие как: name manufacturer crew maxSpeed 
//Необходимо отобразить их на странице. Стилизация на ваше усмотрение

//Дополнительная задача: Создайте кнопку "Hide Manufacturer", которая будет скрывать manufacturer корабля на странице

const spaceship = {
    name: 'Falcon-9',
    manufacture: 'SpaceX',
    crew: ['Michael Hopkins', 'Victor Glover', 'Shannon Walker'],
    maxSpeed: 3.05,
}
const name = document.getElementById('name').textContent = spaceship.name;
const manufacture = document.getElementById('manufacture').textContent = spaceship.manufacture;
const crew = document.getElementById('crew').textContent = spaceship.crew;
const speed = document.getElementById('speed');
// checking is it string or number
speed.textContent = typeof spaceship.maxSpeed === 'number' ? spaceship.maxSpeed.toString() : spaceship.maxSpeed;

const toggleVisibility = () => {
    const manufacture = document.getElementById('manufacture');
    manufacture.style.visibility = 
        (manufacture.style.visibility === 'hidden') ? 'visible' : 'hidden';
    
    const hideBtn = document.getElementById('hideBtn');
    hideBtn.textContent = (manufacture.style.visibility === 'hidden') ? 'Show corporate' : 'Hide corporate';
};

const hideBtn = document.getElementById('hideBtn');
hideBtn.addEventListener('click', toggleVisibility);