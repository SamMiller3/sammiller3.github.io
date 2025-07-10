document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const slides = gallery.getElementsByClassName('slide');
    const prevButton = document.querySelector('.nav-button.prev');
    const nextButton = document.querySelector('.nav-button.next');
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
        setTimeout(autoSlide, 5000);
    }

    // Bind navigation buttons
    prevButton.addEventListener('click', () => slide(-1));
    nextButton.addEventListener('click', () => slide(1));

    // Start auto-sliding
    setTimeout(autoSlide, 5000);

    // Drag/Swipe functionality
    gallery.addEventListener('mousedown', (e) => {
        startX = e.pageX - gallery.offsetLeft;
        scrollLeft = gallery.scrollLeft;
    });

    gallery.addEventListener('mousemove', (e) => {
        if (startX == null) return;
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

    // Slide click behavior
    for (let slide of slides) {
        slide.addEventListener('click', function () {
            this.style.filter = 'brightness(0.6)';
            setTimeout(() => {
                this.style.filter = 'brightness(1)';
                const targetId = this.getAttribute('data-target');
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        });
    }
});
