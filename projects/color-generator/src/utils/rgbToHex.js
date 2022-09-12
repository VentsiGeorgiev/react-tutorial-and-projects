function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}

function rgbToHex(r, g, b) {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

module.exports = {
    rgbToHex
};

// https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb