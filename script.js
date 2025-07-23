window.onscroll = () => {
  let top = window.scrollY;
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll(".nav-links a");

  sections.forEach(sec => {
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
};

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Your message has been sent successfully!");
    form.reset();
  });

  document.querySelectorAll(".footer-nav a").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  const toggle = document.getElementById("menu-toggle");
  const navLinksContainer = document.querySelector(".nav-links");

  toggle.addEventListener("click", () => {
    navLinksContainer.classList.toggle("active");
  });
});
