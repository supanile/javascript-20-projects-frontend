const counters = document.querySelectorAll('.counter');

// Easing function
const easeOutQuad = t => t * (2 - t);

counters.forEach((counter, index) => {
    const target = +counter.getAttribute('data-target');
    const duration = 2000; // Animation duration in milliseconds
    const frameDuration = 1000 / 60; // Assuming 60fps
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const updateCounter = () => {
        frame++;
        const progress = easeOutQuad(frame / totalFrames);
        const currentCount = Math.round(target * progress);

        if (frame === totalFrames) {
            counter.textContent = target.toLocaleString();
        } else {
            counter.textContent = currentCount.toLocaleString();
            requestAnimationFrame(updateCounter);
        }
    };

    // Start the counter animation when the element is in view
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            // Add a small delay for each counter
            setTimeout(() => {
                updateCounter();
            }, index * 200); // 200ms delay between each counter start
            observer.unobserve(counter);
        }
    }, { threshold: 0.5 });

    observer.observe(counter);
});