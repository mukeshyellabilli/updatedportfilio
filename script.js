// Toggle menu for mobile
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
  }
  
  // Scroll reveal animation
  const revealSections = () => {
    const sections = document.querySelectorAll("section");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
  
    sections.forEach((section) => {
      observer.observe(section);
    });
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    revealSections();
  });
  