const charCount = document.getElementById('char-count');
const textInput = document.getElementById('text-input');
const clearBtn = document.getElementById('clear-btn');

textInput.addEventListener('input', updateCharCount);
clearBtn.addEventListener('click', clearText);

function updateCharCount() {
    const count = textInput.value.length;
    charCount.textContent = count;

    if (count > 100) {
        charCount.style.color = '#e74c3c';
    } else if (count > 50) {
        charCount.style.color = '#fabc3f';
    } else {
        charCount.style.color = '#667eea';
    }
}

function clearText() {
    textInput.value = '';
    updateCharCount();
}