//-------Task1
//Есть массив чисел - 
//нужно выбрать все числа больше 5 (использовать функцию высшего порядка)

const numbersArray = [1, 3, 6, 8, 12, 15, 2, 7];
const newArray = numbersArray.filter(function (e) {
    return e > 5;
});
const newArray2 = numbersArray.filter(e => e > 5);
const newArray3 = numbersArray.filter(item => {
    return item > 5;
})
console.log(newArray3);


//------Task3
// Есть массив продуктов: каждый продукт - это объект с полями:
// имя, цена, производитель 
//значения можно задать на свое усмотрение написать функцию фильтрации продуктов цена выше 5000


const products = [
    {
        name: "Iphone 12",
        manufacture: 'Apple',
        price: 300,
    },
    {
        name: "Iphone 14",
        manufacture: 'Apple',
        price: 600,
    },
    {
        name: "Iphone 14 Pro",
        manufacture: 'Apple',
        price: 900,
    },
    {
        name: "Iphone 15",
        manufacture: 'Apple',
        price: 1000,
    },
    {
        name: "Iphone 15 Pro",
        manufacture: 'Apple',
        price: 1300,
    }
]

// const filteredArray = products.filter(product => product.price > 900);
// console.log(filteredArray);

//-----Task3
//* Сверстать страничку с продуктами из предыдущей задачи продукты отображаются 
//один за другим - верстка на ваше усмотрение добавить инпут куда пользователь 
//может ввести цену - после ввода продукты фильтруются по цене меньше или равно
// указанной пользователем

function showProducts(productsArray) {
    const productsBlock = document.getElementById('products');
    productsBlock.innerHTML = '';

    productsArray.forEach(product => {
        const productHtml = `
            <div class="product">
                <h3>${product.name}</h3>
                <p>${product.manufacture}</p>
                <p>Price: ${product.price}</p>
            </div>
        `;
        productsBlock.innerHTML += productHtml;
    });
};

showProducts(products);

const filterBtn = document.getElementById('filter');
filterBtn.addEventListener('click', () => {
    const filterInput = document.getElementById('filterInput');
    const maxPrice = parseFloat(filterInput.value);
    const filteredProducts = products.filter(product => product.price <= maxPrice);
    showProducts(filteredProducts);
});

