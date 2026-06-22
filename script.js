function openImage(img) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    lightboxImg.src = img.src;

    // mostrar el lightbox correctamente
    lightbox.style.display = "flex";

    // pequeño delay para activar animación CSS
    setTimeout(() => {
        lightbox.classList.add("show");
    }, 10);
}

function closeImage() {
    const lightbox = document.getElementById("lightbox");

    // quitar animación
    lightbox.classList.remove("show");

    // esperar animación antes de ocultar
    setTimeout(() => {
        lightbox.style.display = "none";
    }, 200);
}

// cerrar con tecla ESC (opcional pero profesional)
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeImage();
    }
});

function toggleMenu() {
    document.getElementById("nav-menu").classList.toggle("active");
}

function closeMenu() {
    document.getElementById("nav-menu").classList.remove("active");
}
