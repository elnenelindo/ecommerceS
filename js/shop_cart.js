// Function to load cart items
function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.querySelector('.container');
    const totalAmount = document.querySelector('.total-amount');
    const itemsCount = document.querySelector('.items');
  
    cartContainer.innerHTML = '';
  
    if (cart.length === 0) {
      cartContainer.innerHTML = '<p>No hay productos en el carrito.</p>';
      totalAmount.textContent = '$0';
      itemsCount.textContent = '0 productos';
      return;
    }
  
    let total = 0;
    let itemCount = 0;
  
    cart.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('cart-items');
      productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <div class="about">
          <h1 class="title">${product.name}</h1>
          <h3 class="subtitle">${product.subtitle}</h3>
          <div class="colour" id="${product.color}"></div>
        </div>
        <div class="counter">
          <div class="btn" onclick="changeQuantity(${product.id}, 1)">+</div>
          <div class="count">${product.quantity}</div>
          <div class="btn" onclick="changeQuantity(${product.id}, -1)">-</div>
        </div>
        <div class="prices">
          <div class="amount"><span>$</span>${product.price * product.quantity}</div>
          <div class="remove"><button onclick="removeFromCart(${product.id})">Eliminar</button></div>
        </div>
      `;
      cartContainer.appendChild(productDiv);
  
      total += product.price * product.quantity;
      itemCount += product.quantity;
    });
  
    totalAmount.textContent = `$${total}`;
    itemsCount.textContent = `${itemCount} productos`;
  }
  
  // Function to change product quantity
  function changeQuantity(productId, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = cart.find(item => item.id === productId);
  
    if (product) {
      product.quantity += change;
  
      if (product.quantity <= 0) {
        cart = cart.filter(item => item.id !== productId);
      }
  
      localStorage.setItem('cart', JSON.stringify(cart));
      loadCart();
    }
  }
  
  // Function to remove product from cart
  function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
  }
  
  // Function to clear the cart
  function clearCart() {
    localStorage.removeItem('cart');
    loadCart();
  }
  
  // Event listener for "Quitar todo" button
  document.querySelector('.action').addEventListener('click', clearCart);
  
  // Load cart on page load
  document.addEventListener('DOMContentLoaded', loadCart);
  