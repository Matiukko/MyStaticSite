document.addEventListener("DOMContentLoaded", function() {
  const toTopButton = document.createElement("button");
  toTopButton.textContent = "Takaisin ylös";
  toTopButton.style.position = "fixed";
  toTopButton.style.bottom = "20px";
  toTopButton.style.right = "20px";
  toTopButton.style.padding = "10px";
  toTopButton.style.display = "none";

  document.body.appendChild(toTopButton);

  window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
      toTopButton.style.display = "block";
    } else {
      toTopButton.style.display = "none";
    }
  });

  toTopButton.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
