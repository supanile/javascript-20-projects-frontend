const countEl = document.querySelector(".count");
const input = document.querySelector("#textInput");
const clearBtn = document.querySelector("#clearBtn");

function countVowels() {
    let word = input.value.toLowerCase();
    let vowelCount = 0;
    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        if (letter.match(/([a,e,i,o,u])/)) {
            vowelCount++;
        }
    }
    countEl.innerHTML = `${vowelCount}`;
}

input.addEventListener("input", countVowels);

clearBtn.addEventListener("click", () => {
    input.value = "";
    countVowels(); // เรียกใช้ฟังก์ชัน countVowels เพื่ออัปเดตการแสดงผล
});