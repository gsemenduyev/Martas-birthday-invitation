 const slider = document.getElementById('slider');
  const images = slider.querySelectorAll('img');
  const totalImages = images.length;

  let currentIndex = 1; // Start from the first real image

  // Clone first and last images
  const firstClone = images[0].cloneNode(true);
  const lastClone = images[totalImages - 1].cloneNode(true);

  slider.appendChild(firstClone);
  slider.insertBefore(lastClone, images[0]);

  const allImages = slider.querySelectorAll('img');
  const updatedTotal = allImages.length;

  // Set slider width
  slider.style.width = `${400 * updatedTotal}px`;

  // Initial position
  slider.style.transform = `translateX(-${400 * currentIndex}px)`;

  function updateSlider() {
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(-${400 * currentIndex}px)`;
  }

  function nextImage() {
    if (currentIndex >= updatedTotal - 1) return;
    currentIndex++;
    updateSlider();
  }

  function prevImage() {
    if (currentIndex <= 0) return;
    currentIndex--;
    updateSlider();
  }

  slider.addEventListener('transitionend', () => {
    if (allImages[currentIndex].src === firstClone.src) {
      slider.style.transition = 'none';
      currentIndex = 1;
      slider.style.transform = `translateX(-${400 * currentIndex}px)`;
    }
    if (allImages[currentIndex].src === lastClone.src) {
      slider.style.transition = 'none';
      currentIndex = updatedTotal - 2;
      slider.style.transform = `translateX(-${400 * currentIndex}px)`;
    }
  });

  // Swipe support
  const sliderContainer = document.getElementById('sliderContainer');
  let startX = 0;
  let endX = 0;

  sliderContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  sliderContainer.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
  });

  function handleSwipe() {
    const threshold = 50;
    const distance = endX - startX;

    if (distance > threshold) {
      prevImage();
    } else if (distance < -threshold) {
      nextImage();
    }
  }