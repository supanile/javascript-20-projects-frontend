const eyeIcon = document.querySelector("#eye");
const passwordEl = document.querySelector("#password");
const emailEl = document.querySelector("#email");
const form = document.querySelector("form");

eyeIcon.addEventListener("click", () => {
    if (eyeIcon.classList.contains("fa-eye")) {
        eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
        passwordEl.setAttribute("type", "text");
    } else {
        eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
        passwordEl.setAttribute("type", "password");
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (emailEl.value && passwordEl.value) {
        alert("ล็อกอินสำเร็จ!");
    } else {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
});

// Add floating label effect
[emailEl, passwordEl].forEach(input => {
    input.addEventListener("focus", () => {
        input.labels[0].classList.add("active");
    });
    input.addEventListener("blur", () => {
        if (!input.value) {
            input.labels[0].classList.remove("active");
        }
    });
});