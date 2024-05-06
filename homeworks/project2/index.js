const apiUrl = "https://dummyjson.com/";

const productsBlock = document.getElementById('products');
const categoryBlock = document.getElementById('categoryList');


function fetchAllProducts() {
    console.log('https://dummyjson.com/products');
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data =>{
            displayProductList(data);
            displayCategoryList(data);
        });

}

fetchAllProducts();

function displayProductList(data) {

    data.products.forEach(product => {

    const productBlock = document.createElement('div');
    productBlock.classList.add('product');
    productBlock.innerHTML = `
        <div class="img"><img src="${product.thumbnail}" alt="Product Thumbnail"></div>
        <div class="title">${product.title}</div>
        <div class="brand">${product.brand}</div>
        <div class="description">${product.description}</div>
        <div class="price">${product.price}</div>
        <span class="discount">${product.discountPercentage}% off</span>
    `;
    productsBlock.appendChild(productBlock);});

}

function displayCategoryList(data){

    data.products.forEach(categoryItem => {

        const categoryLink = document.createElement('a');
        const categoryLinkName = categoryItem.category;
        categoryLink.innerText = categoryLinkName;
        categoryLink.href = `https://dummyjson.com/products/category/${categoryLinkName}`;
        categoryBlock.appendChild(categoryLink);
    });
     
}