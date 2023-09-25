// Function to fetch data from the FakeStore API
const fetchProducts = async () => {
    try {
        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json()
        
        // Call a function to display the products on the page
      displayProducts(data);

    } catch(error) {
      console.error("Error fetching data:", error);
    };
}

// let name = "John Doe"
// let age = 24

// console.log(`My name is ${name} and I'm ${age} years old`)

// Function to display products on the page
function displayProducts(products) {
  const productsContainer = document.getElementById("products");
  productsContainer.innerHTML = ""; // Clear any previous content

  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.title}" width="150">
                    <h2>${product.title}</h2>
                    <p>${product.description}</p>
                    <p>Price: $${product.price}</p>
                `;
    productsContainer.appendChild(productElement);
  });
}

// Call the fetchProducts function when the page loads
window.addEventListener("load", fetchProducts);
