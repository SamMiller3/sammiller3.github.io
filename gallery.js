const gallery = document.getElementById('gallery');
const slides = gallery.getElementsByClassName('slide');
let currentIndex = 0;
let startX;
let scrollLeft;

function slide(direction) {
    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    updateGallery();
}

function updateGallery() {
    gallery.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function autoSlide() {
    slide(1);
    setTimeout(autoSlide, 5000); // Wait 5 seconds before moving to the next slide
}

// Start the auto-sliding after a 5-second initial delay
setTimeout(autoSlide, 5000);

gallery.addEventListener('mousedown', (e) => {
    startX = e.pageX - gallery.offsetLeft;
    scrollLeft = gallery.scrollLeft;
});

gallery.addEventListener('mousemove', (e) => {
    if (!startX) return;
    const x = e.pageX - gallery.offsetLeft;
    const walk = (x - startX) * 2;
    const slideWidth = slides[0].offsetWidth;
    const slidesMoved = Math.round(walk / slideWidth);
    currentIndex = (currentIndex - slidesMoved + slides.length) % slides.length;
    updateGallery();
});

gallery.addEventListener('mouseup', () => {
    startX = null;
});

gallery.addEventListener('mouseleave', () => {
    startX = null;
});

for (let slide of slides) {
    slide.addEventListener('click', function() {
        this.style.filter = 'brightness(0.6)';
        setTimeout(() => {
            this.style.filter = 'brightness(1)';
            const targetId = this.getAttribute('data-target');
            document.getElementById(targetId).scrollIntoView({behavior: 'smooth'});
        }, 300);
    });
}
