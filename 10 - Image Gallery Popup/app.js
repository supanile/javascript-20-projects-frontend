const smallImg = document.querySelectorAll(".gallery img");
const fullImg = document.querySelector(".full-image");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-modal");

smallImg.forEach(img => {
    img.addEventListener("click", () => {
        const fullsize = img.getAttribute("alt");
        const path = `foods-images/full/${fullsize}.jpg`;
        fullImg.src = path;
        modal.classList.add("open");
    });
});

function closeModal() {
    modal.classList.remove("open");
}

modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
        closeModal();
    }
});

closeBtn.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
        closeModal();
    }
});