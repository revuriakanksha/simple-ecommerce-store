fetch("https://ecommerce-backend-ou46.onrender.com/api/products")

.then(res => res.json())

.then(data => {

    const productsDiv =
    document.getElementById("products");

    data.forEach(product => {

        productsDiv.innerHTML += `

        <div class="card">

            <img src="${product.image}">

            <div class="card-content">

                <h3>${product.name}</h3>

                <h4 class="price">
                    ₹${product.price}
                </h4>

                <a class="btn"
                   href="product.html?id=${product._id}">

                   View Details

                </a>

            </div>

        </div>

        `;
    });

});