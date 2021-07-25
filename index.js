
let products = document.querySelector('.products');
let innerHTML = '';


for (let i = 0; i < product_name.length; i++) {
    innerHTML = `
        <div class="card">
            <div class="images">
            <h2 class="product-name">${product_name[i].name}</h2>
                <img class="large-photo" src="${product_name[i].img_url1}" alt="${product_name[i].name}">
                <div class="small-photo">
                    <img class="product_sm" src="${product_name[i].img_url2}" alt="${product_name[i].name}">
                    <img class="product_sm" src="${product_name[i].img_url3}" alt="${product_name[i].name}">
                    <img class="product_sm" src="${product_name[i].img_url4}" alt="${product_name[i].name}">
                </div>
            </div>
            <div class="text">
                <h3 class="price">${product_name[i].price}</h3>
                <h4 class="used">${product_name[i].used}</h4>
                <h4 class="description">${product_name[i].description}</h4> 
            </div>
            <div class="email">
                <h4><a href="mailto:jogupersonnel@gmail.com">email me about this product</a></h4>
            </div>
        </div>
        
    `;
    products.innerHTML = products.innerHTML + innerHTML;
}

