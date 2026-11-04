// Amplía las capturas de las galerías en un <dialog> nativo
const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox.querySelector("img");

document.querySelectorAll(".zoom").forEach((button) => {
  const img = button.querySelector("img");
  button.setAttribute("aria-label", `Ampliar imagen: ${img.alt}`);
  button.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.showModal();
  });
});

// Cierra también al pulsar fuera de la imagen
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});
