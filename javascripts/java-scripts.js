document.addEventListener("DOMContentLoaded", function() {
    let arrows = document.querySelectorAll('.strelka1');
    arrows.forEach(arrow => {
        document.addEventListener('mousemove', function (event) {
            let x = event.clientX;
            let y = event.clientY; 
            let angle = Math.atan2(y - (arrow.offsetTop + arrow.offsetHeight / 2), x - (arrow.offsetLeft + arrow.offsetWidth / 2));
            arrow.style.transform = `rotate(${angle * (180 / Math.PI)}deg)`;
        });
    });

    let mebutton = document.querySelector(".i4 img");
    let navigation = document.querySelector(".navigation");
    mebutton.addEventListener("click", function() {
        if (navigation.style.display === "none" || navigation.style.display === "") {
            navigation.style.display = "block";
        } else {
            navigation.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;

    function showSlide(index) {
        const slides = document.querySelector('.slides');
        const totalSlides = document.querySelectorAll('.slide').length;
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }
        const offset = -currentSlide * 100;
        slides.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    document.getElementById('next').addEventListener('click', nextSlide);
    document.getElementById('prev').addEventListener('click', prevSlide);

    showSlide(currentSlide);
});