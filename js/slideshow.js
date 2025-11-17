// Slideshow Controller
class Slideshow {
  constructor() {
    this.slides = document.querySelectorAll(".slide");
    this.dots = document.querySelectorAll(".slider-dot");
    this.currentSlide = 0;
    this.autoPlayInterval = 6000; // 6 seconds per slide
    this.init();
  }

  init() {
    // Add click listeners to dots
    this.dots.forEach((dot, index) => {
      dot.addEventListener("click", () => this.goToSlide(index));
    });

    // Start auto-play
    this.startAutoPlay();

    // Pause on hover
    const heroSlider = document.querySelector(".hero-slider");
    if (heroSlider) {
      heroSlider.addEventListener("mouseenter", () => this.stopAutoPlay());
      heroSlider.addEventListener("mouseleave", () => this.startAutoPlay());
    }
  }

  goToSlide(index) {
    // Remove active class from current slide and dot
    this.slides[this.currentSlide].classList.remove("active");
    this.dots[this.currentSlide].classList.remove("active");

    // Set new current slide
    this.currentSlide = index;

    // Add active class to new slide and dot
    this.slides[this.currentSlide].classList.add("active");
    this.dots[this.currentSlide].classList.add("active");

    // Reset auto-play timer
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  nextSlide() {
    const nextIndex = (this.currentSlide + 1) % this.slides.length;
    this.goToSlide(nextIndex);
  }

  startAutoPlay() {
    this.autoPlayTimer = setInterval(
      () => this.nextSlide(),
      this.autoPlayInterval
    );
  }

  stopAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
    }
  }
}

// Initialize slideshow when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  new Slideshow();
});
