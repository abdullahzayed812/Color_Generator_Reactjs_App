export function rgbToHex(rgb) {
    const hexColor = "#";
    for (let i = 0; i < rgb.length; i += 1) {
        hexColor += componentToHex(rgb[i]);
    }
    return hexColor;
}

function componentToHex(number) {
    const hex = number.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

