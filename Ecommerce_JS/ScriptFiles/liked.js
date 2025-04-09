const likedList = document.getElementById("likedList");
const likedIds = JSON.parse(localStorage.getItem("likedProducts")) || [];

if (likedIds.length === 0) {
  likedList.innerHTML = "<p style='text-align:center;'>No liked products found.</p>";
} else {
  fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(products => {
      const likedProducts = products.filter(p => likedIds.includes(p.id));

      likedProducts.forEach(product => {
        const item = document.createElement("div");
        item.className = "product";
        item.innerHTML = `
          <img src="${product.image}" alt="${product.title}" />
          <h3>${product.title}</h3>
          <p>$${product.price}</p>
          <button onclick="viewDetails(${product.id})">View Details</button>
          <button class="remove-btn" onclick="removeLiked(${product.id})">Remove</button>
        `;
        likedList.appendChild(item);
      });
    })
    .catch(() => {
      likedList.innerHTML = "<p style='text-align:center;'>Failed to load liked items.</p>";
    });
}

function viewDetails(id) {
  localStorage.setItem("selectedProductId", id);
  window.location.href = "product.html";
}

function removeLiked(id) {
  let liked = JSON.parse(localStorage.getItem("likedProducts")) || [];
  liked = liked.filter(pid => pid !== id);
  localStorage.setItem("likedProducts", JSON.stringify(liked));
  location.reload();
}

document.getElementById("toggleTheme").addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  document.getElementById("toggleTheme").textContent = next === "dark" ? "☀️" : "🌙";
});
