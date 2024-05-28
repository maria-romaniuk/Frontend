let array = [1, 2, 3, 4, 5];
let sum = array.reduce((a, b) => a + b, 0);

// console.log(sum);
//если 0 вконце, то начинается с 0, если поставить 7, то плюсовать будет с 7 + 1+2+3+4+5


function opposite(number) {
  return -number;
}
// console.log(opposite(1));   // Output: -1
// console.log(opposite(14));  // Output: -14
// console.log(opposite(-34)); // Output: 34

// минус занчит, что значение меняет - на +, а если + на -



//Nathan loves cycling.
//Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
//You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
function litres(time) {
  return Math.floor(time * 0.5);
}

// console.log(litres(3));    // Output: 1
// console.log(litres(6.7));  // Output: 3
// console.log(litres(11.8)); // Output: 5


//Your function takes two arguments:
//current father's age (years)
//current age of his son (years)
//Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
// The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

function twiceAsOld(dadYearsOld, sonYearsOld) {
  // Find the age difference between the father and the son
  const ageDifference = Math.abs(dadYearsOld - (2 * sonYearsOld));

  // Return the age difference
  return ageDifference;
}
//const ageDifference = Math.abs(dadYearsOld - 2 * sonYearsOld);: 
//Статический Math.abs()метод возвращает абсолютное значение числа.

//Абсолютное значение x. Если x отрицательно (включая -0), возвращается -x. 
//В противном случае возвращается x. Таким образом, результатом всегда является положительное число или 0.


let person = { name: "Lydia" };
const members = [person];
person = null;
// console.log(members);
// В этой строке переменная person теперь указывает на null. Это не изменяет сам объект, на который ранее указывала переменная person, а лишь меняет саму переменную person. Теперь переменная person не ссылается на объект { name: "Lydia" }. Здесь массив members все еще содержит ссылку на оригинальный объект { name: "Lydia" }, потому что когда мы добавили person в members, мы добавили ссылку на объект, а не значение переменной person. Поэтому массив members выглядит так:
// [ { name: "Lydia" } ]


const persons = {
  name: "Lydia",
  age: 21
};

for (const item in person) { //iterates keys of an object
  // console.log(item);
} //name,age


for (const item in persons) { //iterates keys of an object
  // console.log(`${item}: ${persons[item]}`);
} //name: Lydia  age: 21


const a = {};
const b = { key: "b" };
const c = { key: "c" };
//Any object key should be a string ; if an object doesn’t have the method
//toString , JS will convert the object to [object Object] 
a[b] = 123;
a[c] = 456;
// console.log(a[b]);

//Когда вы используете объект как ключ в объекте JavaScript, он автоматически преобразуется в строку. По умолчанию, если объект не имеет метода toString, он преобразуется в строку [object Object].

// Таким образом:

// a[b] = 123 эквивалентно a["[object Object]"] = 123.
// a[c] = 456 эквивалентно a["[object Object]"] = 456.
// Так как ключи объекта a преобразуются к одной и той же строке ("[object Object]"), вторая операция перезаписывает значение первой. В итоге объект a будет выглядеть так:

// {
//   "[object Object]": 456
// }


function getInfo(member, year) {
  member.name = "Lydia";
  year = "1998";
  return [member, year]
}

const person2 = { name: "Sarah" };
const birthYear = "1997";

getInfo(person2, birthYear);
// console.log(getInfo(person2, birthYear));
// console.log(person2, birthYear);








function greeting() {
  throw "Hello world!";
}

function sayHi() {
  try {
    const data = greeting();
    // console.log("It worked!", data);
  } catch (e) {
    // console.log("Oh no an error:", e);
  }
}

// sayHi();
// Объяснение кода:
// Функция greeting():

// В этой функции происходит оператор throw, который генерирует ошибку с сообщением "Hello world!".
// Это приводит к немедленному прерыванию выполнения функции и выбросу ошибки.
// Функция sayHi():

// Внутри блока try происходит вызов функции greeting().
// Поскольку в функции greeting() выбрасывается исключение, выполнение блока try прекращается, и управление передается блоку catch.
// Блок catch:

// В блоке catch попадаем, если в блоке try произошло исключение.
// Переменная e содержит информацию об ошибке, которая была выброшена.
// Здесь выводится сообщение "Oh no an error:" вместе с содержимым переменной e, которая в нашем случае будет строкой "Hello world!".


// const reduceArray = [1, 2, 3, 4].reduce((x, y) => console.log(x, y));

// Метод reduce() попытается использовать первый элемент массива [1, 2, 3, 4] как начальное значение аккумулятора.
// Он начнет вызывать функцию обратного вызова для каждого элемента массива, начиная со второго элемента, передавая в качестве x результат предыдущего вызова функции обратного вызова и в качестве y текущий элемент массива.
// Поскольку функция обратного вызова не возвращает значения, каждый вызов console.log(x, y) приведет к выводу undefined undefined.
// Метод reduce() вернет undefined, поскольку не было возвращено никакого значения из функции обратного вызова.

const reduceArray2 = [1, 2, 3, 4].reduce((acc, curr) => {
  // console.log(acc, curr);
  return acc + curr; // возвращаем результат сложения аккумулятора и текущего элемента
}, 0); // начальное значение аккумулятора равно 0

//   console.log(reduceArray2); // выводим результат суммирования элементов массива

// В функции обратного вызова acc представляет собой текущее значение аккумулятора, а curr представляет текущий элемент массива.
// Внутри функции обратного вызова мы выводим значения аккумулятора и текущего элемента.
// Затем мы возвращаем результат промежуточного вычисления, который является суммой аккумулятора и текущего элемента.
// Начальное значение аккумулятора равно 0 (второй аргумент метода reduce()).
// Результат вызова метода reduce() будет сохранен в переменной reduceArray.
// После выполнения этого кода переменная reduceArray будет содержать сумму всех элементов массива [1, 2, 3, 4]

function addToList(item, list) {
  return list.push(item);
}

const result3 = addToList("apple", ["banana"]);
//   console.log(result3);
// Метод push() изменяет исходный массив и возвращает новую длину массива после добавления элемента.
// Если вы хотите, чтобы функция addToList возвращала измененный массив, вам нужно вернуть list после вызова push().

function addToList(item, list) {
  list.push(item); // Добавляем элемент в массив
  return list; // Возвращаем измененный массив
}

const result4 = addToList("apple", ["banana"]);
// console.log(result4);



const list = [1 + 2, 1 * 2, 1 / 2]
// console.log(list)



function sayHi(name) {
  return `Hi there, ${name}`
}

//   console.log(sayHi())


// console.log("I want pizza"[0]);


let num = 10;

const increaseNumber = num => num++; // развернутый ответ - num => return num++; в таком случае сачала возвращаем, потом увеличиваем на 1
// const increaseNumber = num => { num++; return num; } // так будет 11. сначала увеличиваем, потом возвращаем
const increasePassedNumber = number => number++;

const num1 = increaseNumber(num);
const num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);