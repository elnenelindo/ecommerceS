document.addEventListener('DOMContentLoaded', function() {
    // Load the cart items from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productContainer = document.querySelector('.product-info-container');
    const totalElement = document.querySelector('.total p');
  
    let total = 0;
  
    cart.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
        <h1>${product.name}</h1>
        <p>x${product.quantity}</p>
        <p class="price">$${product.price * product.quantity}</p>
      `;
      productContainer.insertBefore(productDiv, totalElement);
  
      total += product.price * product.quantity;
    });
  
    totalElement.textContent = `Total: $${total}`;
  
    // PayPal Button Rendering
    paypal.Buttons({
      createOrder: function(data, actions) {
        // Set up the transaction
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: total.toFixed(2) // Total amount for the transaction
            }
          }]
        });
      },
      onApprove: function(data, actions) {
        // Capture the funds from the transaction
        return actions.order.capture().then(function(details) {
          // Show a success message to your buyer
          alert('Transaction completed by ' + details.payer.name.given_name);
          // Clear the cart and redirect to the homepage
          localStorage.removeItem('cart');
          window.location.href = 'index.html';
        });
      }
    }).render('#paypal-button-container'); // Display the PayPal button
  });
  