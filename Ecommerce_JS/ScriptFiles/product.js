const productId = localStorage.getItem("selectedProductId");

    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(res => res.json())
      .then(product => {
        document.getElementById("productDetail").innerHTML = `
          <img src="${product.image}" alt="${product.title}" style="max-width: 150px;" />
          <h2>${product.title}</h2>
          <p><strong>Category:</strong> ${product.category}</p>
          <p><strong>Price:</strong> $${product.price}</p>
          <p>${product.description}</p>
        `;
      })
      .catch(err => {
        console.error("Error loading product:", err);
        document.getElementById("productDetail").innerHTML = "<p>Product not found.</p>";
      });

    // Optional: Theme toggle
    document.getElementById("toggleTheme").addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
    });