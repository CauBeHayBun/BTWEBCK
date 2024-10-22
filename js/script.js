const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;
const slidesToShow = 3; // Số slide cần hiển thị
const totalSlides = slider.children.length;

function showSlide(index) {
    // Giới hạn chỉ mục của slide để ngăn trượt quá slide cuối
    if (index > totalSlides - slidesToShow) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - slidesToShow;
    } else {
        currentIndex = index;
    }

    // Tính toán dịch chuyển theo chiều ngang
    slider.style.transform = `translateX(${-currentIndex * (100 / slidesToShow)}%)`;
}

nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});