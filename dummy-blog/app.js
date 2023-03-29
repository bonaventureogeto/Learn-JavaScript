const blogPost = document.getElementById('blog')

const search = document.getElementById('read')


search.addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(post => post.json())
        .then(post => {
            for (let i = 0; i < post.length; i++){
                const title = post[i].title;
                const body = post[i].body;
                blogPost.innerHTML = `
                    <h2>${title}</h2>
                    <p>${body}</p>
                `;
            }
            // console.log(post[1])
        })
        .catch(error => {
			blogPost.innerHTML = `<p>Error: ${error}</p>`;
		});
});

