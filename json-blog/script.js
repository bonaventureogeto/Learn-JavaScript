// Function to fetch data from the FakeStore API
const fetchBlogs = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    // Call a function to display the Blogs on the page
    displayBlogs(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Function to display Blogs on the page
function displayBlogs(blogs) {
  const blogsContainer = document.getElementById("blogs");
  blogsContainer.innerHTML = ""; // Clear any previous content

  blogs.forEach((blog) => {
    const blogElement = document.createElement("div");
    blogElement.innerHTML = `
                    <h2>${blog.title}</h2>
                    <p>${blog.body}</p>
                `;
    blogsContainer.appendChild(blogElement);
  });
}

// Call the fetchBlogs function when the page loads
window.addEventListener("load", fetchBlogs);
