[1, 3, 7, 4, 5][([1, 3, 7], [4, 5])];

function split(wholeArray) {
  var l = wholeArray.length / 2;
  var center = Math.round(l);
  var newarr = [wholeArray.slice(0, 3), wholeArray.slice(3)];

  console.log('center', center);

  return newarr;
}
