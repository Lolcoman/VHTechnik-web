document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const slides = document.querySelectorAll(".carousel-slide");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  let currentIndex = 0;

  // Funkce pro aktivaci aktuálního slide
  const setActiveSlide = () => {
    slides.forEach((slide, index) => {
      slide.classList.remove("active");
      if (index === currentIndex) {
        slide.classList.add("active");
      }
    });
  };

  // Funkce pro přechod na další obrázek
  const showNextSlide = () => {
    currentIndex = (currentIndex + 1) % slides.length;
    setActiveSlide();
  };

  // Funkce pro přechod na předchozí obrázek
  const showPrevSlide = () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    setActiveSlide();
  };

  // Ovládání tlačítek pro změnu obrázku
  nextButton.addEventListener("click", showNextSlide);
  prevButton.addEventListener("click", showPrevSlide);

  // Automatické přepínání (každé 8 sekund)
  setInterval(showNextSlide, 8000);

  // Nastavení prvního aktivního slide
  setActiveSlide();
});
