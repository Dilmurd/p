const wrapper = document.querySelector(".wrapper")
const API_LINK = "https://jsonplaceholder.typicode.com/users"

async function getDate(api) {
    const response = await fetch(api)
    response.json().then(res => createCard(res)).catch(err => console.log(err));

}
getDate(API_LINK)

function createCard(data){
    data.forEach(post => {
        let div = document.createElement("div")
        div.className = "card"
        div.innerHTML = `
        <h3>${post.name}</h3>
        <p>${post.username}</p>
        <p>${post.email}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, molestias aliquam quasi voluptas vel beatae animi laborum tempora. A quaerat recusandae, fugiat quo velit suscipit reprehenderit nesciunt. Deserunt fuga tempore voluptatibus, dicta pariatur commodi ipsam, illo hic officiis perspiciatis cupiditate!</p>
        `
        wrapper.appendChild(div)
    });
}