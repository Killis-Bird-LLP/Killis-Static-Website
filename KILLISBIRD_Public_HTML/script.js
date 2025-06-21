document.addEventListener('DOMContentLoaded', function() {
    // Newsletter form handler (unchanged)
    const form = document.querySelector('.newsletter');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            if (email) {
                alert('Thank you for subscribing, ' + email + '!');
                form.reset();
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }

    // Reusable product gallery with arrow navigation
    const gallery = document.querySelector('.product-gallery');
    if (gallery) {
        const images = gallery.dataset.images.split(',').map(img => img.trim());
        const thumbnailsContainer = gallery.querySelector('.gallery-thumbnails');
        const mainImage = gallery.querySelector('#mainProductImage');
        const leftArrow = gallery.querySelector('.gallery-arrow.left');
        const rightArrow = gallery.querySelector('.gallery-arrow.right');
        let currentIndex = 0;

        // Dynamically create thumbnails
        thumbnailsContainer.innerHTML = '';
        images.forEach((src, idx) => {
            const thumb = document.createElement('img');
            thumb.src = src;
            thumb.alt = `Preview ${idx+1}`;
            thumb.className = 'thumb' + (idx === 0 ? ' active' : '');
            thumb.addEventListener('click', () => showMainImage(idx));
            thumbnailsContainer.appendChild(thumb);
        });

        const thumbnails = thumbnailsContainer.querySelectorAll('.thumb');

        function showMainImage(index) {
            currentIndex = index;
            mainImage.src = images[index];
            thumbnails.forEach((thumb, i) => {
                thumb.classList.toggle('active', i === index);
            });
        }

        // Arrow navigation
        leftArrow.addEventListener('click', function() {
            let newIndex = currentIndex - 1;
            if (newIndex < 0) newIndex = images.length - 1;
            showMainImage(newIndex);
        });
        rightArrow.addEventListener('click', function() {
            let newIndex = currentIndex + 1;
            if (newIndex >= images.length) newIndex = 0;
            showMainImage(newIndex);
        });

        // Initialize with the first image
        showMainImage(0);
    }
});