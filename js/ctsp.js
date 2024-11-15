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
// Biến đếm số lượng sản phẩm trong giỏ hàng