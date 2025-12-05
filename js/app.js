const myCarousel = document.getElementById('galeriaProducto')
myCarousel.addEventListener('slide.bs.carousel', event => {
    document.querySelectorAll('.thumbnail-box').forEach(thumb => {
        thumb.classList.remove('active');
    });
    const activeThumb = document.querySelector(`button[data-bs-slide-to="${event.to}"]`);
    if (activeThumb) {
        activeThumb.classList.add('active');
    }
})