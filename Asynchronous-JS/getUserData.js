function fetchUserData(url) {
    // TODO: Write code to fetch user data from API endpoint and return Promise
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

async function getUserData() {
    // TODO: Call fetchUserData() and log user data to console using async/await syntax
    let data = await fetchUserData("https://jsonplaceholder.typicode.com/users/1");
    console.log(data);
}

getUserData();

function getUserAge() {
    // TODO: Call fetchUserData() and return user age as Promise
    fetchUserData("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
}

async function getAgeAndLog() {
    // TODO: Call getUserAge() and log user age to console using async/await syntax
    let data = await getUserAge();
    console.log(data.username);
}

getAgeAndLog();