const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");
const tempInputs = document.querySelectorAll("input");

tempInputs.forEach(input => {
    input.addEventListener("input", (e) => {
        let tempValue = parseFloat(e.target.value);
        let inputName = e.target.name;

        if (e.target.value === "") {
            celsiusInput.value = "";
            fahrenheitInput.value = "";
            kelvinInput.value = "";
            return;
        }

        if (inputName === "celsius") {
            let fahrenheit = (tempValue * 9/5) + 32;
            let kelvin = tempValue + 273.15;
            fahrenheitInput.value = fahrenheit.toFixed(2);
            kelvinInput.value = kelvin.toFixed(2);
        } else if (inputName === "fahrenheit") {
            let celsius = (tempValue - 32) * 5/9;
            let kelvin = (tempValue - 32) * 5/9 + 273.15;
            celsiusInput.value = celsius.toFixed(2);
            kelvinInput.value = kelvin.toFixed(2);
        } else if (inputName === "kelvin") {
            let celsius = tempValue - 273.15;
            let fahrenheit = (tempValue - 273.15) * 9/5 + 32;
            celsiusInput.value = celsius.toFixed(2);
            fahrenheitInput.value = fahrenheit.toFixed(2);
        }
    });
});