 // Fetch JSON data and dynamically render the products
 fetch('./data.json')
 .then((response) => response.json())
 .then((data) => renderProducts(data))
 .catch((error) => console.error('Error fetching data:', error));

function renderProducts(products) {
 const container = document.getElementById('product-container');
 container.innerHTML = products
   .map(
     (product) => `
     <div class="product-card">
       <div class="product-image">
         ${product.isSale ? '<span class="badge">Sale</span>' : ''}
         ${product.isNew ? '<span class="badge">New</span>' : ''}
       </div>
       <div class="product-info">
         <img src=${product.name}></img>
         <div class="product-code">Code: ${product.code}</div>
         <div class="product-price">$${product.price.toFixed(2)}</div>
         ${
           product.oldPrice
             ? `<div class="product-old-price">$${product.oldPrice.toFixed(
                 2
               )}</div>`
             : ''
         }
       </div>
     </div>
   `
   )
   .join('');
}


// Constructor Function for Person objects

const name = "W3Schools";
let letter = name.at(6);
console.log(letter)