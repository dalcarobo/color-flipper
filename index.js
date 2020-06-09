const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.getElementById('change');
const select = document.getElementById('select');
const body = document.querySelector('body');
const span = document.getElementById('span-hexcode');
const spanRGB = document.getElementById('span-rgbcode');
const selected = document.getElementById('selected');

button.addEventListener('click', () => {
    let hexCode = "#";
    for (let index = 0; index < 6; index++) {
        hexCode += hex[getValueFromHex()];
    }
    const rgb = hexToRgb(hexCode);
    body.style.backgroundColor = hexCode;
    body.style.transition = "all 1s";
    span.innerHTML = hexCode;
    select.value = hexCode;
    spanRGB.innerHTML = `rgb(${rgb.r},${rgb.g},${rgb.b})`;
});

select.addEventListener('click', () => {
    selectColor(select.value);
})

const getValueFromHex = () => {
    return Math.floor(Math.random() * hex.length);
};

const selectColor = (color) => {
    const div = document.createElement('div');
    const span = document.createElement('span');
    div.style.backgroundColor = color;
    span.innerText = color;
    div.append(span);
    selected.append(div);
};

function hexToRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
