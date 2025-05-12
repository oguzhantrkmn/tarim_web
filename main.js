// Slider
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slider-dot');
let currentSlide = 0;
let sliderInterval;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
    });
    currentSlide = index;
}

function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
}

function startSlider() {
    sliderInterval = setInterval(nextSlide, 5000);
}
function stopSlider() {
    clearInterval(sliderInterval);
}

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        showSlide(i);
        stopSlider();
        startSlider();
    });
});

showSlide(0);
startSlider();

// SSS (FAQ) Akordeon
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    btn.addEventListener('click', () => {
        item.classList.toggle('open');
        // Diğerlerini kapat
        faqItems.forEach(other => {
            if (other !== item) other.classList.remove('open');
        });
    });
});

// Müşteri Yorumları Slider (manuel kaydırma için aktif kartı vurgula)
const testimonialCards = document.querySelectorAll('.testimonial-card');
const testimonialSlider = document.querySelector('.testimonial-slider');
if (testimonialSlider) {
    testimonialSlider.addEventListener('scroll', () => {
        let minDist = Infinity;
        let activeIndex = 0;
        testimonialCards.forEach((card, i) => {
            const rect = card.getBoundingClientRect();
            const dist = Math.abs(rect.left - testimonialSlider.getBoundingClientRect().left);
            if (dist < minDist) {
                minDist = dist;
                activeIndex = i;
            }
        });
        testimonialCards.forEach((card, i) => {
            card.classList.toggle('active', i === activeIndex);
        });
    });
}

// Canlı Destek Butonu (örnek animasyonlu açılır pencere - isteğe bağlı)
const liveChatBtn = document.querySelector('.live-chat-btn');
liveChatBtn && liveChatBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Canlı destek yakında aktif olacak!');
});

// Kategori sayfalarında animasyonları scroll ile tetikle
function animateOnScroll() {
    const animatedEls = document.querySelectorAll('.animated-fadein, .animated-slidein, .animated-card');
    animatedEls.forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
            el.style.animationDelay = (el.classList.contains('animated-card') ? (i * 0.12) : 0) + 's';
            el.classList.add('animated-visible');
        }
    });
}
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('DOMContentLoaded', animateOnScroll);

// Animasyonlu kartlar için görünürlük
const animatedEls = document.querySelectorAll('.animated-fadein, .animated-slidein, .animated-card');
animatedEls.forEach(el => {
    el.addEventListener('animationend', () => {
        el.classList.add('animated-visible');
    });
}); 