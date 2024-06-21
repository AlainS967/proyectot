const API_url = 'https://fakestoreapi.com'
const HTMLResponse = document.querySelector("#app");
const ul = document.createElement("ul");

fetch(`${API_url}/products`).then((response) => response.json()).then((products) => {
  products.forEach((product) => {
    let elem = document.createElement("li"); elem.appendChild(document.createTextNode(`${ product.id } ${ product.title } ${ product.description } ${ product.category } ${ product.image } ${ product.rating } ${ product.rate }${ product.count }`))
    ul.appendChild(elem);
  });
  HTMLResponse.appendChild(ul); 
});

