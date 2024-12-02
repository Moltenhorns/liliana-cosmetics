document.getElementById('addForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    fetch('backend/add_product.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        fetchProducts();
    });
});

function fetchProducts() {
    fetch('backend/fetch_products.php')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.querySelector('#productTable tbody');
        tableBody.innerHTML = '';
        data.forEach(product => {
            const row = `<tr>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.quantity}</td>
                <td>${product.color}</td>
                <td><button onclick="deleteProduct(${product.id})">Delete</button></td>
            </tr>`;
            tableBody.innerHTML += row;
        });
    });
}

function deleteProduct(id) {
    fetch('backend/delete_product.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `id=${id}`
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        fetchProducts();
    });
}

document.addEventListener('DOMContentLoaded', fetchProducts);