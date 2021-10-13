function romawi(n) {
  /*if (n % 1000000 >= 4) { 
  } else if (n % 1000 >= 4) {
  }
  */
  if (n / 1000 < 4) {
    let r = "",
      desimal = [3000, 2000, 1000, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
      dataRomawi = [
        "MMM",
        "MM",
        "M",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I",
      ];
    for (var i = 0; i < desimal.length; i++) {
      while (n >= desimal[i]) {
        r += dataRomawi[i];
        n -= desimal[i];
      }
    }
    console.log(r);
  }
}
romawi(4);
romawi(9);
romawi(13);
romawi(1453);
romawi(1646);
