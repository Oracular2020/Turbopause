Copy code
function randomColor() {
  var color;
  do {
    color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  } while (getLightness(color) > 90);
  return color;
}

function getLightness(color) {
  var r = parseInt(color.substring(1, 3), 16);
  var g = parseInt(color.substring(3, 5), 16);
  var b = parseInt(color.substring(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000;
}
