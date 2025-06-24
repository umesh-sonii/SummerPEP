fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(data => {
    const productContainer = document.getElementById("products");

    data.products.forEach(product => {
      
      //creating div
      const productDiv = document.createElement('div');
      productDiv.style.border = "1px solid #ccc";
      productDiv.style.padding = "10px";
      productDiv.style.margin = "10px";
      productDiv.style.maxWidth = "200px";

      //title
      const p = document.createElement('p');
      p.innerText = product.title;
      p.style.textAlign = "center";
      p.style.fontWeight = "bold";

      //adding image
      const img = document.createElement('img');
      img.src = product.thumbnail;
      img.alt = product.title;
      img.style.width = "100%";

      // price and rating in a row
      const infoRow = document.createElement('div');
      infoRow.style.display = "flex";
      infoRow.style.justifyContent = "center";
      infoRow.style.alignItems = "center";
      infoRow.style.gap = "8px";
      infoRow.style.padding = "0 5px";
      

      const price = document.createElement('p');
      price.innerText = `$${product.price}`;
      price.style.color = "green";
      price.style.fontSize = "14px";
      price.style.lineHeight = "1.2";

      const rating = document.createElement('p');
      rating.innerText = `⭐${product.rating.toFixed(1)} / 5`;
      rating.style.color = "#ff9800";
      rating.style.fontSize = "14px";
      rating.style.lineHeight = "1.2";

      infoRow.appendChild(price);
      infoRow.appendChild(rating);
      
      //adding to div
      productDiv.appendChild(img);
      productDiv.appendChild(p);
      productDiv.appendChild(infoRow);
      
      //adding div to container
      productContainer.appendChild(productDiv);
    });
  })
.catch(error => console.error("Error fetching data:", error));
