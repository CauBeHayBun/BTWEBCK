function getAllProducts() {
    // Lấy tất cả các phần tử .cake-item trên trang
    const cakeItems = document.querySelectorAll('.cake-item');
    const products = [];

    // Duyệt qua từng phần tử để lấy thông tin
    cakeItems.forEach(item => {
        const linkElement = item.querySelector('a');
        const imgElement = item.querySelector('img');
        const nameElement = item.querySelector('h3');

        if (linkElement && imgElement && nameElement) {
            const product = {
                name: nameElement.innerText.trim(),
                link: linkElement.href,
                image: imgElement.src
            };
            products.push(product);
        }
    });

    return products;
}

function searchProducts() {
    const query = document.querySelector('.search-input').value.toLowerCase();
    const resultsDiv = document.querySelector('.search-results');
    resultsDiv.innerHTML = '';

    // Gọi hàm getAllProducts để lấy tất cả sản phẩm từ trang hiện tại
    const products = getAllProducts();

    // Lọc các sản phẩm theo từ khóa tìm kiếm
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));

    if (filteredProducts.length > 0 && query !== '') {
        filteredProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('search-item');
            productElement.innerHTML = `
                <a href="${product.link}">
                    <img src="${product.image}" alt="${product.name}">
                    <span>${product.name}</span>
                </a>
            `;
            resultsDiv.appendChild(productElement);
        });
    } else if (query !== '') {
        resultsDiv.innerHTML = '<p style="padding: 10px;">Không tìm thấy sản phẩm.</p>';
    }
}