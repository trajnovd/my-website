document.addEventListener("DOMContentLoaded", () => {
  // Add menu toggle button to navigation
  const nav = document.querySelector("nav");
  const navList = nav.querySelector("ul");

  const menuToggle = document.createElement("button");
  menuToggle.className = "menu-toggle";
  menuToggle.innerHTML = "☰";
  nav.insertBefore(menuToggle, navList);

  // Toggle mobile menu
  menuToggle.addEventListener("click", () => {
    navList.classList.toggle("visible");
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && navList.classList.contains("visible")) {
      navList.classList.remove("visible");
    }
  });

  // Handle form submission (prevent default for now)
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      alert(
        "This is a demo form. In a real implementation, this would send your message."
      );
    });
  }

  // Scroll-based Navigation Highlight
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href").includes(id)) {
            link.classList.add("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    section.setAttribute("id", section.className);
    observer.observe(section);
  });

  // Image Lightbox
  const projectImages = document.querySelectorAll(".project-card img");

  // Create lightbox elements
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <span class="close-lightbox">&times;</span>
      <img src="" alt="Project Image">
      <div class="lightbox-caption"></div>
    </div>
  `;
  document.body.appendChild(lightbox);

  // Add click event to project images
  projectImages.forEach((img) => {
    img.addEventListener("click", () => {
      const projectCard = img.closest(".project-card");
      const title = projectCard.querySelector("h3").textContent;
      const description = projectCard.querySelector("p").textContent;

      lightbox.querySelector("img").src = img.src;
      lightbox.querySelector(".lightbox-caption").innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
      `;
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  // Close lightbox
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target.className === "close-lightbox") {
      lightbox.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  // Handle page refresh and caching
  window.addEventListener("load", function () {
    // Clear any cached data
    if (
      window.performance &&
      window.performance.navigation.type ===
        window.performance.navigation.TYPE_BACK_FORWARD
    ) {
      window.location.reload();
    }
  });

  // Add active state to current navigation item
  const currentPage = window.location.pathname.split("/").pop();
  const navLinksLoaded = document.querySelectorAll("nav ul li a");

  navLinksLoaded.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // Add smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
