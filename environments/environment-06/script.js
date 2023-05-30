"use strict";

window.addEventListener("load", initApp);

let products = [];
let basket = [];

async function initApp() {
  console.log("javascript is running");
  await fetchJSON();
  showProducts(products);

  document.querySelector("#add").addEventListener("click", addItem);
}

async function fetchJSON() {
  let response = await fetch("products.json");
  if (response.ok) {
    products = await response.json();
    return response;
  }
}

function showProducts() {
  for (const product of products) {
    let myHTML = `
        <article>
          <h3>${product.name}</h3>
          <p>vægt: ${product.weight}g</p>
          <p>pris: ${product.price},-</p>
          <button id="add">Læg i kurv</button>
        </article>
   `;
    document.querySelector("#products").insertAdjacentHTML("beforeend", myHTML);
  }
}

function addItem(event) {
  const selectedProduct = products.find(
    (product) =>
      product.name === event.target.parentNode.querySelector("h3").textContent
  );
  basket.push(selectedProduct);
  console.log(basket);
}
