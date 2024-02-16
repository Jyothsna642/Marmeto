document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");
  const bottomContainer = document.getElementById("bottomContainer");

  // Fetch data from the API
  fetch("https://products-api-2ttf.onrender.com/api/products")
    .then((response) => response.json())
    .then((data) => {
      // Iterate through the products and create HTML elements
      data.forEach((product, index) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const image = document.createElement("img");
        image.id = "image";
        image.src = product.image;
        image.alt = product.title;

        const title = document.createElement("h3");
        title.textContent = product.title;

        productCard.appendChild(image);
        productCard.appendChild(title);

        // Distribute products into containers based on index
        if (index === 0) {
          productList.appendChild(productCard);
        } else {
          bottomContainer.appendChild(productCard);
        }
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});
