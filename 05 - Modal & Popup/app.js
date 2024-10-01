document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector(".modal-container");
    const toggleModal = () => modal.classList.toggle("show");

    document.querySelector(".open-btn").addEventListener("click", toggleModal);
    document.querySelector(".close-btn").addEventListener("click", toggleModal);

    modal.addEventListener("click", e => e.target === modal && toggleModal());
    document.addEventListener("keydown", e => e.key === "Escape" && modal.classList.contains("show") && toggleModal());
});