function renderCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cart");
  container.innerHTML = "<h2>Your Cart</h2>";

  if (cart.length === 0) {
    container.innerHTML += "<p>Cart is empty</p>";
    return;
  }

  let total = 0;
  cart.forEach(item => {
    container.innerHTML += `
      <div class="cart-item">
        <p><strong>${item.name}</strong> - ₹${item.price} x ${item.quantity}</p>
      </div>
    `;
    total += item.price * item.quantity;
  });

  container.innerHTML += `<h3>Total: ₹${total}</h3>
  <button onclick="goToPayment()" class="checkout-btn">Proceed to Checkout</button>`;

  
}
function goToPayment() {
  window.location.href = "\payment.html";
}
