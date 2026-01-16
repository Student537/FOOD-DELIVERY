let cart = [];
let total = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  total += price;

  document.getElementById("cartCount").innerText = cart.length;
  document.getElementById("total").innerText = total;

  renderCart();
}

function renderCart() {
  let cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";

  cart.forEach((c, index) => {
    let li = document.createElement("li");
    li.innerHTML = `${c.item} - ₹${c.price}
      <button onclick="removeItem(${index})">X</button>`;
    cartItems.appendChild(li);
  });
}

function removeItem(index) {
  total -= cart[index].price;
  cart.splice(index,1);

  document.getElementById("cartCount").innerText = cart.length;
  document.getElementById("total").innerText = total;
  renderCart();
}

function placeOrder(e) {
  e.preventDefault();
  alert("Order Placed Successfully!");
  cart = [];
  total = 0;
  renderCart();
  document.getElementById("cartCount").innerText = 0;
  document.getElementById("total").innerText = 0;
}

function login(e) {
  e.preventDefault();
  alert("Login Successful");
}
