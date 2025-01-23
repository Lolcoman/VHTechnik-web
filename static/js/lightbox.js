let currentImageIndex = 0; // Počáteční index obrázku
let imagesList = []; // Seznam všech obrázků
let imageTitles = []; // Seznam názvů obrázků

// Otevře lightbox s obrázkem
function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxTitle = document.getElementById("lightbox-title");

  // Získání seznamu všech obrázků a jejich názvů
  imagesList = Array.from(document.querySelectorAll(".image-gallery a")).map(
    (link) => link.href
  );
  imageTitles = Array.from(document.querySelectorAll(".image-gallery a")).map(
    (link) => link.title
  );

  currentImageIndex = imagesList.indexOf(src);

  lightboxImg.src = src;

  // Odstranění přípony obrázku (jpg, jpeg, png, gif)
  let titleWithoutExtension = imageTitles[currentImageIndex].replace(
    /\.(jpg|jpeg|png|gif)$/i,
    ""
  );

  lightboxTitle.textContent = titleWithoutExtension; // Zobrazení názvu bez přípony
  lightbox.style.display = "flex"; // Změněno na "flex", aby byl obrázek vycentrován
}

// Zavře lightbox
function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none";
}

// Změní obrázek podle šipky
function changeImage(direction) {
  currentImageIndex += direction;

  // Zajistí, že index bude v rámci rozsahu seznamu
  if (currentImageIndex < 0) {
    currentImageIndex = imagesList.length - 1; // Přejde na poslední obrázek
  } else if (currentImageIndex >= imagesList.length) {
    currentImageIndex = 0; // Přejde na první obrázek
  }

  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxTitle = document.getElementById("lightbox-title");

  lightboxImg.src = imagesList[currentImageIndex];

  // Odstranění přípony obrázku pro aktuální obrázek
  let titleWithoutExtension = imageTitles[currentImageIndex].replace(
    /\.(jpg|jpeg|png|gif)$/i,
    ""
  );

  lightboxTitle.textContent = titleWithoutExtension; // Zobrazení názvu bez přípony
}

// Přidání event listenerů na všechny obrázky
document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = document.querySelectorAll(".image-gallery a");
  const lightbox = document.getElementById("lightbox");

  galleryImages.forEach((imageLink) => {
    imageLink.addEventListener("click", (event) => {
      event.preventDefault();
      openLightbox(imageLink.href);
    });
  });

  // Zavření lightboxu při kliknutí mimo obrázek
  lightbox.addEventListener("click", (event) => {
    if (!event.target.closest(".lightbox-content")) {
      closeLightbox();
    }
  });
});
