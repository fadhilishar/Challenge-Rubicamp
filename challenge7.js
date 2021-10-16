function weirdMultiply(sentence) {
  let sisa = 0,
    i = 0,
    arraySisa = [],
    hasilKali = 1;
  while (sentence >= 1) {
    sisa = sentence % 10;
    arraySisa[i] = sisa;
    sentence = (sentence - sisa) / 10;
    hasilKali *= arraySisa[i];
    i++;
  }
  if (hasilKali >= 10) {
    return weirdMultiply(hasilKali);
  } else {
    return hasilKali;
  }
}
console.log(weirdMultiply(39));
console.log(weirdMultiply(999));
console.log(weirdMultiply(3));
