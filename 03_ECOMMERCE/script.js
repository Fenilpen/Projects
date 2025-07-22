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
    const Removee = document.getElementsByClassName('removeBtn')


    products.forEach((product)=>{
        const productDiv = document.createElement('div')
        productDiv.classList.add('product')
        productDiv.innerHTML = `<span> ${product.name} - ${product.price.toFixed(2)}</span>
        <button data-id = "${product.id}"> Add to cart </button>
        `;
        productList.appendChild(productDiv)
        })

    productList.addEventListener('click',(e)=>{
        if(e.target.tagName === "BUTTON"){
           const productId = parseInt(e.target.getAttribute('data-id'))
           const product = products.find((p) => p.id === productId)
           addToCart(product)
        }
    })
    
    function addToCart(product){
        cart.push(product)
        renderCart()
    }

    function renderCart (){
        cartItems.innerHTML = "";
        let totalPrice = 0

        if(cart.length > 0){
            emptyCartMessage.classList.add("hidden")
            cartTotalMessage.classList.remove('hidden')
            cart.forEach((item,index)=>{
                totalPrice += item.price
                const cartItem = document.createElement('div')
                cartItem.innerHTML = `${item.name} -$ ${item.price.toFixed(2)}`
                let btn = document.createElement('button')
                btn.classList.add('removeBtn')
                btn.textContent = "Remove"
                cartItems.appendChild(cartItem)
                cartItem.appendChild(btn)
                totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`
            })
        }else {
            emptyCartMessage.classList.remove('hidden')
        }
    }

    checkoutBtn.addEventListener("click",()=>{
        if(!cart.length){
            alert("Please add items to checkout")
        }
        else {
        cart.length = 0
        totalPriceDisplay.textContent = `$0.00`
        alert("Check out successfully")
        renderCart() 
        }
    })

        cartItems.addEventListener("click", (e) => {
    if (e.target.classList.contains("removeBtn")) {
        const itemDiv = e.target.parentElement;
        const itemName = itemDiv.firstChild.textContent.split(" -$")[0].trim();
        // Remove from cart array
        const index = cart.findIndex(item => item.name === itemName);
        if (index > -1) {
            cart.splice(index, 1);
            renderCart();
        }
    }
});
    
})
