// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Display popup for 3 seconds
function showPopup() {
  const popup = document.getElementById("popup-message");
  popup.style.display = "block";
  setTimeout(() => popup.style.display = "none", 3000);
}

// Update cart icon count
function updateCartIcon() {
  document.getElementById("cart-count").innerText = cart.length;
}

// Toggle modal
function toggleCartModal() {
  const modal = document.getElementById("cart-modal");
  modal.style.display = modal.style.display === "block" ? "none" : "block";
  renderCart();
}

// Add item to cart
function addToCart(name, price) {
  cart.push({ name, price });
  saveCart();
  updateCartIcon();
  showPopup();
}

// Render cart in modal
function renderCart() {
  const list = document.getElementById("modal-cart-items");
  const total = document.getElementById("modal-cart-total");

  list.innerHTML = "";
  let sum = 0;
  cart.forEach(item => {
    let li = document.createElement("li");
    li.innerText = `${item.name} - ₦${item.price.toFixed(2)}`;
    list.appendChild(li);
    sum += item.price;
  });
  total.innerText = sum.toFixed(2);
}

// Checkout function (simple placeholder)
function checkout() {
  alert("Thanks for your purchase!");
  cart = [];
  saveCart();
  updateCartIcon();
  renderCart();
  toggleCartModal();
}

// On load
window.onload = () => {
  updateCartIcon();
};

function checkout() {
  const confirmed = confirm("Are you sure you want to complete the purchase?");
  if (!confirmed) return;

  alert("Thanks for your purchase!");
  cart = [];
  saveCart();
  updateCartIcon();
  renderCart();
  toggleCartModal();
}