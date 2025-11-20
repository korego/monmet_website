// Load header and footer includes
async function loadIncludes() {
  // Load header
  const headerPlaceholder = document.getElementById("header-placeholder");
  if (headerPlaceholder) {
    try {
      const response = await fetch("includes/header.html");
      const html = await response.text();
      headerPlaceholder.innerHTML = html;

      // Set active nav link based on current page
      setActiveNavLink();
    } catch (error) {
      console.error("Error loading header:", error);
    }
  }

  // Load footer
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    try {
      const response = await fetch("includes/footer.html");
      const html = await response.text();
      footerPlaceholder.innerHTML = html;
    } catch (error) {
      console.error("Error loading footer:", error);
    }
  }
}

// Set active nav link based on current page
function setActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.classList.remove("active");
    const href = link.getAttribute("href");

    // Handle index.html and root
    if (
      (currentPage === "" || currentPage === "index.html") &&
      href === "index.html"
    ) {
      link.classList.add("active");
    } else if (href === currentPage) {
      link.classList.add("active");
    }
  });
}

// Load includes when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loadIncludes);
} else {
  loadIncludes();
}
