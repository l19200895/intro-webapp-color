const redRange = document.getElementById('redRange');
const greenRange = document.getElementById('greenRange');
const blueRange = document.getElementById('blueRange');
const redInput = document.getElementById('redInput');
const greenInput = document.getElementById('greenInput');
const blueInput = document.getElementById('blueInput');
const colorPicker = document.getElementById('colorPicker');
const colorDisplay = document.getElementById('colorDisplay');
const hexCode = document.getElementById('hexCode');

function updateColor() {
    const r = parseInt(redRange.value);
    const g = parseInt(greenRange.value);
    const b = parseInt(blueRange.value);

    const rgb = `rgb(${r}, ${g}, ${b})`;
    const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;

    colorDisplay.style.backgroundColor = rgb;
    hexCode.textContent = hex;

    // Actualizar los campos de entrada
    redInput.value = r;
    greenInput.value = g;
    blueInput.value = b;

    // Actualizar el selector de color
    colorPicker.value = hex;
}

function updateRangeFromInput() {
    const r = parseInt(redInput.value);
    const g = parseInt(greenInput.value);
    const b = parseInt(blueInput.value);

    redRange.value = r;
    greenRange.value = g;
    blueRange.value = b;

    updateColor();
}

function updateFromColorPicker() {
    const hex = colorPicker.value;
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    redRange.value = r;
    greenRange.value = g;
    blueRange.value = b;

    redInput.value = r;
    greenInput.value = g;
    blueInput.value = b;

    updateColor();
}

// Sincronizar controles deslizantes con los campos de entrada
redRange.addEventListener('input', updateColor);
greenRange.addEventListener('input', updateColor);
blueRange.addEventListener('input', updateColor);

// Sincronizar campos de entrada con los controles deslizantes
redInput.addEventListener('input', updateRangeFromInput);
greenInput.addEventListener('input', updateRangeFromInput);
blueInput.addEventListener('input', updateRangeFromInput);

// Sincronizar el selector de color con los valores RGB
colorPicker.addEventListener('input', updateFromColorPicker);
