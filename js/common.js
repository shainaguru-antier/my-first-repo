function renderHeader() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const itemCount = cartItems.length;

  document.getElementById("header").innerHTML = `
    <div class="header">
      <h1>MyShop</h1>
      <nav>
        <a href="index.html">Home</a>
        <a href="cart.html" class="cart-icon" data-count="${itemCount}">🛒</a>
        <a href="#" onclick="logout()">Logout</a>
      </nav>
    </div>
  `;
}


function renderFooter() {
  document.getElementById("footer").innerHTML = `
    <div class="footer">
      <p>© 2025 MyShop. All rights reserved.</p>
    </div>
  `;
}

function renderSidebar() {
  document.getElementById("sidebar").innerHTML = `
    <div class="sidebar">
      <h3>Categories</h3>
      <ul>
        <li>Clothing</li>
        <li>Footwear</li>
        <li>Accessories</li>
      </ul>
    </div>
  `;
}

function logout() {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("cart");
  window.location.href = "login.html";
}
