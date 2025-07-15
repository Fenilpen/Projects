document.addEventListener('DOMContentLoaded',()=>{
    const products = [
        {id: 1,name: 'product 1', price:29.99},
        {id: 2,name: 'product 2', price:19.99},
        {id: 3,name: 'product 3', price:59.99},
    ];

    const cart = []
    const productList = document.getElementById('product-list');
    const cartItems = document.getElementById('cart-items');
    const emptyCartMessage = document.getElementById('empty-cart');
    const cartTotalMessage = document.getElementById('cart-total')
    const totalPriceDisplay = document.getElementById('total-price')
    const checkoutBtn = document.getElementById('checkout-btn')

    products.forEach((product)=>{
        const productDiv = document.createElement('div')
        productDiv.classList.add('product')
        productDiv.innerHTML = `<span> ${product.name} - ${product.price.toFixed(2)}</span>
        <button data-id = "${product.id}"> Add to cart </button>
        `;
        })
})
