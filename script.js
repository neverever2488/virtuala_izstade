/* ==========================================================
   Gaming Through Time – image carousel
   Reads the console data from the gallery cards (data-* attributes),
   then controls the carousel in the "A closer look" section.
   ========================================================== */

(function () {
    'use strict';

    // ---------- Settings ----------
    const SLIDE_DELAY = 4000; // autoplay delay in milliseconds

    // ---------- DOM element selection ----------
    const cards = document.querySelectorAll('.console-card');
    const carousel = document.querySelector('.carousel-layout');
    const imageEl = document.getElementById('carousel-image');
    const counterEl = document.getElementById('carousel-counter');
    const metaEl = document.getElementById('carousel-year');
    const nameEl = document.getElementById('carousel-name');
    const captionEl = document.getElementById('carousel-caption');
    const prevBtn = document.getElementById('previous-btn');
    const nextBtn = document.getElementById('next-btn');
    const playBtn = document.getElementById('play-pause-btn');
    const statusEl = document.getElementById('playback-status');

    // Stop if the carousel markup is missing
    if (!carousel || !imageEl || cards.length === 0) {
        return;
    }

    // ---------- Build slide data from the gallery cards ----------
    const slides = Array.from(cards).map(function (card) {
        const img = card.querySelector('img');
        return {
            title: card.dataset.title,
            meta: card.querySelector('.card-meta').textContent.replace(/\s+/g, ' ').trim(),
            caption: card.dataset.caption,
            src: img.getAttribute('src'),
            alt: img.getAttribute('alt')
        };
    });

    // ---------- State ----------
    let currentIndex = 0;
    let timerId = null;
    let isPlaying = false;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Small helper: pad numbers to two digits (1 -> "01")
    function pad(number) {
        return String(number).padStart(2, '0');
    }

    // ---------- Show a slide (DOM manipulation) ----------
    function showSlide(index) {
        // Wrap around at both ends
        currentIndex = (index + slides.length) % slides.length;
        const slide = slides[currentIndex];

        function update() {
            imageEl.src = slide.src;
            imageEl.alt = slide.alt;
            counterEl.textContent = pad(currentIndex + 1) + ' / ' + pad(slides.length);
            metaEl.textContent = slide.meta;
            nameEl.textContent = slide.title;
            captionEl.textContent = slide.caption;
            imageEl.style.opacity = '1';
        }

        if (reducedMotion) {
            update();
        } else {
            // Quick fade-out, swap content, fade-in
            imageEl.style.transition = 'opacity .2s';
            imageEl.style.opacity = '0';
            setTimeout(update, 200);
        }
    }

    // ---------- Navigation ----------
    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function previousSlide() {
        showSlide(currentIndex - 1);
    }

    // ---------- Autoplay ----------
    function startTimer() {
        stopTimer();
        timerId = setInterval(nextSlide, SLIDE_DELAY);
    }

    function stopTimer() {
        if (timerId !== null) {
            clearInterval(timerId);
            timerId = null;
        }
    }

    function play() {
        isPlaying = true;
        startTimer();
        playBtn.textContent = 'Pause';
        playBtn.setAttribute('aria-pressed', 'true');
        statusEl.textContent = 'Slideshow playing';
    }

    function pause() {
        isPlaying = false;
        stopTimer();
        playBtn.textContent = 'Play';
        playBtn.setAttribute('aria-pressed', 'false');
        statusEl.textContent = 'Slideshow paused';
    }

    function togglePlay() {
        if (isPlaying) {
            pause();
        } else {
            play();
        }
    }

    // After a manual change, restart the timer so the slide isn't skipped immediately
    function manualChange(action) {
        action();
        if (isPlaying) {
            startTimer();
        }
    }

    // ---------- Event listeners ----------
    nextBtn.addEventListener('click', function () {
        manualChange(nextSlide);
    });

    prevBtn.addEventListener('click', function () {
        manualChange(previousSlide);
    });

    playBtn.addEventListener('click', togglePlay);

    // Keyboard: left/right arrows while focus is inside the carousel
    carousel.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowRight') {
            event.preventDefault();
            manualChange(nextSlide);
        } else if (event.key === 'ArrowLeft') {
            event.preventDefault();
            manualChange(previousSlide);
        }
    });

    // Pause autoplay while the mouse is over the carousel (resume on leave)
    let pausedByHover = false;
    carousel.addEventListener('mouseenter', function () {
        if (isPlaying) {
            stopTimer();
            pausedByHover = true;
        }
    });
    carousel.addEventListener('mouseleave', function () {
        if (pausedByHover && isPlaying) {
            startTimer();
        }
        pausedByHover = false;
    });

    // Stop autoplay when the browser tab is hidden
    document.addEventListener('visibilitychange', function () {
        if (document.hidden && isPlaying) {
            pause();
        }
    });

    // Clicking a gallery card opens that console in the carousel
    cards.forEach(function (card, index) {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function () {
            if (isPlaying) {
                pause();
            }
            showSlide(index);
            document.getElementById('carousel').scrollIntoView({
                behavior: reducedMotion ? 'auto' : 'smooth'
            });
            statusEl.textContent = 'Showing ' + slides[index].title;
        });
    });

    // ---------- Initialisation ----------
    // Preload all images so slide changes are instant
    slides.forEach(function (slide) {
        const preload = new Image();
        preload.src = slide.src;
    });

    playBtn.setAttribute('aria-pressed', 'false');
    showSlide(0);
})();
