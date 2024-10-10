const wrapper = document.querySelector(".wrapper");
const API_LINK = "https://jsonplaceholder.typicode.com/albums";

async function getDate(api) {
  const response = await fetch(api);
  response
    .json()
    .then((res) => createCard(res))
    .catch((err) => console.log(err));
}
getDate(API_LINK);

function createCard(data) {
  data.forEach((post) => {
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
        <h3>${post.title}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iure earum, iste reprehenderit hic quod nesciunt perspiciatis voluptates omnis voluptatum est unde laborum odio alias veniam quis, architecto veritatis! Cum et velit ad.</p>
        `;
    wrapper.appendChild(div);
  });
}
