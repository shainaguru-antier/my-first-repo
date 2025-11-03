let products = [];

async function loadProducts() {
  const res = await fetch("https://fakestoreapi.com/products?limit=20");
  products = await res.json();
  renderProducts();
}

function renderProducts() {
  const container = document.getElementById("product-list");

  products.forEach(p => {
    container.innerHTML += `
      <div class="product">
        <img src="${p.image}" alt="${p.title}"
             style="width: 100%; height: 200px; object-fit: contain; background: #fff; padding: 10px; border-radius: 5px;">
        <h3>${p.title}</h3>
        <p>Price: ₹${Math.round(p.price * 80)}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(id) {
  const item = products.find(p => p.id === id);
  if (!item) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find(p => p.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: item.id,
      name: item.title,
      price: Math.round(item.price * 80),
      quantity: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
  if (typeof renderHeader === "function") renderHeader();
}

// Load products when the page loads
loadProducts();
