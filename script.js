window.onload = function() {
  var images = document.querySelectorAll("#galeria img");
  var current = 0;

  document.querySelector("#poprzedni").addEventListener("click", function() {
    images[current].classList.remove("active");
    current = (current - 1+ images.length) % images.length;
    images[current].classList.add("active");
  });

  document.querySelector("#nastepny").addEventListener("click", function() {
    images[current].classList.remove("active");
    current = (current + 1) % images.length;
    images[current].classList.add("active");
  });
};
