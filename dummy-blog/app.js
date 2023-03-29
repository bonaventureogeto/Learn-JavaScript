const blogPost = document.getElementById(blog)

const search = document.getElementById(search)

search.addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(post => post.json())
        .then(post => {
            const title = post.title;
            const body = post.body;
            blogPost.innerHTML = `
                <h2>${title}</h2>
                <p>${body}</p>
            `;
        })
        .catch(error => {
			weather1.innerHTML = `<p>Error: ${error}</p>`;
		});
});
