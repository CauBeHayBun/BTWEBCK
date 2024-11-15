// Tìm phần tử hiển thị số lượng giỏ hàng
const cartCount = document.querySelector('.cart-count');

// Tìm nút "Thêm vào giỏ hàng"
const addToCartButton = document.querySelector('.add-to-cart');

// Đặt sự kiện cho nút "Thêm vào giỏ hàng"
addToCartButton.addEventListener('click', () => {
    // Chuyển đổi giá trị trong giỏ hàng sang số nguyên
    let count = parseInt(cartCount.textContent);

    // Tăng số lượng
    count += 0;

    // Cập nhật lại nội dung số lượng trong giỏ hàng
    cartCount.textContent = count;
});