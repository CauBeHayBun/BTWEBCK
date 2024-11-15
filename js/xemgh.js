let cart = JSON.parse(localStorage.getItem('cart')) || [];
let selectedSize = '19 cm';

// Hàm chọn kích thước
function selectSize(size, event) {
    selectedSize = size;
    document.querySelectorAll('.size-options button').forEach(button => {
        button.classList.remove('selected');
    });
    event.target.classList.add('selected');
}

// Hàm cập nhật giỏ hàng
function updateCartView() {
    const cartItemsContainer = document.querySelector(".cart-items");
    const cartTotalEl = document.getElementById("cartTotal");
    cartItemsContainer.innerHTML = ""; // Xóa nội dung cũ

    let total = 0;
    cart.forEach((item, index) => {
        const cartItemEl = document.createElement("div");
        cartItemEl.classList.add("cart-item");
        cartItemEl.innerHTML = `
                <div style="display: flex; align-items: center;">
                    <img src="${item.image}" alt="${item.productName}" style="width: 50px; height: 50px; margin-right: 10px;">
                    <div>
                        <strong>${item.productName}</strong> - Mã: ${item.productCode}<br>
                        Kích thước: ${item.size}, Số lượng: ${item.quantity}, Giá: ${item.price.toLocaleString()}đ
                    </div>
                    <button onclick="removeFromCart(${index})" style="margin-left: 10px; background-color: #ff4d4f; border: none; color: white; padding: 5px 10px; cursor: pointer;">Xóa</button>
                </div>
                <div><strong>${(item.price * item.quantity).toLocaleString()}đ</strong></div>
            `;
        cartItemsContainer.appendChild(cartItemEl);
        total += item.price * item.quantity;
    });

    cartTotalEl.textContent = `${total.toLocaleString()}đ`;
}

// Hàm xóa sản phẩm khỏi giỏ hàng
function removeFromCart(index) {
    cart.splice(index, 1); // Xóa sản phẩm khỏi giỏ hàng
    localStorage.setItem('cart', JSON.stringify(cart)); // Cập nhật localStorage
    updateCartView(); // Cập nhật giao diện giỏ hàng
    document.querySelector('.cart-count').textContent = cart.length; // Cập nhật số lượng sản phẩm trong giỏ
}

// Hàm thêm vào giỏ hàng
function addToCart(productName, productCode, price, size, quantity, image) {
    const cartItem = {
        productName,
        productCode,
        price,
        size,
        quantity,
        image
    };
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart)); // Lưu giỏ hàng vào localStorage
    updateCartView();
    openCart(); // Mở giỏ hàng ngay sau khi thêm
    document.querySelector('.cart-count').textContent = cart.length; // Cập nhật số lượng sản phẩm trong giỏ
}

// Hàm xử lý khi bấm "THÊM VÀO GIỎ HÀNG"
function handleAddToCart() {
    const productName = "Fruit Cake";
    const productCode = document.getElementById("productCode").textContent;
    const price = 275000; // Giá sản phẩm
    const quantity = parseInt(document.getElementById("quantityInput").value);
    const image = document.getElementById("productImage").src; // Đường dẫn hình ảnh sản phẩm
    addToCart(productName, productCode, price, selectedSize, quantity, image);
}

// Hàm mở giỏ hàng
function openCart() {
    document.getElementById("cartModal").style.display = "block";
    updateCartView(); // Cập nhật giỏ hàng mỗi khi mở
}

// Hàm đóng giỏ hàng
function closeCart() {
    document.getElementById("cartModal").style.display = "none";
}

// Hàm tăng và giảm số lượng
function increaseQuantity() {
    const quantityInput = document.getElementById("quantityInput");
    quantityInput.value = parseInt(quantityInput.value) + 1;
}

function decreaseQuantity() {
    const quantityInput = document.getElementById("quantityInput");
    if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
}

// Tải giỏ hàng từ localStorage khi trang được tải
document.addEventListener("DOMContentLoaded", () => {
    updateCartView();
});





// Chọn tất cả các nút kích thước
const sizeButtons = document.querySelectorAll('.size-options button');

// Lặp qua các nút kích thước để gán sự kiện 'click'
sizeButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Bỏ lớp selected khỏi tất cả các nút
        sizeButtons.forEach(btn => btn.classList.remove('selected'));
        // Thêm lớp selected cho nút được chọn
        this.classList.add('selected');
    });
});

// Xử lý số lượng
const quantityInput = document.querySelector('.quantity input');
const increaseButton = document.querySelector('.quantity button:last-child');
const decreaseButton = document.querySelector('.quantity button:first-child');

increaseButton.addEventListener('click', function() {
    let currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
});

decreaseButton.addEventListener('click', function() {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) { // Không giảm số lượng xuống dưới 1
        quantityInput.value = currentValue - 1;
    }
});

function removeFromCart(index) {
    cart.splice(index, 1); // Xóa sản phẩm khỏi giỏ hàng
    localStorage.setItem('cart', JSON.stringify(cart)); // Cập nhật localStorage
    updateCartView(); // Cập nhật lại giao diện giỏ hàng
    document.querySelector('.cart-count').textContent = cart.length; // Cập nhật số lượng sản phẩm trong giỏ
}