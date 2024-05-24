// Function to add product to cart
function addToCart(product) {
    // Get the existing cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if the product is already in the cart
    const existingProduct = cart.find(item => item.id === product.id);
    
    if (existingProduct) {
      // If product exists, increase the quantity
      existingProduct.quantity += 1;
    } else {
      // If product doesn't exist, add it to the cart
      product.quantity = 1;
      cart.push(product);
    }
    
    // Save the cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Producto añadido al carrito');
  }
  
  // Event listener for "Comprar ahora" button
  document.querySelector('.btn').addEventListener('click', () => {
    const product = {
      id: 1,
      name: 'ADIDAS FORUM HIGH WHITE CREAM',
      price: 199.999,
      image: '/assets/highwhiteforum.jpeg'
    };
    
    addToCart(product);
  });
  
  // Function to display the cart view
  function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const bagView = document.querySelector('.details-bag-view');
    
    // Clear the existing cart view
    bagView.innerHTML = '';
  
    if (cart.length === 0) {
      bagView.innerHTML = '<p>No hay productos en el carrito.</p>';
      return;
    }
  
    // Display each product in the cart
    cart.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('details-bag-view-product');
      productDiv.innerHTML = `
        <p class="bag-view-product">${product.name}</p>
        <p>${product.price} COP x${product.quantity} <span>${product.price * product.quantity} COP</span></p>
      `;
      bagView.appendChild(productDiv);
    });
  
    // Add a button to proceed to checkout
    const checkoutButton = document.createElement('button');
    checkoutButton.classList.add('bag-view-continue');
    checkoutButton.textContent = 'Terminar Pago';
    checkoutButton.addEventListener('click', () => {
      window.location.href = 'checkout.html';
    });
    
    bagView.appendChild(checkoutButton);
  }
  
  // Display the cart when the page loads
  document.addEventListener('DOMContentLoaded', displayCart);
  