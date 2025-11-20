// ===========================
// Navigation & Mobile Menu
// ===========================
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const navbar = document.getElementById("navbar");
  const backToTop = document.getElementById("backToTop");
  const navLinkElements = document.querySelectorAll(".nav-link");

  // Mobile menu toggle
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Close mobile menu when clicking a link
  navLinkElements.forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

  // ===========================
  // Scroll Effects
  // ===========================
  window.addEventListener("scroll", function () {
    // Navbar shadow on scroll
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Back to top button
    if (backToTop && window.scrollY > 500) {
      backToTop.classList.add("show");
    } else if (backToTop) {
      backToTop.classList.remove("show");
    }

    // Active navigation based on scroll position
    updateActiveNav();
  });

  // Back to top button functionality
  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // ===========================
  // Active Navigation
  // ===========================
  function updateActiveNav() {
    const sections = document.querySelectorAll("section[id]");
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute("id");
      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinkElements.forEach((link) => link.classList.remove("active"));
        if (navLink) {
          navLink.classList.add("active");
        }
      }
    });
  }

  // ===========================
  // Smooth Scrolling
  // ===========================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // ===========================
  // Intersection Observer for Animations
  // ===========================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "fadeIn 1s ease-in forwards";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements
  const animatedElements = document.querySelectorAll(
    ".feature-card, .product-card, .news-card, .about-text, .about-image"
  );
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    observer.observe(el);
  });

  // ===========================
  // Contact Form Handling
  // ===========================
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
      };

      // Show success message (in production, this would send to a server)
      // showNotification(
      //   "Thank you! Your message has been sent. We will respond within 24 hours.",
      //   "success"
      // );

      // Reset form
      contactForm.reset();
    });
  }

  // ===========================
  // Notification System
  // ===========================
  function showNotification(message, type = "success") {
    // Remove existing notification if any
    const existingNotification = document.querySelector(".notification");
    if (existingNotification) {
      existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement("div");
    notification.className = `notification ${type}`;
    notification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        `;

    // Add styles
    notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === "success" ? "#4caf50" : "#f44336"};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            display: flex;
            align-items: center;
            gap: 1rem;
            z-index: 10000;
            animation: slideIn 0.3s ease-out;
            max-width: 400px;
        `;

    document.body.appendChild(notification);

    // Close button functionality
    const closeBtn = notification.querySelector(".notification-close");
    closeBtn.style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            margin-left: auto;
        `;

    closeBtn.addEventListener("click", () => {
      notification.style.animation = "slideOut 0.3s ease-in";
      setTimeout(() => notification.remove(), 300);
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
      if (notification.parentElement) {
        notification.style.animation = "slideOut 0.3s ease-in";
        setTimeout(() => notification.remove(), 300);
      }
    }, 5000);
  }

  // Add animation keyframes
  const style = document.createElement("style");
  style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
  document.head.appendChild(style);

  // ===========================
  // Dynamic Year in Footer
  // ===========================
  const currentYear = new Date().getFullYear();
  const footerYear = document.querySelector(".footer-bottom p");
  if (footerYear) {
    footerYear.textContent = `© ${currentYear} Monmet Technologies Inc. All rights reserved.`;
  }

  // ===========================
  // Card Hover Effects
  // ===========================
  const cards = document.querySelectorAll(
    ".feature-card, .product-card, .news-card"
  );
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

  // ===========================
  // Loading Animation
  // ===========================
  window.addEventListener("load", function () {
    document.body.style.opacity = "0";
    setTimeout(() => {
      document.body.style.transition = "opacity 0.5s ease-in";
      document.body.style.opacity = "1";
    }, 100);
  });

  // ===========================
  // Parallax Effect for Hero
  // ===========================
  const hero = document.querySelector(".hero");
  if (hero) {
    window.addEventListener("scroll", function () {
      const scrolled = window.pageYOffset;
      const parallax = scrolled * 0.5;
      hero.style.transform = `translateY(${parallax}px)`;
    });
  }

  // ===========================
  // Product Filter (for products page)
  // ===========================
  const filterButtons = document.querySelectorAll(".filter-btn");
  if (filterButtons.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const filter = this.getAttribute("data-filter");

        // Update active button
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");

        // Filter products
        const products = document.querySelectorAll(".product-item");
        products.forEach((product) => {
          if (
            filter === "all" ||
            product.getAttribute("data-category") === filter
          ) {
            product.style.display = "block";
            product.style.animation = "fadeIn 0.5s ease-in";
          } else {
            product.style.display = "none";
          }
        });
      });
    });
  }

  // ===========================
  // Form Validation
  // ===========================
  const formInputs = document.querySelectorAll("input, textarea");
  formInputs.forEach((input) => {
    input.addEventListener("blur", function () {
      validateInput(this);
    });

    input.addEventListener("input", function () {
      if (this.classList.contains("error")) {
        validateInput(this);
      }
    });
  });

  function validateInput(input) {
    const value = input.value.trim();

    // Remove existing error message
    const existingError = input.parentElement.querySelector(".error-message");
    if (existingError) {
      existingError.remove();
    }

    let isValid = true;
    let errorMessage = "";

    // Check if required field is empty
    if (input.hasAttribute("required") && !value) {
      isValid = false;
      errorMessage = "This field is required";
    }

    // Email validation
    if (input.type === "email" && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errorMessage = "Please enter a valid email address";
      }
    }

    // Phone validation (optional but should be valid if provided)
    if (input.type === "tel" && value) {
      const phoneRegex = /^\+?[\d\s\-()]+$/;
      if (!phoneRegex.test(value)) {
        isValid = false;
        errorMessage = "Please enter a valid phone number";
      }
    }

    // Update UI based on validation
    if (!isValid) {
      input.classList.add("error");
      input.style.borderColor = "#f44336";

      const errorElement = document.createElement("span");
      errorElement.className = "error-message";
      errorElement.textContent = errorMessage;
      errorElement.style.cssText = `
                color: #f44336;
                font-size: 0.875rem;
                margin-top: 0.25rem;
                display: block;
            `;
      input.parentElement.appendChild(errorElement);
    } else {
      input.classList.remove("error");
      input.style.borderColor = "#4caf50";
    }

    return isValid;
  }

  // ===========================
  // Console Welcome Message
  // ===========================
  console.log(
    "%c Welcome to Monmet Technologies! ",
    "background: #667eea; color: white; font-size: 20px; padding: 10px;"
  );
  console.log(
    "%c Proudly Built in North America ",
    "background: #ff6b35; color: white; font-size: 14px; padding: 5px;"
  );
});

// ===========================
// reCAPTCHA v3 Integration
// ===========================

// Initialize reCAPTCHA with YOUR_RECAPTCHA_SITE_KEY
function initializeRecaptcha() {
  // Replace YOUR_RECAPTCHA_SITE_KEY with your actual site key
  const siteKey = "6LfcJxEsAAAAGXg4YV9FtkPQjlkzWFPbjsAfij";
  if (siteKey !== "YOUR_RECAPTCHA_SITE_KEY") {
    window.grecaptcha.ready(function () {
      window.grecaptcha
        .execute(siteKey, { action: "submit" })
        .then(function (token) {
          document.getElementById("recaptchaToken").value = token;
        });
    });
  }
}

// Handle contact form submission with reCAPTCHA
function handleContactSubmit(event) {
  event.preventDefault();

  const siteKey = "6LfcJxEsAAAAGXg4YV9FtkPQjlkzWFPbjsAfij";

  // Get reCAPTCHA token
  window.grecaptcha.ready(function () {
    window.grecaptcha
      .execute(siteKey, { action: "submit" })
      .then(function (token) {
        document.getElementById("recaptchaToken").value = token;

        // Submit form after token is set
        document.getElementById("contactForm").submit();
      });
  });
}

// Input validation helper
function validateFormInput(value, type) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;

  switch (type) {
    case "email":
      return emailRegex.test(value);
    case "phone":
      return phoneRegex.test(value) || value === "";
    case "name":
      return value.trim().length > 0;
    default:
      return true;
  }
}

// Initialize reCAPTCHA when page loads
document.addEventListener("DOMContentLoaded", function () {
  initializeRecaptcha();
});

// Testimonial toggle function
function toggleTestimonial(headerElement) {
  const testimonialItem = headerElement.closest(".testimonial-item");
  const content = testimonialItem.querySelector(".testimonial-content");
  const preview = testimonialItem.querySelector(".testimonial-preview");
  const expandBtn = headerElement.querySelector(".expand-btn");
  const isOpen = content.style.display !== "none";

  if (isOpen) {
    // Close
    content.style.display = "none";
    preview.style.display = "block";
    expandBtn.classList.remove("active");
  } else {
    // Open
    content.style.display = "block";
    preview.style.display = "none";
    expandBtn.classList.add("active");
  }
}

// New testimonial card toggle function
function toggleTestimonialCard(button) {
  const card = button.closest(".testimonial-card");
  const excerpt = card.querySelector(".testimonial-excerpt");
  const full = card.querySelector(".testimonial-full");
  const readMoreText = button.querySelector(".read-more-text");
  const icon = button.querySelector("i");
  const isExpanded = full.style.display !== "none";

  // Get current language from translations.js (default to 'en' if not available)
  const lang = typeof currentLanguage !== "undefined" ? currentLanguage : "en";
  const trans = typeof translations !== "undefined" ? translations : null;

  if (isExpanded) {
    // Collapse
    excerpt.style.display = "block";
    full.style.display = "none";
    readMoreText.textContent =
      trans && trans[lang] && trans[lang]["read_more"]
        ? trans[lang]["read_more"]
        : "Read More";
    icon.classList.remove("fa-chevron-up");
    icon.classList.add("fa-chevron-down");
    button.classList.remove("expanded");
  } else {
    // Expand
    excerpt.style.display = "none";
    full.style.display = "block";
    readMoreText.textContent =
      trans && trans[lang] && trans[lang]["read_less"]
        ? trans[lang]["read_less"]
        : "Read Less";
    icon.classList.remove("fa-chevron-down");
    icon.classList.add("fa-chevron-up");
    button.classList.add("expanded");
  }
}

// Show custom alert modal
function showCustomAlert() {
  const modal = document.getElementById("customAlertModal");
  if (modal) {
    modal.style.display = "flex";
  }
}

// Close custom alert modal
function closeCustomAlert() {
  const modal = document.getElementById("customAlertModal");
  if (modal) {
    modal.style.display = "none";
  }
}

// Close modal when clicking outside
window.addEventListener("click", function (event) {
  const modal = document.getElementById("customAlertModal");
  if (event.target === modal) {
    closeCustomAlert();
  }
});
